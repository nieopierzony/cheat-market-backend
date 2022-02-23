import dotenv from 'dotenv';
dotenv.config();

export default class Constants extends null {
  static get regex() {
    return { objectId: /^[0-9a-fA-F]{24}$/ };
  }
}
