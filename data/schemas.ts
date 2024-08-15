import { z } from "zod";

export const SocialSchema = z.object({
  type: z.enum(["linkedin", "github", "mail", "link"]),
  href: z.string(),
});

export const PositionSchema = z.object({
  id: z.number(),
  short_name: z.string().nullable(),
  name: z.string(),
  href: z.string(),
  start_year: z.number(),
  start_month: z.number(),
  end_year: z.number().nullable(),
  end_month: z.number().nullable(),
  position: z.string(),
  tasks: z.array(z.string()).nullable(),
  links: z.array(z.number()).nullable(),
  slug: z.string(),
});

export const PositionsSchema = z.array(PositionSchema);

export type PositionType = z.infer<typeof PositionSchema>;

const ResponseSchema = z.object({
  name: z.string(),
  title: z.string(),
  socials: z.array(SocialSchema),
  positions: z.array(PositionSchema),
});

export type ResponseType = z.infer<typeof ResponseSchema>;

export const OGMetadataSchema = z.object({
  title: z.string().optional(),
  type: z.string().optional(),
  description: z.string().optional(),
  image: z.string().optional(),
  imageAlt: z.string().optional(),
  updatedAt: z.string().optional(),
  url: z.string(),
  domain: z.string(),
  path: z.string(),
});

export type OGMetadataType = z.infer<typeof OGMetadataSchema>;

export const LinkStorageSchema = z.object({
  id: z.number(),
  href: z.string(),
  position_id: z.number().nullable(),
});

export const LinksStorageSchema = z.array(LinkStorageSchema);

export type LinkStorageType = z.infer<typeof LinkStorageSchema>;
