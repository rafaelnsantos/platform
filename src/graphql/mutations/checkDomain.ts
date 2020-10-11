/* eslint-disable @typescript-eslint/camelcase */
import { Resolvers } from '../__generated_types__';

export const resolver: Resolvers = {
  Mutation: {
    async checkDomain(_, args, context) {
      const { domain } = args.input;
      const { firebase } = context.services;

      const doc = await firebase.firestore().collection('redecardapio.com.br').doc(domain).get();

      return !doc.exists;
    },
  },
};
