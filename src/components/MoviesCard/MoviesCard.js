import './MoviesCard.css';
//import {useContext} from 'react';
//import {convertTime} from '../../utils/utils';
//import {CurrentUserContext} from '../../contexts/CurrentUserContext';

const MoviesCard = () => {

  return (
    <li className="movies-card">

      <p className="movies-card__title">название</p>

          <button type="button" className="movies-card__button movies-card__button_delete" />
          <button type="button movies-card__button movies-card__button_favorites movies-card__button_favorites-on"/>

      <p className="movies-card__duration">convertTime</p>
      <div className="movies-card__image" />
    </li>
  );
};

export default MoviesCard;