import { Router } from "express";
import { getAllTickets, getTicketById, createTicket, updateTicket, deleteTicket } from "../../controllers";

const ticketRouter = Router();

ticketRouter
  .get("/", getAllTickets)
  .get("/:id", getTicketById)
  .post("/", createTicket)
  .put("/:id", updateTicket)
  .delete("/:id", deleteTicket)

export { ticketRouter };