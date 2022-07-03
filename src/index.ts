import cors from "cors";
import express from "express";
import "express-async-errors";
import { errorsMiddleware } from "./middlewares/errors";
import { routes } from "./routes";

const app = express();
app.use(express.json());

app.use(cors());
app.use(routes);
app.use(errorsMiddleware);

app.listen(3333, () => {
  console.log("Server is running on port 3000");
});
