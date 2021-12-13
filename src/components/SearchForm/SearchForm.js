// форма поиска куда вводить запрос
import './SearchForm.css';

const SearchForm = () => {

  return (
    <form className="search-form">
     <div className="search-form__find">
      <input className="search-form__input" placeholder="Фильм" required name="movie" type="text" minLength="2" maxLength="40"/>
      <button type="submit" className="search-form__button">Найти</button>
     </div>

     <div className="search-form__toggle">
      <label className="search-form__tumbler">
       <input type="checkbox" className="search-form__checkbox"/>
       <span className="search-form__slider"/>
      </label>
      <p className="search-form__short-films">Короткометражки</p>
     </div>
    </form>
  );
};

export default SearchForm;
