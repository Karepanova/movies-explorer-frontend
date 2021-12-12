// компонент со ссылками на другие проекты
import './Portfolio.css';

const Portfolio = () => {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h2 className="portfolio__header">Портфолио</h2>
        <ul className="portfolio__links">
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/Karepanova/how-to-learn" target="_blank">
              Статичный сайт</a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://github.com/Karepanova/russian-travel" target="_blank">
              Адаптивный сайт</a>
          </li>
          <li className="portfolio__item">
            <a className="portfolio__link" href="https://karepanova.nomoredomains.rocks/" target="_blank">
              Одностраничное приложение</a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Portfolio;