import { Request, Response } from "express";
import { CreateTaskDto } from "../dtos/CreateTask.dto";
import { CreateTaskUseCase } from "../useCases/CreateTask.useCase";

export class CreateTaskController {
  constructor(private createTaskUseCase: CreateTaskUseCase) {}

  async handle(request: Request, response: Response) {
    const { description, status } = CreateTaskDto.parse(request.body);

    const task = await this.createTaskUseCase.execute({
      description,
      status,
    });

    return response.status(201).send(task);
  }
}
