import { Request, Response } from "express";
import {
  TRequestMovies,
  TMovies,
  TMoviesUpdate,
} from "../interfaces/movies.interfaces";
import registerMovieServices from "../services/registerMovie.services";
import deleteMovieByIdServices from "../services/deleteMovieById.services";
import updatesMovieByIdServices from "../services/updatesMovieById.services";

const registerMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const movieData: TRequestMovies = req.body;
  const newMovie: TMovies = await registerMovieServices(movieData);

  return res.status(201).json(newMovie);
};

const listAllMoviesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(200).json();
};

const updatesMovieByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  const movieData: TMoviesUpdate = req.body;

  const updateData: TMovies = await updatesMovieByIdServices(id, movieData);

  return res.status(200).json(updateData);
};

const deleteMovieByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = parseInt(req.params.id);
  await deleteMovieByIdServices(id);

  return res.status(204).send();
};

export {
  registerMovieController,
  listAllMoviesController,
  updatesMovieByIdController,
  deleteMovieByIdController,
};
