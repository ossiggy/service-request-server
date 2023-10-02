import { Schema } from "mongoose";

export const AddressSchema = new Schema({
  houseNumber: { type: String, required: true },
  streetName: { type: String, required: true },
  city: { type: String, required: true },
  stateOrProvince: { type: String, required: true },
  country: { type: String, required: true },
  postalCode: { type: String, required: true }
});