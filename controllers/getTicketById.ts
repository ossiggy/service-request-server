import { Request, Response } from "express";
import { ServiceRequest } from "../models";

export const getTicketById = async (req: Request, res: Response) => {
  try {
     const foundTicket = await ServiceRequest.findById(req.params.id).exec();
     return res.status(200).json(foundTicket?.apiRepr());
  } catch (err) {
    return res.status(404).json({ message: 'Could not find ticket', id: req.params.id})
  }
};