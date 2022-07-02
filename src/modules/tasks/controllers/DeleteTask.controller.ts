import { Request, Response } from "express";
import { DeleteTaskUseCase } from "../useCases/DeleteTask.useCase";

export class DeleteTaskController {
  constructor(private deleteTaskUseCase: DeleteTaskUseCase) {}

  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const task = await this.deleteTaskUseCase.execute(id);

    return response.status(200).send(task);
  }
}
