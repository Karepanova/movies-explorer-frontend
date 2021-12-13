import './MoviesCard.css';
//import {useContext} from 'react';
//import {convertTime} from '../../utils/utils';
//import {CurrentUserContext} from '../../contexts/CurrentUserContext';

const MoviesCard = () => {

  return (
    <div className="movies-card">
      <div className="movies-card__image"/>
      <div className="movies-card__element">
        <div className="movies-card__text">
          <p className="movies-card__title">33 слова о дизайне</p>
          <p className="movies-card__time">1ч42м</p>
        </div>
        <div className="movies-card__buttons">
          <button type="button" className="movies-card__button movies-card__button_delete"/>
          <button type="button" className="movies-card__button movies-card__button_active movies-card__button_inactive"/>
        </div>
      </div>
    </div>
  );
};

export default MoviesCard;