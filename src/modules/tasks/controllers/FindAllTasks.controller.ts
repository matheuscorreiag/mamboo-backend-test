import { Request, Response } from "express";
import { FindAllTasksUseCase } from "../useCases/FindAllTasks.useCase";

export class FindAllTasksController {
  constructor(private findAllTasksUseCase: FindAllTasksUseCase) {}

  async handle(request: Request, response: Response) {
    const query = request.query;
    const tasks = await this.findAllTasksUseCase.execute(query);

    return response.status(200).send(tasks);
  }
}
