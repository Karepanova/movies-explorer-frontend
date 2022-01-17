// форма поиска куда вводить запрос
import './SearchForm.css';
import { useEffect, useState } from "react";

const SearchForm = ({ handleGetMovies, filmsTumbler, filmsInputSearch, handleGetMoviesTumbler }) => {

  const [inputSearch, setInputSearch] = useState('');
  const [tumbler, setTumbler] = useState(false);

  // меняет стейт на то, что ввели в инпуте
  function handleInputSearchChange(e) {
   setInputSearch(e.target.value);
  }

  // по нажатию на "найти" запускается ф-я
  function handleSubmit(e) {
   // Запрещаем браузеру переходить по адресу формы
   e.preventDefault();
   // передаем что введено в поле и нажат ли тумблер
   handleGetMovies(inputSearch);
  }

  // по нажатию на тумблер
  function handleTumblerChange(e) {
   const newTumbler = !tumbler;
   setTumbler(newTumbler);
   // передаем что введено в поле и нажат ли тумблер
   handleGetMoviesTumbler(newTumbler);

  }


  useEffect(() => {
   setTumbler(filmsTumbler); // то что находится в локалстор - записывается в стейт тумблер
   setInputSearch(filmsInputSearch); // то что находится в локалстор - записывается в стейт инпут

  }, [filmsTumbler, filmsInputSearch]); // при рождении и при обновлении

  return (
   <form className="search-form">
    <div className="search-form__find">
     <input
      className="search-form__input"
      placeholder="Фильм"
      required
      type="text"
      value={inputSearch || ''}
      onChange={handleInputSearchChange}
     />
     <button className="search-form__button" onClick={handleSubmit}>Найти</button>
    </div>

    <div className="search-form__toggle">
     <label className="search-form__tumbler">
      <input
       type="checkbox"
       className="search-form__checkbox"
       value={tumbler}
       checked={tumbler}
       onChange={handleTumblerChange}
      />
      <span className="search-form__slider"/>
     </label>
     <p className="search-form__short-films">Короткометражки</p>
    </div>
   </form>
  );
 }
;

export default SearchForm;
