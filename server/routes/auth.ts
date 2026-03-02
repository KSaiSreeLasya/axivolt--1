import { RequestHandler } from "express";
import { signUp, signIn, verifyToken, type AuthUser } from "../services/authService";

const JWT_SECRET = process.env.JWT_SECRET || "your-secret-key";
const SECURE_COOKIES = process.env.NODE_ENV === "production";

declare global {
  namespace Express {
    interface Request {
      user?: AuthUser;
    }
  }
}

/**
 * Middleware to verify JWT token from cookie
 */
export const authMiddleware: RequestHandler = (req, res, next) => {
  const token = req.cookies?.authToken;

  if (!token) {
    req.user = undefined;
    return next();
  }

  const user = verifyToken(token);
  if (!user) {
    res.clearCookie("authToken");
    req.user = undefined;
    return next();
  }

  req.user = user;
  next();
};

/**
 * POST /api/auth/signup
 * Register a new user
 */
export const handleSignUp: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: "Email and password are required",
    });
    return;
  }

  const result = await signUp(email, password);

  if (!result.success) {
    res.status(401).json(result);
    return;
  }

  // Set secure HTTP-only cookie
  res.cookie("authToken", result.token, {
    httpOnly: true,
    secure: SECURE_COOKIES,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(201).json({
    success: true,
    user: result.user,
  });
};

/**
 * POST /api/auth/signin
 * Authenticate user and create session
 */
export const handleSignIn: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({
      success: false,
      error: "Email and password are required",
    });
    return;
  }

  const result = await signIn(email, password);

  if (!result.success) {
    res.status(401).json(result);
    return;
  }

  // Set secure HTTP-only cookie
  res.cookie("authToken", result.token, {
    httpOnly: true,
    secure: SECURE_COOKIES,
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  });

  res.status(200).json({
    success: true,
    user: result.user,
  });
};

/**
 * POST /api/auth/signout
 * Clear session
 */
export const handleSignOut: RequestHandler = (_req, res) => {
  res.clearCookie("authToken");
  res.status(200).json({
    success: true,
    message: "Signed out successfully",
  });
};

/**
 * GET /api/auth/me
 * Get current user from session
 */
export const handleGetMe: RequestHandler = (req, res) => {
  if (!req.user) {
    res.status(401).json({
      success: false,
      error: "Not authenticated",
    });
    return;
  }

  res.status(200).json({
    success: true,
    user: req.user,
  });
};

/**
 * GET /api/auth/verify
 * Verify token validity
 */
export const handleVerifyToken: RequestHandler = (req, res) => {
  const token = req.cookies?.authToken;

  if (!token) {
    res.status(401).json({
      success: false,
      authenticated: false,
    });
    return;
  }

  const user = verifyToken(token);

  if (!user) {
    res.clearCookie("authToken");
    res.status(401).json({
      success: false,
      authenticated: false,
    });
    return;
  }

  res.status(200).json({
    success: true,
    authenticated: true,
    user,
  });
};
