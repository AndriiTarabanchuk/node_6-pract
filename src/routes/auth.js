import { Router } from 'express';

import {
  loginUserValidSchema,
  registerUserValidSchema,
  requestResetEmailValidSchema,
  requestResetPassTokenValidSchema,
} from '../validation/auth.js';
import { validateBody } from '../middlewares/validateBody.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  loginUserController,
  logoutUserController,
  refreshUserSessionController,
  registerUserController,
  requestResetEmailController,
} from '../controllers/auth.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerUserValidSchema),
  ctrlWrapper(registerUserController),
);

authRouter.post(
  '/login',
  validateBody(loginUserValidSchema),
  ctrlWrapper(loginUserController),
);

authRouter.post('/refresh', ctrlWrapper(refreshUserSessionController));

authRouter.post('/logout', ctrlWrapper(logoutUserController));

// authRouter.post(
//   '/request-reset-password-token',
//   validateBody(requestResetPassTokenValidSchema),
//   requestResetEmailController,
// );

// authRouter.post(
//   '/reset-password',
//   validateBody(requestResetPassTokenValidSchema),
//   ctrlWrapper(requestResetEmailController),
// );

authRouter.post(
  '/request-reset-email',
  validateBody(requestResetEmailValidSchema),
  ctrlWrapper(requestResetEmailController),
);

export default authRouter;
