import morgan from 'morgan';
import Logger from '../utils/Logger';

const stream = {
  write: message => Logger.debug(message),
};

// Skip if production
const skip = () => {
  const env = process.env.NODE_ENV || 'development';
  return env !== 'development';
};

export default morgan('combined', { stream, skip });
