import { Request, Response } from "express";
import { CreateTaskUseCase } from "../useCases/CreateTask.useCase";

export class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  async handle(request: Request, response: Response) {
    const { title, description } = request.body;
    const task = await this.createTaskUseCase.execute({
      title,
      description,
    });

    return response.status(201).send(task);
  }
}
