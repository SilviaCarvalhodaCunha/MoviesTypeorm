import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { AppError } from "../error";

const checkNameExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const { name } = req.body;

  if(name){
    const foundMovie = await movieRepository.exist({ where: { name: name } });
  
    if (foundMovie) {
      throw new AppError("Movie already exists.", 409);
    }
  }


  return next();
};

export default checkNameExistsMiddleware;
