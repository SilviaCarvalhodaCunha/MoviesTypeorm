import { NextFunction, Request, Response } from "express";

const checkNameExistsMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<Response | void> => {
  return next();
};

export default checkNameExistsMiddleware;
