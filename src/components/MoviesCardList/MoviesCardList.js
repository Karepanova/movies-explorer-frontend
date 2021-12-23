// управляет отрисовкой карточек
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import { useLocation } from "react-router-dom";

const MoviesCardList = ({ films, savedMoviesToggle, filmsSaved, filmsRemains, handleMore }) => {
 const { pathname } = useLocation();

 return (
  <section className="moviesCardList__container">
   {/*если длина массива > 0, показываем фильмы, иначе "ничего не найдено"*/}
   {films.length > 0 ?
    <div className="moviesCardList">
     {films.map((film) => (
      <MoviesCard
       key={film.id || film.movieId}
       film={film}
       savedMoviesToggle={savedMoviesToggle}
       filmsSaved={filmsSaved}
      />
     ))}
    </div> :
    <div className="moviesCardList__text">Ничего не найдено</div>
   }
   {filmsRemains.length > 0 && pathname !== '/saved-movies' &&
   <button
    className="moviesCardList__again"
    type="button"
    onClick={handleMore}
   >Ещё</button>
   }
  </section>
 );
};

export default MoviesCardList;