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
        profile: z.object({
          name: z.string(),
          badges: z.array(
            z.object({
              text: z.string(),
              color: z.string(),
            }),
          ).optional(),
          description: z.string(),
          phone: z.string(),
          email: z.string().email(),
          location: z.string(),
          websites: z.array(z.string().url()),
        }),
        education: z.array(
          z.object({
            backgroundColor: z.string().optional(),
            borderColor: z.string().optional(),
            institution: z.string(),
            badge: z.object({
              text: z.string(),
              color: z.string(),
            }).optional(),
            degree: z.string(),
            description: z.string(),
            gpa: z.string(),
          }),
        ),
        skills: z.array(
          z.object({
            backgroundColor: z.string().optional(),
            borderColor: z.string().optional(),
            name: z.string(),
            badge: z.object({
              text: z.string(),
              color: z.string(),
            }).optional(),
            description: z.string(),
          }),
        ),
        workExperiences: z.array(
          z.object({
            backgroundColor: z.string().optional(),
            borderColor: z.string().optional(),
            company: z.string(),
            badge: z.object({
              text: z.string(),
              color: z.string(),
            }).optional(),
            position: z.string(),
            description: z.string(),
            location: z.string(),
            startDate: z.string(),
            endDate: z.string(),
            achievements: z.array(
              z.object({
                name: z.string(),
                description: z.array(z.string()),
                stacks: z.array(z.string()),
              }),
            ).optional(),
          }),
        ),
        personalProjects: z.array(
          z.object({
            backgroundColor: z.string().optional(),
            borderColor: z.string().optional(),
            name: z.string(),
            badge: z.object({
              text: z.string(),
              color: z.string(),
            }).optional(),
            description: z.string(),
            websites: z.array(z.string().url()).optional(),
            stacks: z.array(z.string()).optional(),
          }),
        ),
      }),
    }),
  },
});
