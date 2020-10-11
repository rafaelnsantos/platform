import { Button, Container } from '@material-ui/core';
import { TextInput } from '@atoms';
import { useFormik, FormikProvider } from 'formik';
import { object, string } from 'yup';
import gql from 'graphql-tag';
import { RegisterInput } from '~/graphql/__generated_types__';
import { useRegisterMutation, useCheckDomainMutation } from '~/graphql/__generated_operations__';
import { useDebounce } from '~/hooks/useDebounce';

gql`
  mutation CheckDomain($input: CheckDomainInput!) {
    checkDomain(input: $input)
  }
`;

gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      name
    }
  }
`;

export function RegisterForm() {
  const [register, registerResult] = useRegisterMutation();
  const [checkDomain, checkDomainResult] = useCheckDomainMutation();

  const formik = useFormik<RegisterInput>({
    initialValues: {
      domain: '',
    },
    validationSchema: object().shape<RegisterInput>({
      domain: string().required(),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      resetForm();
      setSubmitting(false);
    },
  });

  const { submitForm, isSubmitting, values } = formik;

  useDebounce(
    (debouncedDomain) => {
      if (!debouncedDomain) return;
      checkDomain({
        variables: {
          input: {
            domain: debouncedDomain,
          },
        },
      });
    },
    values.domain,
    1000
  );

  const isDomainValid = checkDomainResult.called && checkDomainResult.data?.checkDomain;

  return (
    <Container maxWidth="sm">
      <FormikProvider value={formik}>
        <form className="flex flex-col">
          <div className="flex flex-row items-center">
            <TextInput label="Domínio" id="domain" className="flex-grow px-" />
            {checkDomainResult.loading && '...'}
            {!checkDomainResult.loading &&
              checkDomainResult.called &&
              (isDomainValid ? 'domínio livre' : 'domínio em uso')}
          </div>
          {!isSubmitting && (
            <Button
              variant="contained"
              color="primary"
              disabled={!isDomainValid}
              onClick={submitForm}
            >
              Enviar
            </Button>
          )}
        </form>
      </FormikProvider>
    </Container>
  );
}
