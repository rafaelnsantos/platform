import { resolver as auth } from './auth';
import { resolver as checkOrigin } from './checkOrigin';

export const directives = {
  ...auth,
  ...checkOrigin,
};
