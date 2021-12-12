import './Navigation.css';

const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav__options">
        <div className="nav__link nav__link_type_main nav__link_active">Главная</div>
        <div className="nav__movies">
          <div className="nav__link nav__link_active">Фильмы</div>
          <div className="nav__link2 nav__link_active">Сохранённые фильмы</div>
        </div>
        <div className="nav__account nav__link_active">
          Аккаунт
          <div className="nav__account-back">
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;