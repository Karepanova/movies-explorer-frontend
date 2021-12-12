// компонент с описанием дипломного проекта
import './AboutProject.css';

const AboutProject = () => {
 return (
  <section className="section__about-project">
   <div className="container__about-project">
    <h2 className="header__about-project">О проекте</h2>
    <ul className="info">
     <li className="info__chapter">
      <p className="info__text info__text_present">Дипломный проект включал 5 этапов</p>
     </li>
     <li className="info__paragraph">
      <p className="info__text info__text_explain">Составление плана, работу над бэкендом, вёрстку, добавление
       функциональности и финальные доработки.</p>
     </li>
     <li className="info__chapter2">
      <p className="info__text info__text_present">На выполнение диплома ушло 5 недель</p>
     </li>
     <li className="info__paragraph2">
      <p className="info__text info__text_explain">У каждого этапа был мягкий и жесткий дедлайн, которые
       нужно было соблюдать, чтобы успешно защититься.</p>
     </li>
    </ul>
    <div className="scheme">
     <div className="info__period">
      <p className="info__text  info__text_black">1 неделя</p>
     </div>
     <p className="info__text info__text_back">Back-end</p>
     <div className="info__period">
      <p className="info__text info__text_white">4 недели</p>
     </div>
     <p className="info__text info__text_front">Front-end</p>
    </div>
   </div>
  </section>
 );
};

export default AboutProject;