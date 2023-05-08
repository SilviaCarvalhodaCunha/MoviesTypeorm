import { Router } from "express";
import checkIsBodyValidMiddlewares from "../middlewares/checkIsBodyValid.middleware";
import {
  requestMoviesSchema,
  requestMoviesUpdateSchema,
} from "../schemas/movies.schemas";
import {
  deleteMovieByIdController,
  listAllMoviesController,
  registerMovieController,
  updatesMovieByIdController,
} from "../controllers/movies.controllers";
import checkNameExistsMiddleware from "../middlewares/checkNameExists.middleware";
import checkIdExistsMiddleware from "../middlewares/checkIdExists.middleware";

const moviesRoutes = Router();

moviesRoutes.post(
  "",
  checkIsBodyValidMiddlewares(requestMoviesSchema),
  checkNameExistsMiddleware,
  registerMovieController
);

moviesRoutes.get("", listAllMoviesController);

moviesRoutes.patch(
  "/:id",
  checkIsBodyValidMiddlewares(requestMoviesUpdateSchema),
  checkIdExistsMiddleware,
  checkNameExistsMiddleware,
  updatesMovieByIdController
);

moviesRoutes.delete("/:id", checkIdExistsMiddleware, deleteMovieByIdController);

export default moviesRoutes;
