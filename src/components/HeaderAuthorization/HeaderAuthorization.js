// компонент содержит 2 кнопки в шапке: Регистрация и Войти
import './HeaderAuthorization.css';
import { Link } from 'react-router-dom';

function HeaderAuthorization() {
 return (
  <section className="header__auth">
   <Link to="/signup" className="header__button_register header__button_config">
    Регистрация
   </Link>

   <Link to="/signin" className="header__button_enter header__button_config">
    Войти
   </Link>
  </section>
 );
}

export default HeaderAuthorization;