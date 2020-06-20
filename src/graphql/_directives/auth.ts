import { DirectiveResolvers } from '../__generated_types__';

export const resolver: DirectiveResolvers = {
  auth: async (next, user, _, context) => {
    if (!context.user) throw new Error('Non authenticated');
    return next();
  },
};
