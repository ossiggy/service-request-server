import { Request, Response } from "express";
import { ServiceRequest } from "../models";

export const getTicketById = async (req: Request, res: Response) => {
  try {
     const foundTicket = await ServiceRequest.findById(req.params.id).exec();
     if (foundTicket) {
      return res.status(200).json(foundTicket.apiRepr());
     }
     throw new Error("Could not find ticket");
  } catch (err) {
    return res.status(404).json({ message: 'Could not find ticket', id: req.params.id})
  }
};