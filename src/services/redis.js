import { createClient } from 'redis';
import Config from 'utils/Config';
import Logger from 'utils/Logger';

export default () => {
  const { redisURL } = Config.databases;
  const client = createClient(redisURL);
  client.on('ready', () => Logger.info('[DB] [Redis] Successfully connected'));
  client.on('error', err => Logger.error(`[DB] [Redis @ Connect] ${err}`));
  return client;
};
