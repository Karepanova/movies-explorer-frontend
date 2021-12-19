// управляет отрисовкой карточек
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';

const MoviesCardList = ({ films, savedMoviesToggle }) => {



 return (
  <section className="moviesCardList__container">
   {/*если длина массива > 0, показываем фильмы, иначе "ничего не найдено"*/}
   {films.length > 0 ?
    <div className="moviesCardList">
     {films.map((film) => (
      <MoviesCard film={film} savedMoviesToggle={savedMoviesToggle}/>
     ))}
    </div> :
     <div className="moviesCardList__text">Ничего не найдено</div>
   }

   <button className="moviesCardList__again" type="button">Ещё</button>

  </section>
 );
};

export default MoviesCardList;