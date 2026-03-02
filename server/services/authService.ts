import { createClient } from "@supabase/supabase-js";
import jwt from "jsonwebtoken";

// Initialize Supabase with service role key for server-side operations
const supabaseUrl = process.env.VITE_PUBLIC_SUPABASE_URL || "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || "";

if (!supabaseUrl || !supabaseServiceKey) {
  console.warn("Supabase credentials not configured on server");
}

const supabase = createClient(supabaseUrl, supabaseServiceKey);

// Admin emails list - update this with your admin emails
const ADMIN_EMAILS = (process.env.ADMIN_EMAILS || "admin@example.com")
  .split(",")
  .map((email) => email.trim());

export interface AuthUser {
  id: string;
  email: string;
  isAdmin: boolean;
  createdAt: string;
}

export interface AuthResponse {
  success: boolean;
  user?: AuthUser;
  token?: string;
  message?: string;
  error?: string;
}

/**
 * Sign up a new user with email and password
 */
export async function signUp(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    // Create auth user in Supabase
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password,
      email_confirm: true, // Auto-confirm email
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    if (!data.user) {
      return {
        success: false,
        error: "Failed to create user",
      };
    }

    const user: AuthUser = {
      id: data.user.id,
      email: data.user.email || "",
      isAdmin: ADMIN_EMAILS.includes(data.user.email || ""),
      createdAt: data.user.created_at,
    };

    // Generate JWT token
    const token = generateToken(user);

    return {
      success: true,
      user,
      token,
    };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

/**
 * Sign in user with email and password
 */
export async function signIn(
  email: string,
  password: string
): Promise<AuthResponse> {
  try {
    // Authenticate with Supabase
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return {
        success: false,
        error: error.message,
      };
    }

    if (!data.user) {
      return {
        success: false,
        error: "Authentication failed",
      };
    }

    const user: AuthUser = {
      id: data.user.id,
      email: data.user.email || "",
      isAdmin: ADMIN_EMAILS.includes(data.user.email || ""),
      createdAt: data.user.created_at,
    };

    // Generate JWT token
    const token = generateToken(user);

    return {
      success: true,
      user,
      token,
    };
  } catch (err) {
    return {
      success: false,
      error: err instanceof Error ? err.message : "Unknown error",
    };
  }
}

/**
 * Verify JWT token and return user
 */
export function verifyToken(token: string): AuthUser | null {
  try {
    const secret = process.env.JWT_SECRET || "your-secret-key";
    const decoded = jwt.verify(token, secret) as AuthUser;
    return decoded;
  } catch {
    return null;
  }
}

/**
 * Generate JWT token from user
 */
function generateToken(user: AuthUser): string {
  const secret = process.env.JWT_SECRET || "your-secret-key";
  return jwt.sign(user, secret, {
    expiresIn: "7d",
  });
}

/**
 * Get user from Supabase by email
 */
export async function getUserByEmail(email: string): Promise<AuthUser | null> {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*")
      .eq("email", email)
      .single();

    if (error || !data) {
      return null;
    }

    return {
      id: data.id,
      email: data.email,
      isAdmin: ADMIN_EMAILS.includes(data.email),
      createdAt: data.created_at,
    };
  } catch {
    return null;
  }
}
