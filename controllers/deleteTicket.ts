import { Request, Response } from "express";
import { ServiceRequest } from "../models";

export const deleteTicket = async (req: Request, res: Response) => {
  try {
     await ServiceRequest.findByIdAndDelete(req.params.id);
     return res.status(200).json({ message: 'Ticket Deleted' });
  } catch (err) {
    return res.status(500).json({ message: 'Could not create Ticket', error: err })
  }
};