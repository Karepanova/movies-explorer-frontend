import './Auth.css';
import React from 'react';



const Auth = () => {

  return (
    <form className="auth">
      <div to="/" className="auth__logo"/>
      <h3 className="auth__greeting">Добро пожаловать!</h3>

      <div className="auth__inputs">
                <div className="auth__name-area">
          <label className="auth__label">Имя</label>
          <input className="auth__input auth__input_type_error"
                 placeholder="Имя" name="name" required id="name-input" minLength="2" maxLength="30" />

        </div>


        <label className="auth__label">E-mail</label>
        <input className="auth__input auth__input_type_error"
               placeholder="Email" type="email" name="email" required id="email-input"
               pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[a-z]{2,})\b"/>

        <label className="auth__label">Пароль</label>
        <input className="auth__input auth__input_type_error"
               placeholder="Пароль" type="password" minLength="4"
               required name="password" id="password-input" />
      </div>

      <button className="auth__submit-button" type="submit">Зарегистрироваться </button>
      <p className="auth__caption">
        <div className="auth__link">ссылка</div>
      </p>
    </form>
  );
};

export default Auth;