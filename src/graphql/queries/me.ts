import { Resolvers } from '../__generated_types__';

export const resolver: Resolvers = {
  Query: {
    me(parent, args, context) {
      if (!context.user || !context.userData) throw new Error(); // already checked in directives

      return { name: context.userData.name, email: context.user, domain: context.userData.domain };
    },
  },
};
