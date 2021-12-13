import './Navigation.css';

const Navigation = () => {
  return (
    <navigation className="navigation">
      <div className="navigation__position">
        <div className="navigation__menu navigation__menu-right navigation__menu-right_show">Главная</div>

        <div className="navigation__movies">
          <div className="navigation__menu navigation__menu-right">Фильмы</div>
          <div className="navigation__menu navigation__menu-right navigation__menu_font-weight">Сохранённые фильмы</div>
        </div>

        <div className="navigation__account navigation__menu-right">
          Аккаунт
          <div className="navigation__account-back"> </div>
        </div>
      </div>
    </navigation>
  );
}

export default Navigation;