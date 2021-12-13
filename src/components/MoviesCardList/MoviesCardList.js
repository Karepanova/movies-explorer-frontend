// управляет отрисовкой карточек
import MoviesCard from "../MoviesCard/MoviesCard";
import './MoviesCardList.css';
import Preloader from '../Preloader/Preloader';

const MoviesCardList = () => {

  return <div className="moviesCardList">
    <MoviesCard />
    <MoviesCard />
    <MoviesCard />
    <MoviesCard />
    <MoviesCard />
    <MoviesCard />
    <MoviesCard />
    <MoviesCard />
    <MoviesCard />
    <MoviesCard />
    <MoviesCard />
    <MoviesCard />
    {/*<Preloader/>*/}

  </div>
}

export default MoviesCardList;