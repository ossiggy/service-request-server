import { Request, Response } from 'express';
import { User, UserToUpdate } from '../../models';

export const updateUser = async (req: Request, res: Response) => {
  if (!(req.params.userId === req.body.id)) {
    const message = `Request patch id (${req.params.userId} and request body id (${req.body.id}) must match)`;
    console.error(message);
    res.status(400).json({ message: message });
  }

  try {
    const hashedPassword = await User.hashPassword(req.body.password);
    
    const toUpdate: UserToUpdate = {
      password: hashedPassword
    };

    const foundUser = await User.findOneAndUpdate({ _id: req.body.id }, { $set: toUpdate }, { new: true }).exec();

    if (foundUser) {
      res.status(200).json({
        id: req.body.id
      });
    }
  } catch (err) {
    console.error('USER UPDATE ERROR', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};