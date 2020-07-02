import { ApolloServer } from 'apollo-server-micro';
import { context } from '~/graphql/context';
import microCors from 'micro-cors';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { directives } from '~/graphql/_directives';
import { resolvers } from '~/graphql/resolvers';
import typeDefs from '~/graphql/typeDefs';

const cors = microCors({
  allowMethods: ['OPTIONS', 'POST'],
  allowHeaders: ['uid, content-type'],
});

const apolloServer = new ApolloServer({
  schema: makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers as any,
    directiveResolvers: directives as any,
  }),
  context,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors((req, res) => {
  if (req.method === 'OPTIONS') {
    res.end();
    return;
  }

  return apolloServer.createHandler({ path: '/api/graphql' })(req, res);
});
