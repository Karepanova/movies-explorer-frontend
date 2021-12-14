import Auth from '../Auth/Auth';

function Login () {

  return (

    <Auth
      header="Рады видеть!"
      submit="Войти"
      question="Ещё не зарегистрированы?"
      link="Регистрация"
      road="/signup"
    >

      <label className="auth__module">
        <p className="auth__module-text">E-mail</p>
        <input type="email" className="auth__field" required />
        <p className="auth__error">Что-то пошло не так...</p>
      </label>

      <label className="auth__module">
        <p className="auth__module-text">Пароль</p>
        <input type="password" className="auth__field auth__field_color-error" required />
        <p className="auth__error auth__error-display">Что-то пошло не так...</p>
      </label>

    </Auth>
  );
}

export default Login;