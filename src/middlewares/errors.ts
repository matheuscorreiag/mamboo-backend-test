import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";

export function errorsMiddleware(
  err: any,
  request: Request,
  response: Response,
  nextFunction: NextFunction
) {
  if (err instanceof ZodError) {
    return response.status(400).send({
      status: 400,
      error: err.flatten(),
    });
  }
  if (err instanceof Error) {
    return response.status(400).send({
      status: 400,
      error: err.message,
    });
  }

  return response.status(500).send({
    status: 500,
    error: "Internal server error",
  });
}
