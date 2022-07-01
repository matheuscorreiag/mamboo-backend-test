import { Tasks, TaskStatus } from "@prisma/client";

export interface CreateTaskProps {
  title: string;
  description: string;
}

export interface UpdateTaskProps extends Partial<CreateTaskProps> {
  id: string;
  status?: TaskStatus;
}

export interface DatabaseTasksRepository {
  create: (task: CreateTaskProps) => Promise<Tasks>;
  findAll: () => Promise<Tasks[]>;
  update: (task: UpdateTaskProps) => Promise<Tasks>;
  delete: (id: string) => Promise<Tasks>;
}
