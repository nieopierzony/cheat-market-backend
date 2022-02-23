import http from 'http';

import Config from 'utils/Config';
import Logger from 'utils/Logger';
import app from './app';
import mongooseLoader from './services/mongoose';
import redisLoader from './services/redis';

const { SERVER_HOST, NODE_ENV, PORT } = Config.common;

const httpServer = http.createServer(app);

httpServer.listen(process.env.PORT || 3000, () => {
  const url = `http://${SERVER_HOST || 'localhost'}:${PORT || 3000}`;
  Logger.info(`[Express] Server was successfully started on ${url} in ${NODE_ENV || 'development'} mode`);
});

mongooseLoader();
redisLoader();
