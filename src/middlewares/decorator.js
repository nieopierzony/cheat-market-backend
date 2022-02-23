import { STATUS_CODES } from 'http';
import config from 'utils/Config';
import Logger from 'utils/Logger';

export default (err, req, res, next) => {
  // Mongoose-unique-validator error
  if (err._message?.includes('validation failed')) {
    err.statusCode = 400;
    err.message = err._message;
    err.data = JSON.parse(JSON.stringify(err.errors));
    Logger.error(`[Mongoose-Unique-Validator] ${err}`);
  }

  if (err.isBoom) {
    err.statusCode = err.output?.statusCode;
    err.message = err.output?.payload?.message;
    Logger.error(`[Boom] ${err}`);
  }

  if (err.joi) {
    err.statusCode = 400;
    err.message = err.joi.details;
  }

  // Generate response object
  const { headers, params, query, body, route } = req;
  const response = res.result
    ? {
        status: '',
        statusCode: res.statusCode,
        success: typeof res.result !== 'string',
        result: res.result,
        request: { headers, params, query, body, route },
      }
    : {
        statusCode: err.statusCode || err.status || err.code || 500,
        message: err.message || STATUS_CODES[500],
        errors: err.data || null,
      };

  if (typeof response.statusCode !== 'number') {
    response.status = response.statusCode;
    response.statusCode = 500;
    Logger.error(`[Decorator] Not number status code: ${err}`);
  } else {
    delete response.status;
  }

  if (response.statusCode >= 500) {
    Logger.error(`[Server ERROR 5xx] ${err}`);
  }

  // Remove request info if not in Development Mode
  if (!config.common.isDevMode) delete response.request;

  res.status(response.statusCode).json(response);
  next();
};
