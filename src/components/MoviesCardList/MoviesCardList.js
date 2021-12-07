// управляет отрисовкой карточек
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
// import Preloader from '../Preloader/Preloader';

const MoviesCardList = () => {

  return <div>
    <MoviesCard />
    {/*<Preloader/>
    <ul className="movies-cardlist movies-cardlist_hidden">
      return <MoviesCard />
      <li className="movies-cardlist__not-found-text">Ничего не найдено</li>
    </ul>*/}
  </div>
}

export default MoviesCardList;