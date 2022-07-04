import { z } from "zod";

export const UpdateTaskDto = z.object({
  id: z.string(),
  description: z.string().optional(),
  status: z.enum(["PENDING", "IN_PROGRESS", "REVIEW", "DONE"]).optional(),
});
