// форма поиска куда вводить запрос
import './SearchForm.css';

const SearchForm = () => {

  return (

      <form className="search__form">
        <div className="search__block-one">
          <div className="search__icon"/>
          <input className="search__input search__input_type_error" placeholder="Фильм" required name="movie" type="text"/>
          <button type="submit" className="search__button">Найти</button>
        </div>

        <div className="search__block-two">
          <div className="search__line"/>
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
