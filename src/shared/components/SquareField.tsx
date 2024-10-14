import { InputHTMLAttributes, forwardRef } from 'react';

interface SquareFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  errorMessage?: string;
}

const SquareField = forwardRef<HTMLInputElement, SquareFieldProps>(
  ({ label, id, errorMessage, ...inputProps }, ref) => {
    return (
      <>
        <label htmlFor={id}>{label}</label>
        <input id={id} ref={ref} {...inputProps} />
        {errorMessage && (
          <span role="alert" className="error-message">
            {errorMessage}
          </span>
        )}
      </>
    );
  }
);

export default SquareField;
