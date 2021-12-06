// компонент с информацией о студенте
import './AboutMe.css';
import photo from '../../images/photo.png';

const AboutMe = () => {
  return (
    <section title="Студент">
      <div className="about">
        <h2 className="about__title">Анастасия</h2>
        <p className="about__subtitle">Фронтенд-разработчик, 33 года</p>
        <p className="about__text">На данный момент заканчиваю обучение по программе веб-разработчик в Я.Практикуме</p>
        <ul className="about__links">
          <li>
            <a className="about__link" href="https://www.facebook.com"
               target="_blank" rel="noreferrer">Facebook</a>
          </li>
          <li>
            <a className="about__link" href="https://github.com/Karepanova"
               target="_blank" rel="noreferrer">Github</a>
          </li>
        </ul>
        <img className="about__photo" src={photo} alt="Фото студента."/>
      </div>
    </section>
  );
};

export default AboutMe;