import { Document, Types, Model } from 'mongoose';

export type Permissions = 'admin' | 'user:read' | 'user:write' | 'ticket:read' | 'ticket:write';

export interface UserSchemaBaseProps extends Document {
  _id?: Types.ObjectId;
  id?: string;
  username: string;
  password: string;
  email: string;
  permissions: Permissions[];
}

export interface UserSchemaProps extends UserSchemaBaseProps {
  validatePassword(password: string): boolean;
  apiRepr(): UserSchemaBaseProps;
}

export interface UserModel extends Model<UserSchemaProps> {
  hashPassword(password: string): string;
}

export type UserToUpdate = {
  password?: string;
  permissions?: Permissions[];
};
