import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';

import userRouter from './users';
import swaggerSpecs from '../services/swagger';

const router = Router();

console.log(JSON.stringify(swaggerSpecs, null, 2));

// API Documentation Swagger
router.use('/docs', swaggerUi.serve);
router.get('/docs', swaggerUi.setup(swaggerSpecs, { customCss: '.swagger-ui .topbar { display: none }' }));

router.use('/users', userRouter);

export default router;

// Default components for OpenAPI Documentation
/**
 * @openapi
 * tags:
 *   name: Users
 * components:
 *   responses:
 *     Success:
 *       description: Successful action
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Success'
 *     BadRequest:
 *       description: Bad request schema
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 *     NotFound:
 *       description: The specified resource was not found
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 *     Unauthorized:
 *       description: Unauthorized access
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 *     Conflict:
 *       description: User already exists
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Error'
 *   schemas:
 *     Error:
 *       type: object
 *       properties:
 *         statusCode:
 *           type: integer
 *         message:
 *           type: string
 *         body:
 *           type: object
 *       required:
 *         - statusCode
 *         - message
 *       example:
 *         statusCode: 400
 *         message: 'Some Error ...'
 *         body: null
 *     Success:
 *       type: object
 *       properties:
 *         success:
 *           type: boolean
 *           description: Response Status
 *         result:
 *           $ref: '#/components/schemas/User'
 */
