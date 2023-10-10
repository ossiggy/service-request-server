import { Router } from 'express';
import { jwtAuth, isAuthorizedForAction } from '../../middleware';
import { createUser, getAllUsers, getUserById, updateUser } from '../../controllers';

const usersRouter = Router();

usersRouter
  .get('/', jwtAuth, isAuthorizedForAction, getAllUsers)
  .post('/', jwtAuth, isAuthorizedForAction, createUser)
  .get('/:userId', jwtAuth, isAuthorizedForAction, getUserById)
  .put('/:userId', jwtAuth, isAuthorizedForAction, updateUser);

export { usersRouter };
