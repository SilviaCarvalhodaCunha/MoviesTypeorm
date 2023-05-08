import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { TPaginationMovie } from "../interfaces/movies.interfaces";

const listAllMoviesServices = async (
  page: number,
  perPage: number,
  order: "asc" | "desc",
  sort: "id" | "price" | "duration"
): Promise<TPaginationMovie> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const baseUrl = "http://localhost:3000/movies";

  perPage = perPage > 0 && perPage <= 5 ? perPage : 5;

  page = page > 0 ? page : 1;

  let orderFields = {};
  if (sort === "price" || sort === "duration") {
    orderFields = {
      [sort]: order,
    };
  } else {
    orderFields = {
      id: "id",
    };
  }

  const [data, count] = await movieRepository.findAndCount({
    skip: (page - 1) * perPage,
    take: perPage,
    order: orderFields,
  });

  return {
    prevPage:
      page > 1 ? `${baseUrl}?page=${page - 1}&perPage=${perPage}` : null,
    nextPage:
      count > perPage * page
        ? `${baseUrl}?page=${page + 1}&perPage=${perPage}`
        : null,
    count: count,
    data: data,
  };
};

export default listAllMoviesServices;
