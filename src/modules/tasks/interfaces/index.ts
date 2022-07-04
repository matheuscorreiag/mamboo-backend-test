import { Tasks, TaskStatus } from "@prisma/client";
import { QueryTasksProps } from "../useCases/FindAllTasks.useCase";

export interface CreateTaskProps {
  title: string;
  description: string;
  status: TaskStatus;
}

export interface UpdateTaskProps extends Partial<CreateTaskProps> {
  id: string;
  status?: TaskStatus;
}

export interface DatabaseTasksRepository {
  create: (task: CreateTaskProps) => Promise<Tasks>;
  findAll: (query: QueryTasksProps) => Promise<Tasks[]>;
  update: (task: UpdateTaskProps) => Promise<Tasks>;
  delete: (id: string) => Promise<Tasks>;
}
