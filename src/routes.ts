import { Request, Response, Router } from "express";
import {
  createTaskController,
  findAllTasksController,
  updateTaskController,
} from "./modules/tasks";

const routes = Router();

routes.post("/tasks", (request: Request, response: Response) =>
  createTaskController.handle(request, response)
);

routes.get("/tasks", (request: Request, response: Response) =>
  findAllTasksController.handle(request, response)
);

routes.put("/tasks/:id", (request: Request, response: Response) =>
  updateTaskController.handle(request, response)
);

export { routes };
