import { Request, Response } from 'express';
import { User } from '../../models';

export const getUserById = async (req: Request, res: Response) => {
  try {
    const existingUser = await User.findById(req.params.userId);
    if (!existingUser) {
      return res.status(404).json({
        code: 404,
        reason: 'Not found',
        message: 'User by this ID does not exist',
        location: req.params.userId
      });
    }

    const { id, username, email } = existingUser.apiRepr();
    res.status(201).send({
      id,
      username,
      email
    });
  } catch (err) {
    console.error('ERROR GETTING USER', err);
  }
};