import express from "express";
import "express-async-errors";
import { errorsMiddleware } from "./middlewares/errors";
import { routes } from "./routes";

const app = express();
app.use(express.json());
app.use(routes);
app.use(errorsMiddleware);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
