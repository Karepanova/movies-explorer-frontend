// компонент который отрисовывает шапку сайта на страницу
import './Header.css';
import Navigation from '../Navigation/Navigation';
import HeaderAuthorization from "../HeaderAuthorization/HeaderAuthorization";
import HeaderBurgerMenu from "../HeaderBurgerMenu/HeaderBurgerMenu";
import { Link, useLocation } from 'react-router-dom';


function Header() {
 const { pathname } = useLocation();

 return (
  <section className={`header ${pathname !== '/' ? 'header_black' : ''}`}>
   <div className="header__container">

    <Link to="/" className="header__logo" />


    {/*<Navigation/>*/}
    <HeaderAuthorization/>

    <HeaderBurgerMenu/>
   </div>

  </section>
 );
}

export default Header;