// презентационный компонент который отрисовывает подвал
import './Footer.css';

const Footer = () => {

  return(
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm</p>
        <div className="footer__info">
          <p className="footer__date">&copy; <span>2021</span></p>
          <ul className="footer__links">
            <li className="footer__item">
              <a className="footer__link" href="https://praktikum.yandex.ru" target="_blank">Яндекс.Практикум</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="https://github.com/Karepanova" target="_blank">Github</a>
            </li>
            <li className="footer__item">
              <a className="footer__link" href="https://www.facebook.com" target="_blank">Facebook</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;