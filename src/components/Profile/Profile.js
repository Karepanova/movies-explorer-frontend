import { useState, useEffect, useContext } from 'react';
import './Profile.css';
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import mainApi from "../../utils/MainApi";

const Profile = ({ logout, openPopup }) => {
 const currentUser = useContext(CurrentUserContext);
 const [name, setName] = useState(currentUser.name);
 const [email, setEmail] = useState(currentUser.email);
 const [activeButton, setActiveButton] = useState(false);

 const handleSubmit = (e) => {
  e.preventDefault();
  mainApi.updateUserData({ name, email })
   .then(() => {
     setActiveButton(false);
     openPopup('Данные изменены');
    },
   )
   .catch((err) => {
    openPopup(`Ошибка сервера ${err}`);
   });
 };

 function handleNameChange(e) {
  setName(e.target.value);
  setActiveButton(true);
 }

 function handleEmailChange(e) {
  setEmail(e.target.value);
  setActiveButton(true);
 }

 return (
  <section className="profile">
   <form className="profile__form" onSubmit={handleSubmit}>
    <h3 className="profile__greeting">Привет, {name}!</h3>
    <div className="profile__inputs">
     <p className="profile__text">Имя</p>
     <div className="profile__area profile__area_type_name">
      <input className="profile__settings" value={name} onChange={handleNameChange}/>
     </div>
     <div className="profile__area profile__area_type_email">
      <input className="profile__settings" value={email} onChange={handleEmailChange}/>
     </div>
     <p className="profile__text">Почта</p>
    </div>

    <button disabled={!activeButton} className="profile__button">Редактировать</button>
    <button type="button" className="profile__link" onClick={logout}>Выйти из аккаунта</button>
   </form>
  </section>
 );
};

export default Profile;