import { ButtonHTMLAttributes, forwardRef } from 'react';
import styles from './SquareButton.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'; // Puedes agregar variantes si es necesario
}

const SquareButton = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', className, ...props }, ref) => {
    const buttonClassName = `${styles.squareButton}`;

    return (
      <button ref={ref} className={buttonClassName} {...props}>
        {children}
      </button>
    );
  }
);

export default SquareButton;