// форма поиска куда вводить запрос
import './SearchForm.css';

const SearchForm = () => {

  return (
    <form className="search__form">
     <div className="search__block-one">
      <input className="search__input" placeholder="Фильм" required name="movie" type="text"/>
      <button type="submit" className="search__button">Найти</button>
     </div>

     <div className="search__block-two">
      <label className="search__tumbler">
       <input type="checkbox" name="shortFilmCheckbox" className="search__checkbox"/>
       <span className="search__slider"/>
      </label>
      <p className="search__label-text">Короткометражки</p>
     </div>
    </form>
  );
};

export default SearchForm;
