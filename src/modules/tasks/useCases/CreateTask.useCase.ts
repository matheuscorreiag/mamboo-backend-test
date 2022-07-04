import { CreateTaskProps, DatabaseTasksRepository } from "../interfaces";

export class CreateTaskUseCase {
  constructor(private databaseRepository: DatabaseTasksRepository) {}

  async execute({ description, title, status }: CreateTaskProps) {
    const tasks = await this.databaseRepository.create({
      title,
      description,
      status,
    });

    return tasks;
  }
}
