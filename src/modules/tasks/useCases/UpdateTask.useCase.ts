import { DatabaseTasksRepository, UpdateTaskProps } from "../interfaces";

export class UpdateTaskUseCase {
  constructor(private databaseRepository: DatabaseTasksRepository) {}

  async execute({ id, title, status, description }: UpdateTaskProps) {
    const tasks = await this.databaseRepository.update({
      id,
      description,
      status,
      title,
    });

    return tasks;
  }
}
