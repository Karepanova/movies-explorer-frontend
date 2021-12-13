import React from 'react';
import './Promo.css';
import promoLogo from '../../images/promo-logo.svg';

function Promo() {
 return (
  <section className="promo">
   <div className="promo__block">
    <h2 className="promo__basic"> Учебный проект студента факультета Веб-разработки. </h2>
    <p className="promo__text">
     Листайте ниже, чтобы узнать больше про этот проект и его создателя.
    </p>
    <a className="promo__link" href="https://practicum.yandex.ru" target="_blank">
     Узнать больше
    </a>
   </div>
   <img className="promo__logo" src={promoLogo} alt="Логотип" />
  </section>
 );
}
export default Promo;