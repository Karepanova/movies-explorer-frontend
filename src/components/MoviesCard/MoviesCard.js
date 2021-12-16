import React from 'react';
import './MoviesCard.css';

import { useLocation } from 'react-router-dom';

const MoviesCard = ({ film }) => {
 const [fav, setFav] = React.useState(false);

 function handleFavChange() {
  setFav(!fav);
 }

 const { pathname } = useLocation();

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
     <p className="movies-card__time">{film.duration}</p>
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