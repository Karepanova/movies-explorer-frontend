import './HeaderLogo.css';
import logo from '../../images/logo.svg';
import HeaderNavigation from "../HeaderNavigation/HeaderNavigation";

function HeaderLogo() {
 return (
  <div className="header__logo">
     <img src={logo} alt="Логотип" className="logo" />
     <HeaderNavigation />
  </div>
 );
}

export default HeaderLogo;