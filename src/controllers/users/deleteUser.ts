import { Request, Response } from 'express';
import { User } from '../../models';

export const deleteUser = async (req: Request, res: Response) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    return res.status(200).json({ message: 'User Deleted' });
  } catch (err) {
    return res.status(500).json({ message: 'Could not delete User', error: err });
  }
};
