import { Router } from "express";
import checkIsBodyValidMiddlewares from "../middlewares/checkIsBodyValid.middleware";
import { requestMoviesSchema, requestMoviesUpdateSchema } from "../schemas/movies.schemas";

const moviesRoutes = Router()

moviesRoutes.post('', checkIsBodyValidMiddlewares(requestMoviesSchema))

moviesRoutes.get('')

moviesRoutes.patch('/:id', checkIsBodyValidMiddlewares(requestMoviesUpdateSchema))

moviesRoutes.delete('/:id')

export default moviesRoutes