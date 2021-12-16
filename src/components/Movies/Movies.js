// копмонент страницы с поиском по фильмам
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm'; // форма поиска куда вводить запрос
import MoviesCardList from '../MoviesCardList/MoviesCardList'; // управляет отрисовкой карточек

const Movies = () => {

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />

      <button className="movies__again" type="button">Ещё</button>
    </section>
  );
};

export default Movies;