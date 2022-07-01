import { z } from "zod";

export const UpdateTaskDto = z.object({
  id: z.string(),
  title: z.string().optional(),
  description: z.string().optional(),
  status: z.enum(["PENDING", "IN_PROGRESS", "REVIEW", "DONE"]).optional(),
});
