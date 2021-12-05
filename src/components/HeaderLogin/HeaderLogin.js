import './HeaderLogin.css';

function HeaderLogin() {
 return (
  <div className="header__login">
   <button type="button" className="header__button">Регистрация</button>
   <button type="button" className="header__button header__button_last-of-type">Войти</button>
  </div>
 );
}

export default HeaderLogin;