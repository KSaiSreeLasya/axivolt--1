import "dotenv/config";
import express from "express";
import cors from "cors";
import path from "path";
import { handleDemo } from "./routes/demo";
import { handleSitemap } from "./routes/sitemap";
import { handleRobots } from "./routes/robots";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

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
