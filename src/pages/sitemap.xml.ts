import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

const staticRoutes = ["/", "/services", "/about", "/contact", "/insights"];

export const GET: APIRoute = async ({ site }) => {
  const base = site?.toString().replace(/\/$/, "") ?? "https://sinthaphysiotherapy.co.za";
  const articles = await getCollection("insights");

  const urls = [
    ...staticRoutes.map((path) => ({ loc: `${base}${path}`, lastmod: undefined as string | undefined })),
    ...articles.map((article) => ({
      loc: `${base}/insights/${article.id}`,
      lastmod: article.data.date.toISOString().slice(0, 10),
    })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>${u.lastmod ? `\n    <lastmod>${u.lastmod}</lastmod>` : ""}
  </url>`
  )
  .join("\n")}
</urlset>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
};
