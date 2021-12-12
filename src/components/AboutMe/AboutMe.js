// компонент с информацией о студенте
import './AboutMe.css';
import photo from '../../images/photo3.jpg';

const AboutMe = () => {
 return (
  <section className="section__about-me">
   <h2 className="header__about-me">Студент</h2>
   <div className="about">
    <h2 className="about__header">Анастасия</h2>
    <p className="about__description">Фронтенд-разработчик, 33 года</p>
    <p className="about__details">Я родилась и живу в Екатеринбурге, закончил факультет экономики им. Плеханова.
     У меня есть муж и кот. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начала кодить.
     С 2017 года работалю в компании «Сити Колл». После того, как пройду курс по веб-разработке,
     планирую заниматься фриланс-заказами и уйти с постоянной работы.</p>
    <ul className="about__links">
     <li>
      <a className="about__link" href="https://www.facebook.com" target="_blank">Facebook</a>
     </li>
     <li>
      <a className="about__link" href="https://github.com/Karepanova" target="_blank">Github</a>
     </li>
    </ul>
    <img className="about__photo" src={photo} alt="автопортрет"/>
   </div>
  </section>
 );
};

export default AboutMe;