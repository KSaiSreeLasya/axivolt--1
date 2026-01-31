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

  // 301 redirect from old domain to new domain
  app.use((req, res, next) => {
    const host = req.get("host") || "";
    const hostWithoutPort = host.split(":")[0];

    // Match both www.axisogreen.in and axisogreen.in
    if (hostWithoutPort === "axisogreen.in" || hostWithoutPort === "www.axisogreen.in") {
      const newUrl = `https://www.axivolt.in${req.originalUrl}`;
      return res.redirect(301, newUrl);
    }
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
