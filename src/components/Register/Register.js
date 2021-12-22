import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from 'react';
import '../Form/Form.css';

function Register({ onRegister }) {
 const [inputValues, setInputValues] = useState({});
 const [errors, setErrors] = useState({});
 const [isValid, setIsValid] = useState(false);

 const handleInputChange = (event) => {
  const target = event.target;
  const name = target.name;
  const value = target.value;
  setInputValues({ ...inputValues, [name]: value });
  setErrors({ ...errors, [name]: target.validationMessage });
  setIsValid(target.closest("form").checkValidity());
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  onRegister(inputValues);
 };

 return (

  <section className="form">
   <div className="form__container">
    <Link to="/">
     <img src={logo} alt="Лого" className="form__logo"/>
    </Link>
    <h2 className="form__header">Добро пожаловать!</h2>
    <form className="form__form" onSubmit={handleSubmit}>
     <div className="form__items">

      <label className="form__module">
       <p className="form__module-text">Имя</p>
       <input
        type="text"
        className="form__field"
        required
        onChange={handleInputChange}
        name="name"
        value={inputValues.name || ''}
        aria-label="Поле для ввода имени"
       />
       <p className="form__error">Что-то пошло не так...</p>
      </label>

      <label className="form__module">
       <p className="form__module-text">E-mail</p>
       <input
        type="email"
        required
        onChange={handleInputChange}
        name="email"
        className={`form__field ${errors.email ? 'form__field_color-error' : ''}`}
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

     <button type="submit" className="form__button">Зарегистрироваться</button>
    </form>
    <p className="form__text">
     Уже зарегистрированы?
     <Link to="/signin" className="form__link">Войти</Link>
    </p>
   </div>
  </section>
 );
}

export default Register;