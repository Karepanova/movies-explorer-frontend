import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
import { useState } from 'react';
import '../Form/Form.css';


function Register({ onRegister }) {
 const [inputValues, setInputValues] = useState({});

 const handleInputChange = (e) => {
  const { name, value } = e.target;
  setInputValues({
   ...inputValues,
   [name]: value,
  });
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  onRegister(inputValues);
 };

 return (

  <section className="form">
   <div className="form__container">
    <img src={logo} alt="Лого" className="form__logo"/>
    <h2 className="form__header">Добро пожаловать!</h2>
    <form className="form__form" onSubmit={handleSubmit}>
     <div className="form__items">

      <label className="form__module">
       <p className="form__module-text" >Имя</p>
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
        className="form__field"
        required
        onChange={handleInputChange}
        name="email"
        value={inputValues.email || ''}
        aria-label="Поле для ввода почты"
       />
       <p className="form__error">Что-то пошло не так...</p>
      </label>

      <label className="form__module">
       <p className="form__module-text">Пароль</p>
       <input
        type="password"
        className="form__field form__field_color-error"
        required
        onChange={handleInputChange}
        name="password"
        value={inputValues.password || ''}
        minLength="5"
        aria-label="Поле для ввода пароля"
       />
       <p className="form__error form__error-display">Что-то пошло не так...</p>
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