import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import SquareField from '../../../shared/components/SquareField';
import styles from './LoginForm.module.css';
interface LoginFormInputs {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
    .matches(/^[a-zA-Z0-9]+$/, 'Password must contain only letters and numbers')
});

const LoginForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log(data);
  };

  return (
    <form className={styles.loginFormContainer}
      onSubmit={handleSubmit(onSubmit)} aria-labelledby="login-form" role="form">
      <SquareField
        label="Email"
        type="email"
        id="email"
        {...register('email')}
        aria-invalid={errors.email ? 'true' : 'false'}
        aria-describedby="email-error"
        errorMessage={errors.email?.message || ''}
      />
      <SquareField
        label="Password"
        type="password"
        id="password"
        {...register('password')}
        aria-invalid={errors.password ? 'true' : 'false'}
        aria-describedby="password-error"
        errorMessage={errors.password?.message || ''}
      />
      <button type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
