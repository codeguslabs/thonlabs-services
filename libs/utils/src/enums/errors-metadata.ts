import {
  BadRequestException,
  ConflictException,
  ForbiddenException,
  InternalServerErrorException,
  NotAcceptableException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

export enum StatusCodes {
  OK = 200,
  Created = 201,
  MovedPermanently = 301,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  NotAcceptable = 406,
  Conflict = 409,
  Internal = 500,
}

export enum ErrorCodes {
  InvalidEmail = 'invalid-email',
  TokenNotFound = 'token-not-found',
  UserExists = 'user-exists',
  EmailInUse = 'email-in-use',
  ResourceNotFound = 'resource-not-found',
  Unauthorized = 'unauthorized',
}

export enum ErrorMessages {
  EmailInUse = 'This email is already in use',
  EnvironmentNotFound = 'Environment not found',
  ProjectNotFound = 'Project not found',
  UserNotFound = 'User not found',
  InvalidEmail = 'Invalid Email',
  RequiredField = 'This field is required',
  Unauthorized = 'Unauthorized access',
  Forbidden = 'Forbidden access',
  InvalidCredentials = 'Invalid credentials',
  InvalidEmailOrPass = 'Invalid email or password',
  InvalidToken = 'Invalid Token',
  InternalError = 'An internal error ocurred, try again',
  MissingAuthSecret = 'Auth secret not found',
  EmailTemplateNotFound = 'Email template not found',
  MaxLength = 'Max length exceeded',
  InvalidUser = 'Invalid user',
  CannotChangeOwnStatus = 'You cannot change your own status',
  CannotDeleteOwnUser = 'You cannot delete your own user',
  UserAlreadyAcceptedInvitation = 'User already accepted invitation',
  UserAlreadyConfirmedEmail = 'User already confirmed email',
  UserIsNotActive = 'User is not active',
  InvalidDomainFormat = 'Invalid domain format',
  NoCustomDomainFound = 'No custom domain found for this environment',
  EmailNotFound = 'Email not found',
  UserAlreadyInWaitlist = 'You are already in our waitlist',
  EmailTemplateRequiredEnabled = 'This email template is required to be enabled',
}

export const exceptionsMapper = {
  [StatusCodes.Forbidden]: ForbiddenException,
  [StatusCodes.BadRequest]: BadRequestException,
  [StatusCodes.Conflict]: ConflictException,
  [StatusCodes.Internal]: InternalServerErrorException,
  [StatusCodes.NotAcceptable]: NotAcceptableException,
  [StatusCodes.NotFound]: NotFoundException,
  [StatusCodes.Unauthorized]: UnauthorizedException,
};
