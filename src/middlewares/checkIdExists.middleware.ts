import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const checkIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const id: number = parseInt(req.params.id);

  const foundMovie = await movieRepository.findOneBy({id});

  if (!foundMovie) {
    throw new AppError("Movie not found", 404);
  }

  return next();
};

export default checkIdExistsMiddleware;
