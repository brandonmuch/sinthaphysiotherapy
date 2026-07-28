import { defineCollection, z } from "astro:content";
import { glob, file } from "astro/loaders";
import { load as parseYaml } from "js-yaml";

const home = defineCollection({
  loader: glob({ pattern: "*.md", base: "content/home" }),
});

const about = defineCollection({
  loader: glob({ pattern: "*.md", base: "content/about" }),
});

const services = defineCollection({
  loader: glob({ pattern: "*.md", base: "content/services" }),
  schema: z.object({
    title: z.string(),
    icon: z.string(),
    order: z.number(),
    summary: z.string(),
    body: z.string(),
    whatsappMessage: z.string(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "*.md", base: "content/team" }),
  schema: z.object({
    name: z.string(),
    order: z.number(),
    credentials: z.array(z.string()),
    specialties: z.array(z.string()),
    photo: z.string(),
    bio: z.string(),
  }),
});

const insights = defineCollection({
  loader: glob({ pattern: "*.md", base: "content/insights" }),
  schema: z.object({
    title: z.string(),
    category: z.enum([
      "Respiratory",
      "Paediatrics",
      "Geriatrics",
      "Neuro Rehab",
      "Postoperative Recovery",
      "Cardiac Rehab",
      "General Wellness",
    ]),
    date: z.coerce.date(),
    excerpt: z.string(),
    image: z.string(),
    featured: z.boolean().default(false),
  }),
});

const siteSettings = defineCollection({
  loader: file("content/data/site-settings.yml", {
    parser: (text) => {
      const parsed = parseYaml(text) as { settings: Record<string, unknown> };
      return [{ id: "main", ...parsed.settings }];
    },
  }),
  schema: z.object({
    wordmark: z.string(),
    phone: z.string(),
    whatsapp: z.string(),
    email: z.string(),
    addressLine1: z.string(),
    addressLine2: z.string(),
    hours: z.string(),
    hoursNote: z.string(),
    facebookUrl: z.string(),
    instagramUrl: z.string(),
    googleBusinessUrl: z.string(),
    legalName: z.string(),
  }),
});

const affiliatedProfessionals = defineCollection({
  loader: file("content/data/affiliated-professionals.yml", {
    parser: (text) => {
      const parsed = parseYaml(text) as { professionals: Array<Record<string, unknown>> };
      return parsed.professionals;
    },
  }),
  schema: z.object({
    id: z.string(),
    order: z.number(),
    name: z.string(),
    specialty: z.string(),
    location: z.string(),
    phone: z.string(),
  }),
});

export const collections = {
  home,
  about,
  services,
  team,
  insights,
  siteSettings,
  affiliatedProfessionals,
};
