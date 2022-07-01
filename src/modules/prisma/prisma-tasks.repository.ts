import { Tasks } from "@prisma/client";
import prisma from "../../database";
import { CreateTaskProps, DatabaseTasksRepository } from "../tasks/interfaces";

export class PrismaTasksRepository implements DatabaseTasksRepository {
  async create({ title, description }: CreateTaskProps): Promise<Tasks> {
    const tasks = await prisma.tasks.create({
      data: {
        title,
        description,
      },
    });

    return tasks;
  }
}
