import express from 'express';
import jwt from 'express-jwt';
import helmet from 'helmet';
import config from 'utils/Config';

import decorator from './middlewares/decorator';
import router from './routes';
import redis from './services/redis';

const app = express();

app.set('x-powerred-by', false);
app.set('redis', redis);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
// app.use(jwt({ secret: config.jwt.key, algorithms: ['HS256'] }));
app.use(express.static('public'));

app.use(router);
app.use(decorator);

export default app;
