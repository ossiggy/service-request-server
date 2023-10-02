import { Request, Response } from "express";
import { ServiceRequest } from "../models";
import { validatePayload } from "../helpers";

export const createTicket = async (req: Request, res: Response) => {
  try {
     if(!validatePayload(req.body)) {
      return res.status(422).json({ message: 'Invalid or missing fields in request' });
     }

     const createdTicket = await ServiceRequest.create(req.body);
     return res.status(200).json(createdTicket.apiRepr());
  } catch (err) {
    return res.status(500).json({ message: 'Could not create Ticket', error: err })
  }
};