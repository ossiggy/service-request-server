import { Request, Response } from "express";
import { ServiceRequest } from "../models";
import { validateUpdatePayload } from "../helpers"

export const updateTicket = async (req: Request, res: Response) => {
  try {
    const fieldsToUpdate = validateUpdatePayload(req.body);
    if (fieldsToUpdate) {
      const ticketToUpdate = await ServiceRequest.findById(req.params.id);
      const ticketFields = ticketToUpdate?.apiRepr();
      const newTicket = Object.assign({}, ticketFields, req.body);
      const updated = await ServiceRequest.findOneAndUpdate(
        { _id: req.params.id },
        { $set: newTicket },
        { new: true }
      );
      return res.status(200).json(updated?.apiRepr());
    }
    return res.status(422).json({ message: "Invalid fields present on update" });
  } catch (err) {
    return res.status(500).json({ message: 'Could not update Ticket'})
  }
};