import { z } from "zod";
import { moviesSchema, requestMoviesSchema, requestMoviesUpdateSchema } from "../schemas/movies.schemas";

type TMovies = z.infer<typeof moviesSchema>;

type TRequestMovies = z.infer<typeof requestMoviesSchema>;

type TRequestMoviesUpdate = z.infer<typeof requestMoviesUpdateSchema>

export { TMovies, TRequestMovies, TRequestMoviesUpdate };
