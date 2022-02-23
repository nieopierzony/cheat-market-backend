import { connect } from 'mongoose';
import Config from 'utils/Config';
import Logger from 'utils/Logger';

export default () => {
  const { mongoURL } = Config.databases;
  const options = { useNewUrlParser: true, useUnifiedTopology: true };
  connect(mongoURL, options, err => {
    if (err) throw err;
    Logger.info('[DB] [Mongo] Successfully connected');
  });
};
