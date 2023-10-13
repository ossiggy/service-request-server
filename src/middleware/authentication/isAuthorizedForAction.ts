import jwt_decode from 'jwt-decode';
import { Request, Response, NextFunction } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import type { Permissions } from '../../models/users/types';

interface TokenData {
  user: {
    _id: string;
    username: string;
    password: string;
    email: string;
    permissions: Permissions[]
  };
}

type AuthorizedParams = {
  userId: string;
};

interface AuthorizationRequest<T extends ParamsDictionary> extends Request {
  params: T;
}

const compareUser = (req: AuthorizationRequest<AuthorizedParams>, permissions: Permissions[]) => {
  const userToken: string = req.headers.authorization ? req.headers.authorization.split(' ')[1] : '';
  const { user }: TokenData = jwt_decode(userToken);
  if (!user.permissions || !user.permissions.length) {
    return false;
  }

  return permissions.filter(role => user.permissions.includes(role)).length;
};

export const isAuthorizedForAction = (permissions:Permissions[]) => {
  return (req: AuthorizationRequest<AuthorizedParams>, res: Response, next: NextFunction) => {
    return compareUser(req, permissions)
      ? next()
      : res.status(401).json({
          code: 401,
          reason: 'Not authorized'
        });
  }
};
