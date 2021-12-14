import Auth from '../Auth/Auth';

function Register() {
  return (
    <Auth
      header="Добро пожаловать!"
      submit="Зарегистрироваться"
      question="Уже зарегистрированы?"
      link="Войти"
      road="/signin"
    >

      <label className="auth__module">
        <p className="auth__module-text">Имя</p>
        <input type="text" className="auth__field" required />
        <p className="auth__error">Что-то пошло не так...</p>
      </label>

      <label className="auth__module">
        <p className="auth__module-text">E-mail</p>
        <input type="email" className="auth__field" required />
        <p className="auth__error">Что-то пошло не так...</p>
      </label>

      <label className="auth__module">
        <p className="auth__module-text">Пароль</p>
        <input type="password" className="auth__field auth__field-error" required />
        <p className="auth__error auth__error-display">Что-то пошло не так...</p>
      </label>

    </Auth>
  );
}

export default Register;