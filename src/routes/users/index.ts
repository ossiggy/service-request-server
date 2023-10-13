import { Router } from 'express';
import { jwtAuth, isAuthorizedForAction } from '../../middleware';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../../controllers';

const usersRouter = Router();

usersRouter
  .get('/', jwtAuth, isAuthorizedForAction(['admin', 'user:read']), getAllUsers)
  .post('/', jwtAuth, isAuthorizedForAction(['admin', 'user:write']), createUser)
  .get('/:userId', jwtAuth, isAuthorizedForAction(['admin', 'user:read']), getUserById)
  .put('/:userId', jwtAuth, isAuthorizedForAction(['admin', 'user:write']), updateUser)
  .delete('/:userId', jwtAuth, isAuthorizedForAction(['admin', 'user:write']), deleteUser);

export { usersRouter };
