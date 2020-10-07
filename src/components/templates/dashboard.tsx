import { Text } from '@atoms';
import gql from 'graphql-tag';
import { useMeQuery } from '~/graphql/__generated_operations__';
import withApollo from '~/config/withApollo';

// eslint-disable-next-line @typescript-eslint/no-unused-expressions
gql`
  query Me {
    me {
      name
      domain
    }
  }
`;

export const DashboardTemplate = withApollo(() => {
  const { data, loading, error } = useMeQuery({
    fetchPolicy: 'no-cache',
  });

  if (loading) return <>loading</>;

  if (error) return <>error</>;

  return (
    <>
      <Text>{data?.me.name}</Text>
      <Text>{data?.me.domain}</Text>
    </>
  );
});
