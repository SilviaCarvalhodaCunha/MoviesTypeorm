import { z } from "zod";

const moviesSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number(),
  price: z.number(),
});

const requestMoviesSchema = moviesSchema.omit({ id: true });

const requestMoviesUpdateSchema = requestMoviesSchema.partial();

export { moviesSchema, requestMoviesSchema, requestMoviesUpdateSchema };
