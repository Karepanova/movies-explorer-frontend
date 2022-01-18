// компонент со ссылками на другие проекты
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__header">Портфолио</h2>
        <ul className="portfolio__links">
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://www.facebook.com/profile.php?id=100064182712013" target="_blank">
              Статичный сайт</a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://russian-travel.karepanova.ru/" target="_blank">
              Адаптивный сайт</a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://mesto.karepanova.ru/" target="_blank">
              Одностраничное приложение</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;