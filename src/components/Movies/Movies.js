// копмонент страницы с поиском по фильмам
import './Movies.css';
import React, { useEffect, useState } from "react";
import moviesApi from "../../utils/MoviesApi";
import mainApi from "../../utils/MainApi.js";

import MoviesCardList from '../MoviesCardList/MoviesCardList';
import SearchForm from '../SearchForm/SearchForm';
import Preloader from "../Preloader/Preloader";

const Movies = ({ openPopup }) => {

 const [films, setFilms] = useState(null);
 const [filmsSaved, setFilmsSaved] = useState(null);
 const [preloader, setPreloader] = useState(false);
 const [errorText, setErrorText] = useState('');
 const [filmsTumbler, setFilmsTumbler] = useState(false);
 const [filmsInputSearch, setFilmsInputSearch] = useState('');

 const [cardsInRow, setCardsInRow] = useState([]);
 const [filmsShowed, setFilmsShowed] = useState(null);

 useEffect(() => {
  setCardsInRow(calcCardsInRow());
  const handlerResize = () => setCardsInRow(calcCardsInRow());

  window.addEventListener("resize", handlerResize);
  return () => {
   window.removeEventListener("resize", handlerResize);
  };
 }, []);

 function calcCardsInRow() {
  let countCards;
  const clientWidth = document.documentElement.clientWidth;
  const cardsInRowConfig = {
   '1200': [12, 4],
   '920': [9, 3],
   '770': [8, 2],
   '200': [5, 2],
  };

  Object.keys(cardsInRowConfig)
   .sort((a, b) => a - b)
   .forEach(key => {
    if (clientWidth > +key) {
     countCards = cardsInRowConfig[key];
    }
   });
  return countCards;
 }

 function handleMore() {
  const spliceFilms = films;
  const newFilmsShowed = filmsShowed.concat(spliceFilms.splice(0, cardsInRow[1]));
  setFilmsShowed(newFilmsShowed);
  setFilms(spliceFilms);
 }

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

   localStorage.setItem('films', JSON.stringify(filterData)); // сохраняем в локалсторедж
   localStorage.setItem('filmsTumbler', tumbler); // сохраняем в локалсторедж состояние тумблера
   localStorage.setItem('filmsInputSearch', inputSearch); // сохраняем в локалсторедж то что ввели в поиск

   setFilmsShowed(filterData.splice(0, cardsInRow[0]));
   setFilms(filterData);
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
    country: film.country || 'Неизвестно',
    director: film.director,
    duration: film.duration,
    year: film.year,
    description: film.description,
    nameRU: film.nameRU,
    nameEN: film.nameEN,
   };
   try {
    await mainApi.addMovies(objFilm);
    const newSaved = await mainApi.getMovies();
    setFilmsSaved(newSaved);
   } catch (err) {
    openPopup('Во время добавления фильма произошла ошибка.');
   }
  } else {
   try {
    await mainApi.delMovies(film._id);
    const newSaved = await mainApi.getMovies();
    setFilmsSaved(newSaved);
   } catch (err) {
    openPopup('Во время удаления фильма произошла ошибка.');
   }
  }
 }

 /*монтирование - вызов функции "получение сохраненных филмьов"*/
 useEffect(() => {

  // получаем сохраненные фильмы
  mainApi.getMovies().then((data) => {
   setFilmsSaved(data);
  })
   .catch((err) => {
    openPopup(`Ошибка сервера ${err}`);
   });
  // получаем данные из локалстор
  const localStorageFilms = localStorage.getItem('films');

  if (localStorageFilms) {
   // распарсим строку в массив (из локалсторедж)
   const filterData = JSON.parse(localStorageFilms);
   setFilmsShowed(filterData.splice(0, calcCardsInRow()[0]));
   setFilms(filterData);
   setPreloader(false);
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
   {!preloader && !errorText && films !== null && filmsSaved !== null && filmsShowed !== null &&
   <MoviesCardList
    handleMore={handleMore}
    filmsRemains={films}
    films={filmsShowed}
    savedMoviesToggle={savedMoviesToggle}
    filmsSaved={filmsSaved}
   />}

  </section>
 );
};

export default Movies;