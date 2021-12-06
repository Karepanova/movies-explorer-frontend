// компонент с навигацией по странице "о проекте"
import './NavTab.css';

const NavTab = () => {
  return (
    <section className="navTab">
      <nav className="navTab__container">
        <ul className="navTab__list">
          <li className="navTab__item">
            <a href="#about-project" className="navTab__link">О проекте</a>
          </li>
          <li className="navTab__item">
            <a href="#techs" className="navTab__link">Технологии</a>
          </li>
          <li className="navTab__item">
            <a href="#about" className="navTab__link">Студент</a>
          </li>
        </ul>
      </nav>
    </section>

  );
};

export default NavTab;