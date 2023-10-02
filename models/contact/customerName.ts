import { Schema } from "mongoose";

export const CustomerNameSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: false },
});