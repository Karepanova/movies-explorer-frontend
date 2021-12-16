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

import Footer from '../Footer/Footer';
import Popup from '../Popup/Popup';

import { useLocation } from 'react-router-dom';


import {Route, Switch} from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">

      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' || pathname === '/profile' ?  <Header/> : ''}


      <main className="App__page">
        <Switch>
          <Route exact path="/">
            <Main/>
          </Route>
          <Route exact path="/movies-explorer-frontend">
            <Main/>
          </Route>
          <Route path="/movies">
            <Movies/>
          </Route>
          <Route exact path="/saved-movies">
            <SavedMovies/>
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/signin">
            <Login />
          </Route>
          <Route exact path="/signup">
            <Register />
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
      </main>

      {pathname === '/' || pathname === '/movies' || pathname === '/saved-movies' ?  <Footer/> : ''}
      {/*
      <Popup/>*/}
    </div>


  );
}

export default App;


