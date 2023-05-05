import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { TMovies, TRequestMovies } from "../interfaces/movies.interfaces";
import { Movie } from "../entities";
import { moviesSchema } from "../schemas/movies.schemas";

const registerMovieServices = async (
  movieData: TRequestMovies
): Promise<TMovies> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie: Movie = movieRepository.create(movieData);

  await movieRepository.save(movie);

  const returnMovie: TMovies = moviesSchema.parse(movie);

  return returnMovie;
};

export default registerMovieServices;
