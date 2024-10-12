import { InputHTMLAttributes, forwardRef } from 'react';

interface SquareFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

const SquareField = forwardRef<HTMLInputElement, SquareFieldProps>(
  ({ label, id, ...inputProps }, ref) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} {...inputProps} />
      </>
    );
  }
);

export default SquareField;
