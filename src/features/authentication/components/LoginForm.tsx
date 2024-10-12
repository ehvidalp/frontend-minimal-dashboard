import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import SquareField from '../../../shared/components/SquareField';

interface LoginFormInputs {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('El correo electrónico es obligatorio')
    .email('Ingrese una dirección de correo válida'),
  password: Yup.string()
    .required('La contraseña es obligatoria')
    .max(20, 'La contraseña debe tener menos de 20 caracteres'),
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
    <form onSubmit={handleSubmit(onSubmit)} aria-labelledby="login-form" role="form">
      <div className="form-group">
        <SquareField
          label="Email"
          type="email"
          id="email"
          {...register('email')}
          aria-invalid={errors.email ? 'true' : 'false'}
          aria-describedby="email-error"
        />
        {errors.email && (
          <span id="email-error" role="alert" className="error-message">
            {errors.email.message}
          </span>
        )}
      </div>

      <div className="form-group">
        <SquareField
          label="Password"
          type="password"
          id="password"
          {...register('password')}
          aria-invalid={errors.password ? 'true' : 'false'}
          aria-describedby="password-error"
        />
        {errors.password && (
          <span id="password-error" role="alert" className="error-message">
            {errors.password.message}
          </span>
        )}
      </div>

      <button type="submit">
        Login
      </button>
    </form>
  );
};

export default LoginForm;
