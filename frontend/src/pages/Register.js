import RegisterForm from "../components/RegisterForm";
import "../styles/Authentication.css";

const Register = () => (
  <div className="authenticationPage">
    <section className="right" id="register-section">
      <RegisterForm />
    </section>
  </div>
);

export default Register;
