import { Tasks, TaskStatus } from "@prisma/client";
import prisma from "../../database";
import {
  CreateTaskProps,
  DatabaseTasksRepository,
  UpdateTaskProps,
} from "../tasks/interfaces";
import { QueryTasksProps } from "../tasks/useCases/FindAllTasks.useCase";

export class PrismaTasksRepository implements DatabaseTasksRepository {
  async create({ description, status }: CreateTaskProps): Promise<Tasks> {
    const task = await prisma.tasks.create({
      data: {
        description,
        status,
      },
    });

    return task;
  }

  async findAll({ status }: QueryTasksProps): Promise<Tasks[]> {
    const tasks = await prisma.tasks.findMany({
      where: {
        status: status as TaskStatus,
      },
    });

    return tasks;
  }

  async update({ id, description, status }: UpdateTaskProps): Promise<Tasks> {
    const task = await prisma.tasks.update({
      where: {
        id,
      },
      data: {
        description: description || undefined,
        status: status || undefined,
      },
    });

    return task;
  }

  async delete(id: string): Promise<Tasks> {
    const task = await prisma.tasks.delete({
      where: {
        id,
      },
    });

    return task;
  }
}
