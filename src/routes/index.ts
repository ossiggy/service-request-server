import { Router } from "express";
import { authRouter } from "./auth";
import { usersRouter } from "./users";
import { ticketRouter } from "./service-request";

const apiRouter = Router();

apiRouter
  .use("/tickets", ticketRouter)
  .use("/auth", authRouter)
  .use("/users", usersRouter);

export { apiRouter };