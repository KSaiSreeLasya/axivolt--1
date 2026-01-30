import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleSitemap } from "./routes/sitemap";
import { handleRobots } from "./routes/robots";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Don't redirect between domains - serve same content
  // Both axivolt.in and axiosgreen.in should serve without redirects
  app.use((req, res, next) => {
    next();
  });

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);

  // SEO routes
  app.get("/sitemap.xml", handleSitemap);
  app.get("/robots.txt", handleRobots);

  return app;
}
