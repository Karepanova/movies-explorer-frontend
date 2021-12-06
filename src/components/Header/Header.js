// компонент который отрисовывает шапку сайта на страницу
import './Header.css';
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderLogin from "../HeaderLogin/HeaderLogin";

function Header() {
 return (
  <section className="header">
   <HeaderLogo />
   <HeaderLogin />
  </section>
 );
}

export default Header;