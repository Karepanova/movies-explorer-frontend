import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";

const Navigation = () => {
  const [openMenu, setOpenMenu] = React.useState(false);

  function handleToggleMenu() {
    setOpenMenu(!openMenu);
  }

  return (
   <div>
     <section className={`navigation__menu-wrapper ${openMenu ? 'navigation__menu-wrapper_open' : ''}`}>
       <div className="navigation__container">
         <button className="navigation__close" onClick={handleToggleMenu} />
         <div className="navigation">
           <div className="navigation__position">
             <Link to="/" className="navigation__menu navigation__menu-right navigation__menu-right_show">
               Главная
             </Link>
             <div className="navigation__movies">
               <Link to="/movies" className="navigation__menu navigation__menu-right">
                 Фильмы
               </Link>
               <Link to="/saved-movies"
                     className="navigation__menu navigation__menu-right navigation__menu_font-weight">
                 Сохранённые фильмы
               </Link>
             </div>

             <Link to="/profile" className="navigation__account navigation__menu-right">
               Аккаунт
               <div className="navigation__account-back" />
             </Link>
           </div>
         </div>
       </div>

     </section>
     <button className="navigation__menu-burger" type="button" onClick={handleToggleMenu} />
   </div>

  );
}

export default Navigation;