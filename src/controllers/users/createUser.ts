import { Request, Response } from 'express';
import { User } from '../../models';
import { runUserValidation } from '../../helpers';

export const createUser = async (req: Request, res: Response) => {
  try {
    const invalidEntry = await runUserValidation(req.body);

    if (invalidEntry) {
      return res.status(422).json({
        code: 422,
        reason: 'ValidationError',
        message: invalidEntry.message,
        location: invalidEntry.location
      });
    }

    const { username, password, email, permissions } = req.body;
    const hashedPassword = await User.hashPassword(password);
    const createdUser = await User.create({
      username,
      password: hashedPassword,
      email,
      permissions
    });
    const { id } = createdUser.apiRepr();

    return res.status(200).json({
      id,
      username,
      email,
      permissions
    });
  } catch (err) {
    console.error('USER CREATION ERROR', err);
    res.status(500).json({ code: 500, message: 'Internal server error' });
  }
};
