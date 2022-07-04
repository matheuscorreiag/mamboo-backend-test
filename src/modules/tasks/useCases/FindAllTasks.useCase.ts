import { TaskStatus } from "@prisma/client";
import { DatabaseTasksRepository } from "../interfaces";

export interface QueryTasksProps {
  status?: TaskStatus | undefined;
}
export class FindAllTasksUseCase {
  constructor(private databaseTasksRepository: DatabaseTasksRepository) {}

  async execute(query: QueryTasksProps) {
    const tasks = await this.databaseTasksRepository.findAll(query);

    return tasks;
  }
}
