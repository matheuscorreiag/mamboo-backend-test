import { PrismaTasksRepository } from "../prisma/prisma-tasks.repository";
import { CreateTaskController } from "./controllers/CreateTask.controller";
import { FindAllTasksController } from "./controllers/FindAllTasks.controller";
import { UpdateTaskController } from "./controllers/UpdateTask.controller";
import { CreateTaskUseCase } from "./useCases/CreateTask.useCase";
import { FindAllTasksUseCase } from "./useCases/FindAllTasks.useCase";
import { UpdateTaskUseCase } from "./useCases/UpdateTask.useCase";

const databaseRepository = new PrismaTasksRepository();

const createTaskUseCase = new CreateTaskUseCase(databaseRepository);
const createTaskController = new CreateTaskController(createTaskUseCase);

const findAllTasksUseCase = new FindAllTasksUseCase(databaseRepository);
const findAllTasksController = new FindAllTasksController(findAllTasksUseCase);

const updateTaskUseCase = new UpdateTaskUseCase(databaseRepository);
const updateTaskController = new UpdateTaskController(updateTaskUseCase);

export {
  createTaskController,
  createTaskUseCase,
  findAllTasksUseCase,
  findAllTasksController,
  updateTaskUseCase,
  updateTaskController,
};
