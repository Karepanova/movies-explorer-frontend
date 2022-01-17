import '../Form/Form.css';
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from 'react';
import isEmail from "validator/es/lib/isEmail";


function Login({ onLogin }) {
  const [inputValues, setInputValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false)

  const handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === "email") {
      if (!isEmail(value)) {
        target.setCustomValidity("Введите корректный e-mail");
      } else {
        target.setCustomValidity("");
      }
    }

    setInputValues({...inputValues, [name]: value });
    setErrors({...errors, [name]: target.validationMessage });
    setIsValid(target.closest("form").checkValidity());
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(inputValues);
  };


  return (

   <section className="form">
     <div className="form__container">
       <Link to="/">
         <img src={logo} alt="Лого" className="form__logo"/>
       </Link>
       <h2 className="form__header">Рады видеть!</h2>
       <form className="form__form" onSubmit={handleSubmit}>
         <div className="form__items">

           <label className="form__module">
             <p className="form__module-text">E-mail</p>
             <input
              type="email"
              className={`form__field ${errors.email ? 'form__field_color-error' : ''}`}
              required
              onChange={handleInputChange}
              name="email"
              value={inputValues.email || ''}
              aria-label="Поле для ввода почты"
             />
             <p className={`form__error ${errors.email ? 'form__error-display' : ''}`}>{errors.email}</p>
           </label>

           <label className="form__module">
             <p className="form__module-text">Пароль</p>
             <input
              type="password"
              className={`form__field ${errors.password ? 'form__field_color-error' : ''}`}
              required
              onChange={handleInputChange}
              name="password"
              value={inputValues.password || ''}
              minLength="5"
              aria-label="Поле для ввода пароля"
             />
             <p className={`form__error ${errors.password ? 'form__error-display' : ''}`}>{errors.password}</p>
           </label>

         </div>

         <button type="submit" className="form__button" disabled={!isValid}>Войти</button>
       </form>
       <p className="form__text">
         Ещё не зарегистрированы?
         <Link to="/signup" className="form__link">Регистрация</Link>
       </p>
     </div>
   </section>
  );
}

export default Login;