import { Strategy as LocalStrategy } from 'passport-local';
import { Strategy as JwtStrategy, ExtractJwt } from 'passport-jwt';

import { User } from '../../models';
import { JWT_SECRET } from '../../config';

export const localStrategy = new LocalStrategy(async (username, password, done) => {
  try {
  const user = await User.findOne({ username: username });

    if(!user) return done(null, false);
    if(!user.validatePassword(password)) return done(null,false);
    return done(null, user);
  } catch (err: any) {
    return done(err);
  }
});

export const jwtStrategy = new JwtStrategy(
  {
    secretOrKey: JWT_SECRET,
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('Bearer'),
    algorithms: ['HS256']
  },
  (payload, done) => {
    console.log('PAYLOAD', payload);
    done(null, payload);
  }
);
