import { DatabaseTasksRepository } from "../interfaces";

export class FindAllTasksUseCase {
  constructor(private databaseTasksRepository: DatabaseTasksRepository) {}

  async execute() {
    const tasks = await this.databaseTasksRepository.findAll();

    return tasks;
  }
}
