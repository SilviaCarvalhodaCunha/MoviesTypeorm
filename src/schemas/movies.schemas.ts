import { z } from "zod";

const moviesSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().nullish(),
  duration: z.number().positive().int(),
  price: z.number().positive().int(),
});

const requestMoviesSchema = moviesSchema.omit({ id: true });

const requestMoviesUpdateSchema = requestMoviesSchema.partial();

const moviesReadAllSchema = z.array(moviesSchema);

const paginationMovieSchema = z.object({
  prevPage: z.string().nullish(),
  nextPage: z.string().nullish(),
  count: z.number().min(0),
  data: moviesReadAllSchema,
});

export {
  moviesSchema,
  requestMoviesSchema,
  requestMoviesUpdateSchema,
  moviesReadAllSchema,
  paginationMovieSchema
};
