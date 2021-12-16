import './HeaderNavigation.css';


function HeaderNavigation() {
 return (
  <div>
   <button type="button" className="header__button">Фильмы</button>
   <button type="button" className="header__button">Сохранённые фильмы</button>
  </div>
 );
}

export default HeaderNavigation;