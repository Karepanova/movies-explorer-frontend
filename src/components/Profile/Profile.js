import React from 'react';
import './Profile.css';
import {Link} from 'react-router-dom';

const Profile = () => {

  return (
    <section className="profile">
      <form className="profile__form">
        <h3 className="profile__greeting">Привет, кто-то !</h3>
        <div className="profile__inputs">
          <p className="profile__text profile__text_type_name">Имя</p>
          <div className="profile__area profile__area_type_name">
            <input className="profile__input profile__input_type_name" placeholder="Имя" required/>
          </div>
          <div className="profile__area profile__area_type_email">
            <input className="profile__input profile__input_type_email" type="email" placeholder="Почта" required/>
          </div>
          <p className="profile__text profile__text_type_email">Почта</p>
        </div>

        <Link to="/profile" className="profile__button">Редактировать</Link>
        <Link to="/profile" className="profile__link">Выйти из аккаунта</Link>
      </form>
    </section>
  );
};

export default Profile;