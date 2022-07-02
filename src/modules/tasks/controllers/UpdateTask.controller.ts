import { Request, Response } from "express";
import { UpdateTaskDto } from "../dtos/UpdateTask.dto";
import { UpdateTaskUseCase } from "../useCases/UpdateTask.useCase";

export class UpdateTaskController {
  constructor(private updateTaskUseCase: UpdateTaskUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { title, description, status } = UpdateTaskDto.parse({
      ...request.body,
      id,
    });

    const task = await this.updateTaskUseCase.execute({
      id,
      title,
      description,
      status,
    });

    return response.status(201).send(task);
  }
}
