import { defineCollection, z } from "astro:content";

const reviews = defineCollection({
  schema: z.object({
    title: z.string(),
    pubDate: z.string(),
    description: z.string(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    buyLink: z.string().optional(),
    series: z.string().optional(), // 书评所属分类，比如 hazard、seven-of-spades
  }),
});

export const collections = {
  reviews,
};