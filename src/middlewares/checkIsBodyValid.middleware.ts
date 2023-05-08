import { NextFunction, Request, Response } from "express";
import { ZodError, ZodTypeAny } from "zod";
import { AppError } from "../error";

const checkIsBodyValidMiddleware =
  (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction) => {
    const validatedBody = schema.parse(req.body);

    req.body = validatedBody;

    return next();  
    
  };


export default checkIsBodyValidMiddleware;
