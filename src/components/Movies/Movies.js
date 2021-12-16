// копмонент страницы с поиском по фильмам
import './Movies.css';
import SearchForm from '../SearchForm/SearchForm'; // форма поиска куда вводить запрос
import MoviesCardList from '../MoviesCardList/MoviesCardList'; // управляет отрисовкой карточек

const Movies = () => {

  return (
    <section className="movies">
      <SearchForm />
      <MoviesCardList />
    </section>
  );
};

export default Movies;