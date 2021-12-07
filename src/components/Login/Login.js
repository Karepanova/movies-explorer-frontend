import Auth from '../Auth/Auth';
import './Login.css';

const Login = () => {
  return (
    <section className="login">
      <Auth
        greeting="Рады видеть!"
        buttonText="Войти"
        captionText="Еще не зарегистированы? "
        navLinkText="Регистрация"
      />
    </section>
  );
};

export default Login;