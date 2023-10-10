import { Document, Types, Model } from 'mongoose';

export interface UserDocument extends Document {
  _id?: Types.ObjectId;
  id?: string;
  username: string;
  password: string;
  email: string;
}

export interface UserSchemaProps extends UserDocument {
  validatePassword(password: string): boolean;
  apiRepr(): UserDocument;
}

export interface UserModel extends Model<UserSchemaProps> {
  hashPassword(password: string): string;
}

export type UserToUpdate = {
  password?: string;
};
