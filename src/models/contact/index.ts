import { Schema } from 'mongoose';

export { CustomerNameSchema } from './customerName';

export const ContactSchema = new Schema(
  {
    email: { type: String, match: /.+\@.+\..+/, unique: false, required: true },
    phoneNumber: { type: String, required: true }
  },
  { _id: false }
);
