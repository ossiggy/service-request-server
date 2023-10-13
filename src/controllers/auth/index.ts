import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import { JWT_EXPIRY, JWT_SECRET } from '../../config';
import type { UserSchemaBaseProps } from '../../models/users/types';

const createAuthToken = (user: UserSchemaBaseProps): string => {
  return jwt.sign({ user }, JWT_SECRET, {
    subject: user.username,
    expiresIn: JWT_EXPIRY,
    algorithm: 'HS256'
  });
};

export const login = (req: Request, res: Response) => {
  const authToken = req.user && createAuthToken(req.user);
  if (authToken) {
    res.json({ authToken });
  } else {
    res.status(401).json({ message: 'Incorrect Login Credentials' });
  }
};

export const refresh = (req: Request, res: Response) => {
  const authToken = req.body && createAuthToken(req.body);
  if (authToken) {
    res.json({ authToken });
  } else {
    res.status(401).json({ message: 'Unauthorized' });
  }
};
