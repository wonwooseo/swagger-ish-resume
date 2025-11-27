import { defineCollection, defineContentConfig } from '@nuxt/content';
import { z } from 'zod';

export default defineContentConfig({
  collections: {
    resumes: defineCollection({
      type: 'data',
      source: {
        include: '**.yaml',
        exclude: ['.sample.yaml'],
      },
      schema: z.object({
        title: z.string(),
        badges: z.array(
          z.object({
            text: z.string(),
            color: z.string(),
          }),
        ).optional(),
        summary: z.string(),
        contact: z.object({
          phone: z.string(),
          email: z.string().email(),
        }),
        location: z.string(),
        websites: z.array(z.string().url()),
        education: z.array(
          z.object({
            institution: z.string(),
            location: z.string(),
            degree: z.string(),
            gpa: z.string(),
          }),
        ),
        skill: z.array(
          z.object({
            category: z.string(),
            list: z.array(z.string()),
          }),
        ),
        work: z.array(
          z.object({
            company: z.string(),
            position: z.string(),
            description: z.string(),
            location: z.string(),
            achievements: z.array(
              z.object({
                name: z.string(),
                descriptions: z.array(z.string()),
                stacks: z.array(z.string()),
              }),
            ).optional(),
          }),
        ),
        project: z.array(
          z.object({
            name: z.string(),
            description: z.string(),
            websites: z.array(z.string().url()).optional(),
            stacks: z.array(z.string()).optional(),
          }),
        ),
      }),
    }),
  },
});
