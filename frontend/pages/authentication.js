import LoginForm from "../components/LoginForm";
import RegisterForm from "../components/RegisterForm/RegisterForm";
import styles from "../styles/Authentication.module.css";

const Authentication = () => (
  <div className={styles.authenticationPage}>
    <section className={styles.formsContainer}>
      <section className={styles.left}>
        <LoginForm />
      </section>
      <section className={styles.right} id="register-section">
        <RegisterForm />
      </section>
    </section>
  </div>
);

export default Authentication;
