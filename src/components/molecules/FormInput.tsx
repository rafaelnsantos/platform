import { FieldError } from 'react-hook-form';
import { ReactNode } from 'react';

interface FormInputProps {
  id: string;
  label: string;
  error?: FieldError;
  children: ReactNode;
}

export const FormInput = ({ id, label, error, children }: FormInputProps) => {
  return (
    <div className="flex flex-row">
      <label htmlFor={id}>{label}</label>
      <div>{children}</div>
      <div>{error?.message}</div>
    </div>
  );
};
