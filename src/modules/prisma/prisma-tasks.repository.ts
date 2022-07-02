import { Tasks } from "@prisma/client";
import prisma from "../../database";
import {
  CreateTaskProps,
  DatabaseTasksRepository,
  UpdateTaskProps,
} from "../tasks/interfaces";

export class PrismaTasksRepository implements DatabaseTasksRepository {
  async create({ title, description }: CreateTaskProps): Promise<Tasks> {
    const task = await prisma.tasks.create({
      data: {
        title,
        description,
      },
    });

    return task;
  }

  async findAll(): Promise<Tasks[]> {
    const tasks = await prisma.tasks.findMany();

    return tasks;
  }

  async update({
    id,
    title,
    description,
    status,
  }: UpdateTaskProps): Promise<Tasks> {
    const task = await prisma.tasks.update({
      where: {
        id,
      },
      data: {
        title: title || undefined,
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
