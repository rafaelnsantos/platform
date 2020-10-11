import { Text } from '@atoms';
import gql from 'graphql-tag';
import { useMeQuery } from '~/graphql/__generated_operations__';
import withApollo from '~/config/withApollo';
import { RegisterForm } from '@organisms/RegisterForm';

gql`
  query Me {
    me {
      name
      domain
    }
  }
`;

export const DashboardTemplate = withApollo(() => {
  const { data, loading, error } = useMeQuery();

  if (loading) return <>loading</>;

  if (error) {
    if (error.graphQLErrors[0].message.includes('Missing data')) {
      return <RegisterForm />;
    }

    return <>error</>;
  }

  return (
    <>
      <Text>{data?.me.name}</Text>
      <Text>{data?.me.domain}</Text>
    </>
  );
});
