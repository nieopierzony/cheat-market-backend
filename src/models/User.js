import { Schema, model } from 'mongoose';

const schema = new Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    password: { type: String, required: true },
  },
  { versionKey: false, timestamps: true },
);

export default model('users', schema);

/**
 * @openapi
 * components:
 *  schemas:
 *    BaseUser:
 *      type: object
 *      required:
 *        - username
 *        - email
 *        - password
 *      properties:
 *        username:
 *          type: string
 *          description: Unique username that see other people in profile
 *        email:
 *          type: string
 *          format: email
 *          description: Unique email of the user used only in login and other private actions
 *      example:
 *        username: 'nieopierzony'
 *        email: 'nieopierzony@googlemail.com'
 *
 *    BaseUserWithPassword:
 *        $ref: '#/components/schemas/BaseUser'
 *        password:
 *          type: string
 *          format: password
 *          description: bcrypted password of the user
 *        example:
 *          username: 'nieopierzony'
 *          email: 'nieopierzony@googlemail.com'
 *          password: '$2a$12$I3ZF0Ok4QKbANyoeVN5i0.2WhQgx9b7u8WbLukvF5UvyEaqGelpiq'
 */
