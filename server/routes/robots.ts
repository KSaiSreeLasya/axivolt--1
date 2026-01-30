import { RequestHandler } from "express";

export const handleRobots: RequestHandler = (req, res) => {
  const origin = `${req.protocol}://${req.get("host")}`;

  const robots = `# Robots.txt for AXIVOLT
# This file tells search engines how to crawl and index the website

User-agent: *
Allow: /

# Disallow admin dashboard from indexing
Disallow: /admin

# Sitemap location
Sitemap: ${origin}/sitemap.xml

# Crawl delay to prevent overloading the server
Crawl-delay: 1

# Allow specific search engines full access
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /

# Block bad bots
User-agent: AhrefsBot
Disallow: /

User-agent: SemrushBot
Disallow: /

User-agent: DotBot
Disallow: /
`;

  res.type("text/plain");
  res.send(robots);
};
