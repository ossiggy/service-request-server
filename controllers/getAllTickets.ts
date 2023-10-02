import { Request, Response } from "express";
import { ServiceRequest } from "../models";

export const getAllTickets = async (req: Request, res: Response) => {
  try {
     const foundTickets = await ServiceRequest.find({});
     return res.status(200).json(foundTickets.map(ticket => ticket.apiRepr()));
  } catch (err) {
    return res.status(404).json({ message: 'Could not find any tickets'})
  }
};