import { defineCollection, z } from "astro:content";

const reviews = defineCollection({
  schema: z.object({
    title: z.string(),
    author: z.string(),
    authorDate: z
      .string()
      .regex(/^\d{4}(-\d{2})?(-\d{2})?$/, {
        message: "authorDate 必须是 YYYY 或 YYYY-MM 或 YYYY-MM-DD 格式",
      }),
    reviewDate: z.string(), // 用 YYYY-MM-DD，便于排序
    rating: z.number().min(0).max(10), 
    description: z.string(),
    tags: z.array(z.string()).optional(),
    cover: z.string().optional(),
    buyLink: z.string().optional(),
    series: z.string().optional(), // 书评所属分类，比如 hazard、seven-of-spades
    showAmazonCover: z.boolean().optional(), //书评是否显示亚马逊封面和购买链接
  }),
});

export const collections = {
  reviews,
};