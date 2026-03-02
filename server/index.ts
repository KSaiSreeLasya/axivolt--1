import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import { handleDemo } from "./routes/demo";
import { handleSitemap } from "./routes/sitemap";
import { handleRobots } from "./routes/robots";
import {
  handleSignUp,
  handleSignIn,
  handleSignOut,
  handleGetMe,
  handleVerifyToken,
  authMiddleware,
} from "./routes/auth";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use(cookieParser());
  app.use(authMiddleware);

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // Auth routes
  app.post("/api/auth/signup", handleSignUp);
  app.post("/api/auth/signin", handleSignIn);
  app.post("/api/auth/signout", handleSignOut);
  app.get("/api/auth/me", handleGetMe);
  app.get("/api/auth/verify", handleVerifyToken);

  // SEO routes
  app.get("/sitemap.xml", handleSitemap);
  app.get("/robots.txt", handleRobots);

  // In production, serve static files from dist/spa
  if (process.env.NODE_ENV === "production") {
    const spaPath = path.join(__dirname, "../dist/spa");
    app.use(express.static(spaPath));

    // SPA fallback: serve index.html for all non-API routes
    app.use((_req, res) => {
      res.sendFile(path.join(spaPath, "index.html"));
    });
  }

  return app;
}
