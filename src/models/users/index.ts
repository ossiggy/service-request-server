import { compare, hash } from 'bcrypt';
import { Schema, model } from 'mongoose';
import { SALT_ROUNDS } from '../../config';
import type { UserSchemaProps, UserModel } from './types';

export const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  permissions: [{ type: String, required: true }]
});

// arrow functions not possible here, since they close over lexically enclosing context (i.e: this remains this)

UserSchema.method('apiRepr', function () {
  return {
    id: this._id.toString(),
    username: this.username || '',
    email: this.email || '',
    permissions: this.permissions
  };
});

UserSchema.method('validatePassword', function (password: string): Promise<boolean> {
  return compare(password, this.password);
});

UserSchema.static('hashPassword', (password: string): Promise<string> => hash(password, SALT_ROUNDS));

export const User: UserModel = model<UserSchemaProps, UserModel>('User', UserSchema);

export default User;
