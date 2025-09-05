import { defineCollection, z } from "astro:content";

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string().max(180),
    date: z.string(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    layout: z.string().optional()
  }),
});

export const collections = { posts };
