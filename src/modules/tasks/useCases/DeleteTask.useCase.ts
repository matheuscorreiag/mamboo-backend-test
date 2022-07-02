import { DatabaseTasksRepository } from "../interfaces";

export class DeleteTaskUseCase {
  constructor(private databaseRepository: DatabaseTasksRepository) {}
  async execute(id: string) {
    const task = await this.databaseRepository.delete(id);

    return task;
  }
}
