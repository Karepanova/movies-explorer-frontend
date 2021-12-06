import './Navigation.css';
import {NavLink} from 'react-router-dom';

return (
  <nav className="nav">
    <div className="nav__options">
      <NavLink className="nav__link nav__link_type_main nav__link_active">Главная</NavLink>
      <div className="nav__movies">
        <NavLink className="nav__link nav__link_active">Фильмы</NavLink>
        <NavLink className="nav__link nav__link_active">Сохранённые фильмы</NavLink>
      </div>
      <NavLink className="nav__account nav__link_active">
        Аккаунт
        <div className="nav__account-back">
        </div>
      </NavLink>
    </div>
  </nav>
);


export default Navigation;