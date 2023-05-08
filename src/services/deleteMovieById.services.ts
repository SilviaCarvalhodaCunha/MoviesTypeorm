import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";

const deleteMovieByIdServices = async (id: number): Promise<void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const foundMovie = await movieRepository.findOneBy({id: id});

  await movieRepository.remove(foundMovie!);
};

export default deleteMovieByIdServices;
