// src/users/dto/user.dto.ts
import * as Joi from 'joi';

export class UserDto {
  firstname: string;
  lastname: string;
  email: string;
  username: string;
  password: string;
  userRole!: string;
}

export const UserSchema = Joi.object({
  firstname: Joi.string().required().error(new Error('Firstname not provided')),
  lastname: Joi.string().required().error(new Error('Lastname not provided')),
  email: Joi.string().email().required().error(new Error('Email not provided')),
  username: Joi.string().required().error(new Error('Username not provided')),
  password: Joi.string()
    .required()
    .min(8)
    .pattern(/^(?=.*[0-9!@#$%^&*()_+\-=\[\]{};:'",.<>\/?])/)
    .label('Password')
    .messages({
      'string.pattern.base':
        'Password must contain at least one special character or number',
      'string.min': 'Password must be at least 8 characters long',
      'any.required': 'Password is required',
    }),
  userRole: Joi.string().valid('user', 'admin').default('user').optional(),
});
