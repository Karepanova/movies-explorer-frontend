// компонент содержит 2 кнопки в шапке: Регистрация и Войти
import './HeaderAuthorization.css';

function HeaderAuthorization() {
 return (
  <div className="header__auth">
   <button type="button" className="header__button_register header__button_config">Регистрация</button>
   <button type="button" className="header__button_enter header__button_config">Войти</button>
  </div>
 );
}

export default HeaderAuthorization;