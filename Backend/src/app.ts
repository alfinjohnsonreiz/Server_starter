import express from "express";
import userRouter from "./routes/user.routes";
import { errorHandler } from "./middleware/errorHandler";

const app = express();
app.use(express.json());

app.use("/user", userRouter);

app.use(errorHandler);
export default app;
