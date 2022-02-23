import dotenv from 'dotenv';
dotenv.config();

export default class Config extends null {
  static get common() {
    const { NODE_ENV, SERVER_HOST, PORT } = process.env;
    return { isDebugModeEnabled: NODE_ENV === 'development', SERVER_HOST, NODE_ENV, PORT };
  }

  static get jwt() {
    const { JWT_KEY } = process.env;
    return { key: JWT_KEY };
  }

  static get databases() {
    const { DB_MONGO_URL, DB_REDIS_URL } = process.env;
    return { mongoURL: DB_MONGO_URL, redisURL: DB_REDIS_URL };
  }

  static get telegram() {
    const { TELEGRAM_BOT_USERNAME, TELEGRAM_TOKEN } = process.env;
    return { botUsername: TELEGRAM_BOT_USERNAME, token: TELEGRAM_TOKEN };
  }
}
