import { PrismaTasksRepository } from "../prisma/prisma-tasks.repository";
import { CreateTaskController } from "./controllers/CreateTask.controller";
import { CreateTaskUseCase } from "./useCases/CreateTask.useCase";

const databaseRepository = new PrismaTasksRepository();

const createTaskUseCase = new CreateTaskUseCase(databaseRepository);
const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController, CreateTaskUseCase };
