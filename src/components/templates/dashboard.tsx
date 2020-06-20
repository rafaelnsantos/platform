import { Text } from '@atoms';
import gql from 'graphql-tag';
import { useMeQuery } from '~/graphql/__generated_operations__';
import withApollo from '~/config/withApollo';

gql`
  query Me {
    me {
      name
    }
  }
`;

export const DashboardTemplate = withApollo(() => {
  const { data, loading, error } = useMeQuery({
    fetchPolicy: 'no-cache',
  });

  if (loading) return <>loading</>;

  if (error) return <>error</>;

  return <Text>{data?.me.name}</Text>;
});
