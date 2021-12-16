// управляет отрисовкой карточек
import { useEffect, useState } from 'react';
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import moviesApi from "../../utils/MoviesApi";
import Preloader from '../Preloader/Preloader';

const MoviesCardList = () => {

 const [films, setFilms] = useState([]);
 const [preloader, setPreloader] = useState(false);

 /*получение фильмов и запись их в сеттер + отображение Preloader при ожидании фильмов*/
 async function handleGetMovies() {
  setPreloader(true);
  const data = await moviesApi.getMovies();
  setPreloader(false);
  setFilms(data);
 }

 /*монтирование - выхов функции "получение фильов"*/
 useEffect(() => {
  handleGetMovies().then(r => r);
 }, []);

 return (
  <section className="moviesCardList__container">
   {/*если длина массива больше 0, показываем фильмы*/}
   {films.length > 0 &&
   <div className="moviesCardList">
    {films.map((film) => (
     <MoviesCard film={film}/>
    ))}
   </div>
   }

   <button className="moviesCardList__again" type="button">Ещё</button>
   {preloader && <Preloader/>}

   {/*<div>
   фильмы не найдены
  </div>*/}
  </section>
 );
};

export default MoviesCardList;