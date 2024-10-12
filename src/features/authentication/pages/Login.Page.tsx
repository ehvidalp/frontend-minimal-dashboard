import React from 'react';
import LoginForm from '../components/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <section>

      <h1 className="login__title">Square</h1>
      <LoginForm />


    </section>
  );
};

export default LoginPage;