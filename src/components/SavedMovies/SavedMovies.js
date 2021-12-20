// копмонент страницы с поиском по фильмам
import './SavedMovies.css';
import { useEffect, useState } from "react";
import mainApi from "../../utils/MainApi.js";

import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';
import Preloader from "../Preloader/Preloader";



const SavedMovies = () => {

 const [films, setFilms] = useState(null);
 const [preloader, setPreloader] = useState(false);
 const [errorText, setErrorText] = useState('');
 const [filmsTumbler, setFilmsTumbler] = useState(false);
 const [filmsInputSearch, setFilmsInputSearch] = useState('');

 /*получение фильмов и запись их в сеттер + отображение Preloader при ожидании фильмов*/
 async function handleGetMovies(inputSearch, tumbler) {

  setErrorText(''); // скидываем ошибки в пусто
  setPreloader(true);
  try {
   const data = await mainApi.getMovies();
   let filterData = data.filter(({ nameRU }) => nameRU.toLowerCase().includes(inputSearch.toLowerCase()));
   if (tumbler) filterData = filterData.filter(({ duration }) => duration <= 40); // короткометражки
   setFilms(filterData);
   localStorage.setItem('savedFilms', JSON.stringify(filterData)); // сохраняем в локалсторедж
   localStorage.setItem('savedFilmsTumbler', tumbler); // сохраняем в локалсторедж состояние тумблера
   localStorage.setItem('savedFilmsInputSearch', inputSearch); // сохраняем в локалсторедж то что ввели в поиск
  } catch (err) {
   setErrorText('Во время запроса произошла ошибка.\n' +
    'Возможно, проблема с соединением или сервер недоступен.\n' +
    'Подождите немного и попробуйте ещё раз');

   setFilms([]);
   // удаляем данные в локалсторедж
   localStorage.removeItem('savedFilms');
   localStorage.removeItem('savedFilmsTumbler');
   localStorage.removeItem('savedFilmsInputSearch');
  } finally {
   setPreloader(false);
  }
 }

 /*монтирование */
 useEffect(() => {
  // получаем данные из локалстор
  const localStorageFilms = localStorage.getItem('savedFilms');
  if (localStorageFilms) {
   // распарсим строку в массив (из локалсторедж)
   setFilms(JSON.parse(localStorageFilms));
   const localStorageFilmsTumbler = localStorage.getItem('savedFilmsTumbler');
   const localStorageFilmsInputSearch = localStorage.getItem('savedFilmsInputSearch');

   // проверяет есть ли тумблер в локалСтор. и если есть, вставляет его в сеттер
   if (localStorageFilmsTumbler) {
    setFilmsTumbler(localStorageFilmsTumbler === 'true');
   }
   // проверяет есть ли инпут в локалСтор. и если есть, вставляет его в сеттер
   if (localStorageFilmsInputSearch) {
    setFilmsInputSearch(localStorageFilmsInputSearch);
   }
  } else {
   handleGetMovies('', false).then(r => r);
  }


 }, []);

 return (
  <section className="saved-movies">
   <SearchForm
    handleGetMovies={handleGetMovies}
    filmsTumbler={filmsTumbler}
    filmsInputSearch={filmsInputSearch}
   />

   {preloader && <Preloader/>}
   {errorText && <div className="saved-movies__text-error">{errorText}</div>}
   {!preloader && !errorText && films !== null && <MoviesCardList films={films}/>}

  </section>
 );
};

export default SavedMovies;