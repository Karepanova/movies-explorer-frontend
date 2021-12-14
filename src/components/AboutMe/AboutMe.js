// компонент с информацией о студенте
import './AboutMe.css';
import photo from '../../images/photo3.jpg';

const AboutMe = () => {

 return (
  <section className="about-me">
   <h2 className="about-me__header">Студент</h2>
   <div className="about-me__info">
    <h2 className="about-me__name">Анастасия</h2>
    <p className="about-me__data">Фронтенд-разработчик, 33 года</p>
    <p className="about-me__details">Я родилась и живу в Екатеринбурге, закончил факультет экономики им. Плеханова.
     У меня есть муж и кот. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начала кодить.
     С 2017 года работалю в компании «Сити Колл». После того, как пройду курс по веб-разработке,
     планирую заниматься фриланс-заказами и уйти с постоянной работы.</p>
    <ul className="about-me__links">
     <li>
      <a className="about-me__link" href="https://www.facebook.com" target="_blank">Facebook</a>
     </li>
     <li>
      <a className="about-me__link" href="https://github.com/Karepanova" target="_blank">Github</a>
     </li>
    </ul>
    <img className="about-me__photo" src={photo} alt="автопортрет"/>
   </div>
  </section>
 );

};

export default AboutMe;