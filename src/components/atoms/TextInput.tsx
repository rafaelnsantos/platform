import { DetailedHTMLProps, InputHTMLAttributes, forwardRef } from 'react';

type TextInputProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => (
  <input ref={ref} type="text" {...props} id={props.name} name={props.name} />
));
