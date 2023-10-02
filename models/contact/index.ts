import { Schema } from "mongoose";
import { AddressSchema } from "./address";

export { CustomerNameSchema } from "./customerName";

export const ContactSchema = new Schema({
	email: { type: String, match: /.+\@.+\..+/, unique: true,required: true },
  address: { type: AddressSchema, required: false },
  phoneNumber: { type: String, required: false }
});