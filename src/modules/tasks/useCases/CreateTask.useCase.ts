import { CreateTaskProps, DatabaseTasksRepository } from "../interfaces";

export class CreateTaskUseCase {
  constructor(private databaseRepository: DatabaseTasksRepository) {}

  async execute({ description, title }: CreateTaskProps) {
    const tasks = await this.databaseRepository.create({ title, description });

    return tasks;
  }
}
