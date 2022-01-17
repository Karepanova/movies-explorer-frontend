import './MoviesCard.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const MoviesCard = ({ film, savedMoviesToggle, filmsSaved }) => {
 const [fav, setFav] = useState(false);
 const { pathname } = useLocation();

 function handleFavChange() {
  const newFav = !fav;
  // setFav(newFav);
  const savedFilm = filmsSaved.filter((obj) => {
   return obj.movieId == film.id;
  });
  savedMoviesToggle({ ...film, _id: savedFilm.length > 0 ? savedFilm[0]._id : null }, newFav);
 }

 function handleFavDelete() {
  savedMoviesToggle(film, false)
 }

 function getTime(mins) {
  let hours = Math.trunc(mins / 60);
  let minutes = mins % 60;
  return hours + 'ч' + minutes + 'м';
 }

 useEffect(() => {
  if (pathname !== '/saved-movies') {
   const savedFilm = filmsSaved.filter((obj) => {
    return obj.movieId == film.id;
   });

   if (savedFilm.length > 0) {
    setFav(true);
   } else {
    setFav(false);
   }
  }
 }, [filmsSaved]);

 return (
  <section className="movies-card">
   <div className="movies-card__img-block">
    <a href={pathname === '/saved-movies' ? film.trailer : film.trailerLink} target="_blank"
       className="movies-card__image"
       style={pathname === '/saved-movies' ?
        { backgroundImage: `url(${film.image})` }
        : { backgroundImage: `url(https://api.nomoreparties.co${film.image.url})` }}
    />
   </div>
   <div className="movies-card__element">
    <div className="movies-card__text">
     <p className="movies-card__title">{film.nameRU}</p>
     <p className="movies-card__time">{getTime(film.duration)}</p>
    </div>
    <div className="movies-card__buttons">
     {pathname === '/saved-movies' ?
      <button
       type="button"
       className="movies-card__button movies-card__button_delete"
       onClick={handleFavDelete}
      /> :
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