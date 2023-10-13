import mongoose, { ConnectOptions } from 'mongoose';

export const mongoOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4
};

export const dbConnect = (url: string) => {
  return mongoose.connect(url, mongoOptions as ConnectOptions).catch(err => {
    console.error('Mongoose failed to connect');
    console.error(err);
  });
};

export const dbDisconnect = () => {
  return mongoose.disconnect();
};

export const dbGet = () => {
  return mongoose;
};
