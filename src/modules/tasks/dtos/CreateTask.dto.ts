import { z } from "zod";

export const CreateTaskDto = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["PENDING", "IN_PROGRESS", "REVIEW", "DONE"]),
});
