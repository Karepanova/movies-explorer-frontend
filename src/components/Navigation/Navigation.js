import './Navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <navigation className="navigation">
      <div className="navigation__position">
        <Link to="/" className="navigation__menu navigation__menu-right navigation__menu-right_show">
          Главная
        </Link>
        <div className="navigation__movies">
          <Link to="/movies" className="navigation__menu navigation__menu-right">
            Фильмы
          </Link>
          <Link to="/saved-movies" className="navigation__menu navigation__menu-right navigation__menu_font-weight">
            Сохранённые фильмы
          </Link>
        </div>

        <Link to="/profile" className="navigation__account navigation__menu-right">
          Аккаунт
          <div className="navigation__account-back"> </div>
        </Link>
      </div>
    </navigation>
  );
}

export default Navigation;