// корневой компонент приложения (CRA)
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import SavedMovies from '../SavedMovies/SavedMovies';
import Profile from '../Profile/Profile';
import Login from '../Login/Login';
import Register from '../Register/Register';
import NotFound from "../NotFound/NotFound";
import MainApi from "../../utils/MainApi";
import Token from '../../utils/token';

import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'; // импортируем HOC

import { CurrentUserContext } from '../../contexts/CurrentUserContext';

import { Route, Switch, useLocation, useHistory, withRouter } from 'react-router-dom';

import { useState, useEffect } from "react";

function App() {
 const [popupText, setPopupText] = useState('');
 const [isOpenPopup, setIsOpenPopup] = useState(false);
 const [loggedIn, setLoggedIn] = useState(false); //авторизован или нет
 const [currentUser, setCurrentUser] = useState({}); // данные о пользователе
 const [isLoading, setIsLoading] = useState(true); // ожидание результата проверки авторизации (авторизова или нет)


 const history = useHistory();
 const { pathname } = useLocation();


 useEffect(() => {
  getUserData();
 }, []);



 function getUserData () {
  MainApi.getUserData()
   .then((data) => {
    setCurrentUser(data);
    setLoggedIn(true);
   })
   .catch((err) => {
    console.log(`Ошибка сервера ${err}`);
   })
   .finally(() => {
    setIsLoading(false);
   });
 }

 function handleRegister(formData) {
  MainApi.registration(formData)
   .then((res) => {
    if (res._id) {
     setPopupText('Спасибо, что зарегистрировались!');
     setIsOpenPopup(true);
     handleLogin(formData);
     // history.push('/signin'); //переход по ссылке
    }
   })
   .catch((err) => {
    setPopupText('Ошибка регистрации');
    setIsOpenPopup(true);
   });
 }

 function handleLogin(formData) {
  MainApi.authorization(formData)
   .then(({ token }) => {
    if (token) {
     Token.saveToken(token);
     MainApi.updateToken();
     setLoggedIn(true);

     getUserData();

     history.push('/movies');
    }
   })
   .catch((err) => {
    setPopupText('Ошибка авторизации');
    setIsOpenPopup(true);
   });
 }

 function openPopup(textError) {
  setPopupText(textError);
  setIsOpenPopup(true);
 }

 function closePopup() {
  setIsOpenPopup(false);
  setPopupText('');
 }

 function logout() {
  Token.removeToken();
  setLoggedIn(false);
  localStorage.removeItem('films');
  localStorage.removeItem('filmsTumbler');
  localStorage.removeItem('filmsInputSearch');

  localStorage.removeItem('savedFilms');
  localStorage.removeItem('savedFilmsTumbler');
  localStorage.removeItem('savedFilmsInputSearch');
 }

 return (
  <CurrentUserContext.Provider value={currentUser}>
   <div className="App">

    {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ?
     <Header loggedIn={loggedIn} isLoading={isLoading}/> : ''}


    <main className="App__page">
     <Switch>
      <Route exact path="/">
       <Main/>
      </Route>
      <ProtectedRoute path="/movies" loggedIn={loggedIn} component={Movies} isLoading={isLoading} openPopup={openPopup}/>
      <ProtectedRoute path="/saved-movies" loggedIn={loggedIn} component={SavedMovies} isLoading={isLoading} openPopup={openPopup}/>
      <ProtectedRoute path="/profile" loggedIn={loggedIn} component={Profile} isLoading={isLoading} logout={logout} openPopup={openPopup}/>

      <Route path="/signin">
       <Login onLogin={handleLogin}/>
      </Route>
      <Route path="/signup">
       <Register onRegister={handleRegister}/>
      </Route>

      <Route path="*">
       <NotFound/>
      </Route>
     </Switch>
    </main>

    {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ? <Footer/> : ''}

    <Popup
     text={popupText}
     isOpen={isOpenPopup}
     onClose={closePopup}
    />
   </div>
  </CurrentUserContext.Provider>
 );
}

export default withRouter(App);


