import { Request, Response } from 'express';
import { User } from '../../models';

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const limit = Number(req.query.limit) || 50;
    const page = (req.query.page && Number(req.query.page) - 1) || 0;
    const users = await User.find({}).limit(limit).skip(page);
    if (!users || !users.length) {
      return res.status(404).json({
        code: 404,
        reason: 'Not found',
        message: 'No users active',
        location: req.params.userId
      });
    }

    return res.status(200).json(users.map(user => user.apiRepr()));
  } catch (err) {
    console.error('ERROR GETTING USER', err);
  }
};