import RegisterForm from "../components/RegisterForm";
import styles from "../styles/Authentication.module.css";

const Register = () => (
  <div className={styles.authenticationPage}>
    <section className={styles.right} id="register-section">
      <RegisterForm />
    </section>
  </div>
);

export default Register;
