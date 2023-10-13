import { Router } from 'express';
import guard from 'express-jwt-permissions';
import { jwtAuth } from '../../middleware';
import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../../controllers';

const usersRouter = Router();
const permissionsGuard = guard();

usersRouter
  .get('/', jwtAuth, permissionsGuard.check([['admin'], ['user:read']]), getAllUsers)
  .post('/', createUser)
  .get('/:userId', jwtAuth, permissionsGuard.check([['admin'], ['user:read']]), getUserById)
  .put('/:userId', jwtAuth, permissionsGuard.check([['admin'], ['users:write']]), updateUser)
  .delete('/:userId', jwtAuth, permissionsGuard.check(['admin']), deleteUser);

export { usersRouter };
