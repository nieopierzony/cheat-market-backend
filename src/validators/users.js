import Joi from 'joi';
import Constants from 'utils/Constants';
import validator from '../middlewares/validator';

const objectId = Joi.string().regex(Constants.regex.objectId);

export default {
  login: validator({
    body: Joi.object({
      email: Joi.string().required().description('User Email'),
      password: Joi.string().required().description('User password'),
    }),
  }),

  register: validator({
    body: Joi.object({
      email: Joi.string().required().description('User Email'),
      username: Joi.string().required().description('Username'),
      password: Joi.string().required().description('User password'),
    }),
  }),
};
