// компонент который отрисовывает шапку сайта на страницу
import './Header.css';
import Navigation from '../Navigation/Navigation';
import HeaderAuthorization from "../HeaderAuthorization/HeaderAuthorization";
import { Link, useLocation } from 'react-router-dom';

function Header({ loggedIn, isLoading }) {
 const { pathname } = useLocation();

 return (
  <section className={`header ${pathname !== '/' ? 'header_black' : ''}`}>
   <div className="header__container">
    <Link to="/" className="header__logo"/>
    {isLoading ? '' : loggedIn ? <Navigation/> : <HeaderAuthorization/>}
   </div>

  </section>
 );
}

export default Header;