import { Resolvers } from '../__generated_types__';

export const resolver: Resolvers = {
  Query: {
    me(parent, args, context) {
      return { name: context.user?.email };
    },
  },
};
