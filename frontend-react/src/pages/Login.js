import LoginForm from "../components/LoginForm";
import styles from "../styles/Authentication.module.css";

const Login = () => (
  <div className={styles.authenticationPage}>
    <section className={styles.left}>
      <LoginForm />
    </section>
  </div>
);

export default Login;
