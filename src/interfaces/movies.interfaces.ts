import { z } from "zod";
import {
  moviesReadAllSchema,
  moviesSchema,
  paginationMovieSchema,
  requestMoviesSchema,
  requestMoviesUpdateSchema,
} from "../schemas/movies.schemas";
import { DeepPartial } from "typeorm";

type TMovies = z.infer<typeof moviesSchema>;

type TRequestMovies = z.infer<typeof requestMoviesSchema>;

type TRequestMoviesUpdate = z.infer<typeof requestMoviesUpdateSchema>;

type TMoviesUpdate = DeepPartial<TRequestMovies>;

type TmoviesReadAll = z.infer<typeof moviesReadAllSchema>;

type TPaginationMovie = z.infer<typeof paginationMovieSchema>;

export {
  TMovies,
  TRequestMovies,
  TRequestMoviesUpdate,
  TMoviesUpdate,
  TmoviesReadAll,
  TPaginationMovie
};
