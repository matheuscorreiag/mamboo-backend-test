import { Request, Response, Router } from "express";
import { createTaskController } from "./modules/tasks";

const routes = Router();

routes.post("/tasks", (request: Request, response: Response) =>
  createTaskController.handle(request, response)
);

export { routes };
