import React from 'react';
import './Profile.css';
import {Link} from 'react-router-dom';

const Profile = () => {

  return (
    <section className="profile">
      <form className="profile__form">
        <h3 className="profile__greeting">Привет, кто-то !</h3>
        <div className="profile__inputs">
          <p className="profile__text">Имя</p>
          <div className="profile__area profile__area_type_name profile__settings">
            Анастасия
          </div>
          <div className="profile__area profile__area_type_email profile__settings">
            pochta@pochta.ru
          </div>
          <p className="profile__text">Почта</p>
        </div>

        <Link to="/profile" className="profile__button">Редактировать</Link>
        <Link to="/profile" className="profile__link">Выйти из аккаунта</Link>
      </form>
    </section>
  );
};

export default Profile;