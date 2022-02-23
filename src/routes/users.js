import { Router } from 'express';

import Controller from '../controllers/Users/index';
import Validator from '../validators/users';

const router = Router();

// router.route('/login').post(Validator.login, Controller.login);

/**
 * @openapi
 * paths:
 *  /users/register:
 *      post:
 *          tags: [Users]
 *          summary: 'Creates a new user'
 *          operationId: 'registerUser'
 *          consumes: ["application/json"]
 *          produces: ["application/json"]
 *          parameters:
 *              - in: "body"
 *                name: "body"
 *                description: "Base user object to be created"
 *                required: true
 *                schema:
 *                  captchaToken:
 *                      type: string
 *                      description: Google reCaptcha v3 token
 *                  $ref: '#/components/schemas/BaseUserWithPassword'
 *          responses:
 *              "200":
 *                  $ref: '#/components/responses/Success'
 *              "400":
 *                  $ref: '#/components/responses/BadRequest'
 *              "409":
 *                  $ref: '#/components/responses/Conflict'
 */

router.route('/register').post(Validator.register, Controller.register);

export default router;
