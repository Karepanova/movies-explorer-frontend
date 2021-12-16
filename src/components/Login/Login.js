import Form from '../Form/Form';

function Login () {

  return (

    <Form
      header="Рады видеть!"
      submit="Войти"
      question="Ещё не зарегистрированы?"
      link="Регистрация"
      road="/signup"
    >

      <label className="form__module">
        <p className="form__module-text">E-mail</p>
        <input type="email" className="form__field" required />
        <p className="form__error">Что-то пошло не так...</p>
      </label>

      <label className="form__module">
        <p className="form__module-text">Пароль</p>
        <input type="password" className="form__field form__field_color-error" required />
        <p className="form__error form__error-display">Что-то пошло не так...</p>
      </label>

    </Form>
  );
}

export default Login;