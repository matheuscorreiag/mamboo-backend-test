import { z } from "zod";

export const CreateTaskDto = z.object({
  title: z.string(),
  description: z.string(),
});
