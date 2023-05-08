import { Repository } from "typeorm";
import { TMovies, TMoviesUpdate } from "../interfaces/movies.interfaces";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { moviesSchema } from "../schemas/movies.schemas";

const updatesMovieByIdServices = async (
  id: number,
  movieData: TMoviesUpdate
): Promise<TMovies> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const foundMovie: Movie | null = await movieRepository.findOneBy({ id: id });

  const movie = movieRepository.create({
    ...foundMovie,
    ...movieData,
  });

  await movieRepository.save(movie);

  const updateMovie = moviesSchema.parse(movie);

  return updateMovie;
};

export default updatesMovieByIdServices;
