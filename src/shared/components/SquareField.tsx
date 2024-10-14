import { InputHTMLAttributes, forwardRef } from 'react';
import styles from './SquareField.module.css';
interface SquareFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  errorMessage?: string;
  placeholder?: string;
}

const SquareField = forwardRef<HTMLInputElement, SquareFieldProps>(
  ({ label, id, errorMessage, placeholder, ...inputProps }, ref) => {
    return (
      <>
        <label htmlFor={id} className={styles.squareFieldLabel}>{label}</label>
        <input id={id} ref={ref} {...inputProps} placeholder={placeholder} className={styles.squareField} />
        {errorMessage && (
          <span role="alert" className={styles.squareFieldMsjEerror}>
            {errorMessage}
          </span>
        )}
      </>
    );
  }
);

export default SquareField;
