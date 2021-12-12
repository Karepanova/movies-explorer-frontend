// компонент который отрисовывает шапку сайта на страницу
import './Header.css';
import Navigation from '../Navigation/Navigation';
import HeaderAuthorization from "../HeaderAuthorization/HeaderAuthorization";
import HeaderBurgerMenu from "../HeaderBurgerMenu/HeaderBurgerMenu";

function Header() {
 return (
  <section className="header">
   <div className="header__container">
    <div className="header__logo"/>
    <HeaderAuthorization/>
    {/*<Navigation/>*/}


    {/*<HeaderBurgerMenu/>*/}
   </div>

  </section>
 );
}

export default Header;