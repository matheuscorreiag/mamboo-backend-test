import { Request, Response } from "express";
import { FindAllTasksUseCase } from "../useCases/FindAllTasks.useCase";

export class FindAllTasksController {
  constructor(private findAllTasksUseCase: FindAllTasksUseCase) {}

  async handle(request: Request, response: Response) {
    const tasks = await this.findAllTasksUseCase.execute();

    return response.status(200).send(tasks);
  }
}
