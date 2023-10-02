import { Request, Response } from "express";

import { ServiceRequest } from "../models";

export const updateTicket = async (req: Request, res: Response) => {
  try {
    const updated = await ServiceRequest.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }
    );
     return res.status(200).json(updated?.apiRepr());
  } catch (err) {
    return res.status(500).json({ message: 'Could not update Ticket'})
  }
};