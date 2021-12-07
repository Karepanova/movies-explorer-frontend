// компонент который отрисовывает шапку сайта на страницу
import './Header.css';
// import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderLogin from "../HeaderLogin/HeaderLogin";
import Navigation from '../Navigation/Navigation';
import {NavLink} from "react-router-dom";

function Header() {
  return (
    <section className="header">
      <div className="header__container">
        <NavLink to="/" className="header__logo"/>

        <nav className="header__options">
          <HeaderLogin/>
          {/*<NavLink to="/signup" className="header__option header__option_reg">Регистрация</NavLink>
          <NavLink to="/signin" className="header__option header__option_login">Войти</NavLink>*/}
        </nav>
        <div className="header__nav">
          <Navigation/>
        </div>

        <button className="header__menu-button" type="button"/>
      </div>
      {/*<HeaderLogo/>*/}
      {/*<HeaderLogin/>*/}

    </section>


  );
}

export default Header;