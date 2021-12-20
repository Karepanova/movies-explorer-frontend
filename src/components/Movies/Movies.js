// копмонент страницы с поиском по фильмам
import './Movies.css';
import React, { useEffect, useState } from "react";
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi.js";
import SearchForm from '../SearchForm/SearchForm';
import Preloader from "../Preloader/Preloader";
const Movies = () => {



 const [films, setFilms] = useState(null);
 const [preloader, setPreloader] = useState(false);
 const [errorText, setErrorText] = useState('');
 const [filmsTumbler, setFilmsTumbler] = useState(false);
 const [filmsInputSearch, setFilmsInputSearch] = useState('');

 /*получение фильмов и запись их в сеттер + отображение Preloader при ожидании фильмов*/
 async function handleGetMovies(inputSearch, tumbler) {
  if (!inputSearch) {
   setErrorText('Нужно ввести ключевое слово');
   return false;
  }
  setErrorText(''); // скидываем ошибки в пусто
  setPreloader(true);
  try {
   const data = await moviesApi.getMovies();
   let filterData = data.filter(({ nameRU }) => nameRU.toLowerCase().includes(inputSearch.toLowerCase()));
   if (tumbler) filterData = filterData.filter(({ duration }) => duration <= 40); // короткометражки
   setFilms(filterData);
   localStorage.setItem('films', JSON.stringify(filterData)); // сохраняем в локалсторедж
   localStorage.setItem('filmsTumbler', tumbler); // сохраняем в локалсторедж состояние тумблера
   localStorage.setItem('filmsInputSearch', inputSearch); // сохраняем в локалсторедж то что ввели в поиск
  } catch (err) {
   setErrorText('Во время запроса произошла ошибка.\n' +
    'Возможно, проблема с соединением или сервер недоступен.\n' +
    'Подождите немного и попробуйте ещё раз');

   setFilms([]);
   // удаляем данные в локалсторедж
   localStorage.removeItem('films');
   localStorage.removeItem('filmsTumbler');
   localStorage.removeItem('filmsInputSearch');
  } finally {
   setPreloader(false);
  }
 }

 async function savedMoviesToggle(film, fav) {
  if (fav) {
   // console.log('film', film)
   const objFilm = {

    image: 'https://api.nomoreparties.co' + film.image.url, // делаем из объекта image строку с url
    trailer: film.trailerLink, // добавляем св-во трейле и записываем в него данные из трейлерлинк
    thumbnail: 'https://api.nomoreparties.co' + film.image.url,
    movieId: film.id,
    country: film.country,
    director: film.director,
    duration: film.duration,
    year: film.year,
    description: film.description,
    nameRU: film.nameRU,
    nameEN: film.nameEN,
   };

   const data = await mainApi.addMovies(objFilm);

  }
 }

 /*монтирование - вызов функции "получение филмьов"*/
 useEffect(() => {
  // получаем данные из локалстор
  const localStorageFilms = localStorage.getItem('films');
  if (localStorageFilms) {
   // распарсим строку в массив (из локалсторедж)
   setFilms(JSON.parse(localStorageFilms));
  }
  const localStorageFilmsTumbler = localStorage.getItem('filmsTumbler');
  const localStorageFilmsInputSearch = localStorage.getItem('filmsInputSearch');

  // проверяет есть ли тумблер в локалСтор. и если есть, вставляет его в сеттер
  if (localStorageFilmsTumbler) {
   setFilmsTumbler(localStorageFilmsTumbler === 'true');
  }
  // проверяет есть ли инпут в локалСтор. и если есть, вставляет его в сеттер
  if (localStorageFilmsInputSearch) {
   setFilmsInputSearch(localStorageFilmsInputSearch);
  }

 }, []);

 return (
  <section className="movies">
   <SearchForm
    handleGetMovies={handleGetMovies}
    filmsTumbler={filmsTumbler}
    filmsInputSearch={filmsInputSearch}
   />

   {preloader && <Preloader/>}
   {errorText && <div className="movies__text-error">{errorText}</div>}
   {!preloader && !errorText && films !== null && <MoviesCardList films={films} savedMoviesToggle={savedMoviesToggle}/>}

  </section>
 );
};

export default Movies;