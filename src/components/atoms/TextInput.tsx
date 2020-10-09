import { TextField, TextFieldProps } from '@material-ui/core';
import { useField } from 'formik';

type MyInputProps = {
  id: string;
  label: string;
} & TextFieldProps;

export function TextInput({ id, ...props }: MyInputProps) {
  const [field, meta] = useField(id);

  return (
    <TextField
      {...props}
      id={id}
      label={props.label}
      error={meta.touched && !!meta.error}
      onBlur={field.onBlur}
      name={field.name}
      onChange={field.onChange}
      helperText={meta.touched && meta.error}
      value={field.value}
    />
  );
}
