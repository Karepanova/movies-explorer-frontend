import React from 'react';
import './MoviesCard.css';

import { useLocation } from 'react-router-dom';

const MoviesCard = ({ film, savedMoviesToggle }) => {
 const [fav, setFav] = React.useState(false);

 function handleFavChange() {
  const newFav = !fav;
  setFav(newFav);
  savedMoviesToggle(film, newFav)
 }

 const { pathname } = useLocation();

 function getTime(mins) {
  let hours = Math.trunc(mins/60);
  let minutes = mins % 60;
  return hours + 'ч' + minutes + 'м';
 }
 ;

 return (
  <section className="movies-card">
   <div className="movies-card__img-block">
    <a href={film.trailerLink} target="_blank"
       className="movies-card__image"
       style={{ backgroundImage: `url(https://api.nomoreparties.co${film.image.url})` }}
    />
   </div>
   <div className="movies-card__element">
    <div className="movies-card__text">
     <p className="movies-card__title">{film.nameRU}</p>
     <p className="movies-card__time">{getTime(film.duration)}</p>
    </div>
    <div className="movies-card__buttons">
     {pathname === '/saved-movies' ?
      <button type="button" className="movies-card__button movies-card__button_delete"/> :
      <button
       type="button"
       className={`movies-card__button movies-card__button${fav ? '_active' : '_inactive'}`}
       onClick={handleFavChange}
      />
     }

    </div>
   </div>
  </section>
 );
};

export default MoviesCard;