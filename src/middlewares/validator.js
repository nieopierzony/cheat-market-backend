import Boom from '@hapi/boom';

/**
 * Creates message for error
 * @param {Joi.ValidationError} error Error
 * @returns {Object}
 */
const createMessage = error => {
  const splitMessage = error.message.split('"');
  const key = splitMessage[1];
  const message = [`${splitMessage[1]}${splitMessage[2]}`];
  return { [key]: message };
};

export default dataToValidate => async (req, res, next) => {
  try {
    const { body, headers, params, query } = dataToValidate;
    let result,
      errors = {};

    const valuesToCheck = { body, headers, params, query };
    Object.entries(valuesToCheck).forEach(([name, value]) => {
      if (value) {
        console.log(1, value);
        console.log(2, 'req[name]', `req[${name}]`, req[name]);
        result = value.validate(req[name]);
        console.log(3, 'result', result);
        if (result?.error) errors = { ...errors, ...createMessage(result.error) };
        else req[name] = result?.value;
      }
    });

    if (Object.keys(errors).length !== 0) throw Boom.badRequest('Validation Error', errors);
    return next();
  } catch (err) {
    return next(err);
  }
};
