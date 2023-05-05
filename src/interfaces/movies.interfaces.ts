import { z } from "zod";
import {
  moviesSchema,
  requestMoviesSchema,
  requestMoviesUpdateSchema,
} from "../schemas/movies.schemas";
import { DeepPartial } from "typeorm";

type TMovies = z.infer<typeof moviesSchema>;

type TRequestMovies = z.infer<typeof requestMoviesSchema>;

type TRequestMoviesUpdate = z.infer<typeof requestMoviesUpdateSchema>;

type TMoviesUpdate = DeepPartial<TRequestMovies>;

export { TMovies, TRequestMovies, TRequestMoviesUpdate, TMoviesUpdate };
