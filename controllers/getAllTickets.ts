import { Request, Response } from "express";
import { ServiceRequest } from "../models";

export const getAllTickets = async (req: Request, res: Response) => {
  try {
    const limit = Number(req.query.limit) || 50;
    const page = (req.query.page && Number(req.query.page) - 1) || 0;
     const foundTickets = await ServiceRequest.find({}).limit(limit).skip(page);
     return res.status(200).json(foundTickets.map(ticket => ticket.apiRepr()));
  } catch (err) {
    console.error(err);
    return res.status(404).json({ message: 'Could not find any tickets'})
  }
};