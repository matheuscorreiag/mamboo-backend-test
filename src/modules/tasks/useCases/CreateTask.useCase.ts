import { CreateTaskProps, DatabaseTasksRepository } from "../interfaces";

export class CreateTaskUseCase {
  constructor(private databaseRepository: DatabaseTasksRepository) {}

  async execute({ description, status }: CreateTaskProps) {
    const tasks = await this.databaseRepository.create({
      description,
      status,
    });

    return tasks;
  }
}
