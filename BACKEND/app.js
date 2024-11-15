import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { dbConnection } from "./database/dbConnection.js";
import { errorMiddleware } from "./error/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import morgan from "morgan";
const app = express();
dotenv.config({ path: "./config/config.env" });
app.use(
    cors()
  );
  app.use(morgan('dev'))
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  dbConnection();
  app.use(errorMiddleware);
  app.use("/api/v1/reservation", reservationRouter);
export default app;