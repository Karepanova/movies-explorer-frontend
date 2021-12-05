import React from 'react';
import './Promo.css';
import promoLogo from '../../images/promo-logo.svg';

function Promo() {
 return (
  <section className="promo">
   <img className="promo__logo" src={promoLogo} alt="Логотип" />
   <div className="promo__text">
    <h1 className="promo__title">
     Учебный проект студента факультета Веб-разработки.
    </h1>
    <p className="promo__subtitle">
     Листайте ниже, чтобы узнать больше про этот проект и его создателя.
    </p>
    <a className="promo__button-link" href="https://practicum.yandex.ru/web/" target="_blank" rel="noreferrer">
     <button className="promo__button-more">Узнать больше</button>
    </a>
   </div>
  </section>

  /*<section className="promo">
   <img className="promo__logo" src={promoLogo} alt="Логотип" />
   <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
   <p>
    Листайте ниже, чтобы узнать больше про этот проект и его создателя.
   </p>
  </section>*/
 );
}

export default Promo;