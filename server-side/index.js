import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import appRouter from "./routes/appRouter.js";
import jobRouter from "./routes/jobRouter.js";

const app = express();

//middleware
app.use(cors());

// Parse incoming JSON data from HTTP request
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/user", userRouter);
app.use("/api/v1/app", appRouter);
app.use("/api/v1/job", jobRouter);

export default app;
