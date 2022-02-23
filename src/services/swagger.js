import swaggerJSDoc from 'swagger-jsdoc';
import config from '../utils/Config';

const myPackage = require('../../package.json');
const { name, version, description, license, author } = myPackage;

const { SERVER_HOST, PORT } = config.common;
const url = `http://${SERVER_HOST || 'localhost'}:${PORT}`;

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: name,
    version,
    description,
    license: { name: license, url: 'https://opensource.org/licenses/MIT' },
    contact: { name: author, email: 'philipp.zelinski@googlemail.com' },
  },
  servers: [{ url }],
  schemes: ['http', 'https'],
  consumes: ['application/json', 'form-data'],
  produces: ['application/json'],
  host: url,
  securityDefinitions: {
    JWT: {
      type: 'apiKey',
      in: 'header',
      name: 'Authorization',
      description: "JWT Token for user's authorization",
    },
  },
};

const options = {
  swaggerDefinition: swaggerDefinition,
  apis: ['./src/routes/*.js', './src/models/*.js'],
  onValidateError: (errors, req, res) => {
    res.status(400).send(errors);
  },
};

export default swaggerJSDoc(options);
