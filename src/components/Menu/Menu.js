import './Menu.css';
import Navigation from '../Navigation/Navigation';

const Menu = () => {
  return (
    <section className="menu menu_open">
      <div className="menu__container">
        <button className="menu__close" />
        <Navigation />
      </div>
    </section>
  );
};

export default Menu;