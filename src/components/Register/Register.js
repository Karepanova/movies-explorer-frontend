import './Register.css';
import Auth from '../Auth/Auth';

const Register = () => {
  return (
    <section className="register">
      <Auth greeting="Добро пожаловать!"
            buttonText="Зарегистрироваться"
            captionText="Уже зарегистрированы?"
            navLinkText="Войти"
      />
    </section>

  );
};

export default Register;