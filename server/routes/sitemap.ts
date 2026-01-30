import { RequestHandler } from "express";

export const handleSitemap: RequestHandler = (req, res) => {
  const origin = `${req.protocol}://${req.get("host")}`;

  // All routes in the application
  const routes = [
    { path: "/", priority: "1.0", changefreq: "weekly" },
    { path: "/industry", priority: "0.8", changefreq: "monthly" },
    { path: "/careers", priority: "0.7", changefreq: "monthly" },
    { path: "/about", priority: "0.8", changefreq: "monthly" },
    { path: "/contact", priority: "0.9", changefreq: "weekly" },
    { path: "/quote", priority: "0.9", changefreq: "weekly" },
    { path: "/services", priority: "0.8", changefreq: "monthly" },
    { path: "/advisory", priority: "0.7", changefreq: "monthly" },
    { path: "/procurement", priority: "0.7", changefreq: "monthly" },
    { path: "/digital-solutions", priority: "0.7", changefreq: "monthly" },
    { path: "/solutions", priority: "0.9", changefreq: "monthly" },
    { path: "/solutions/solar", priority: "0.9", changefreq: "monthly" },
    {
      path: "/solutions/solar/residential",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      path: "/solutions/solar/commercial",
      priority: "0.8",
      changefreq: "monthly",
    },
    {
      path: "/solutions/solar/government",
      priority: "0.8",
      changefreq: "monthly",
    },
    { path: "/solutions/wind", priority: "0.8", changefreq: "monthly" },
    {
      path: "/solutions/energy-storage",
      priority: "0.8",
      changefreq: "monthly",
    },
    { path: "/solutions/ev-stations", priority: "0.8", changefreq: "monthly" },
    { path: "/privacy-policy", priority: "0.5", changefreq: "yearly" },
    { path: "/terms-of-service", priority: "0.5", changefreq: "yearly" },
    { path: "/cookie-policy", priority: "0.5", changefreq: "yearly" },
    { path: "/compliance", priority: "0.5", changefreq: "yearly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `  <url>
    <loc>${origin}${route.path}</loc>
    <lastmod>${new Date().toISOString().split("T")[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`,
  )
  .join("\n")}
</urlset>`;

  res.type("application/xml");
  res.send(sitemap);
};
