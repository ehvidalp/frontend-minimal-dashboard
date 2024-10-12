import LoginForm from '../components/LoginForm';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <section className={styles.loginPageContainer}>
      <h1 className={styles.loginPageTitle}>Login</h1>
      <LoginForm />
    </section>
  );
};

export default LoginPage;