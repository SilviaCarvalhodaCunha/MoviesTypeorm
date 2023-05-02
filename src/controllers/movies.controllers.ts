import { Request, Response } from "express";

const registerMovieController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(201).json();
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
  return res.status(200).json();
};

const deleteMovieByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  return res.status(204).send();
};

export {
  registerMovieController,
  listAllMoviesController,
  updatesMovieByIdController,
  deleteMovieByIdController,
};
