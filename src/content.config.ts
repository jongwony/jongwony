import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One timeline holds every kind of entry, so a single collection keeps sorting
// trivial. `kind` distinguishes them; the per-kind fields are optional.
//
// `date` carries its own precision in its length: 'YYYY-MM-DD' when the source
// states a day, 'YYYY-MM' for a month, 'YYYY' for a year alone. No day is
// invented, and no separate precision field is needed.
//
// Year-only exists for entries whose date has to be recalled rather than read
// off a source — the side projects still to be written up. String sort places
// such an entry below every dated entry of the same year, which is the right
// default for an unknown month.
const chronology = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/chronology' }),
  schema: z.object({
    kind: z.enum(['talk', 'press', 'project']),
    title: z.string(),
    date: z.string().regex(/^\d{4}(-\d{2}(-\d{2})?)?$/),
    dateEnd: z
      .string()
      .regex(/^\d{4}(-\d{2}(-\d{2})?)?$/)
      .optional(),

    // talk: the hosting event or organization
    org: z.string().optional(),
    orgUrl: z.string().optional(),

    // any kind: the primary outbound link (slides, article, project)
    link: z.string().optional(),

    // press: thumbnail, and the original byline string rendered as-is
    image: z.string().optional(),
    sourceNote: z.string().optional(),
  }),
});

export const collections = { chronology };
