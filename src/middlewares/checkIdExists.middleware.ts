import { NextFunction, Request, Response } from "express";

const checkIdExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  return next();
};

export default checkIdExistsMiddleware;
