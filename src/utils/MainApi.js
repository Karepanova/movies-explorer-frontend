class MainApi {
 constructor(config) {
  this._address = config.address;
  this._headers = config.headers;
 }

 // ПОЛЬЗОВАТЕЛЬ
 //регистрация
 registration({ name, email, password }) {
  return fetch(`${this._address}/signup`, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify({ password, email, name }),
  }).then(this._checkResponse);
 }

 //авторизация
 authorization({ email, password }) {
  return fetch(`${this._address}/signin`, {
   method: 'POST',
   headers: {
    'Content-Type': 'application/json',
   },
   body: JSON.stringify({ password, email }),
  }).then(this._checkResponse);
 }

 //проверка токена
 checkToken(token) {
  return fetch(`${this._address}/users/me`, {
   method: 'GET',
   headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
   },
  }).then(this._checkResponse);
 }

 // возвращает информацию о пользователе (email и имя) (GET)
 getUserData() {
  return fetch(`${this._address}/users/me`, {
   method: 'GET',
   headers: this._headers,
  })
   .then(this._checkResponse);
 }

 // обновляет информацию о пользователе (email и имя) (PATCH)
 updateUserData(data) {
  return fetch(`${this._address}/users/me`, {
   method: 'PATCH',
   headers: this._headers,
   body: JSON.stringify({
    name: data.name,
    email: data.email,
   }),
  })
   .then(this._checkResponse);
 }

 // ФИЛЬМЫ

 // 2. Загрузка фильмов с сервера (GET)
 getMovies() {
  return fetch(`${this._address}/movies`, {
   method: 'GET',
   headers: this._headers,
  })
   .then(this._checkResponse);
 }

 //4. Добавление в избранное (POST)
 addMovies(data) {
  return fetch(`${this._address}/movies`, {
   method: 'POST',
   headers: this._headers,
   body: JSON.stringify(data), //name и link
  })
   .then(this._checkResponse);
 }

 //7. Удаление фильма (DELETE)
 delMovies(movieId) {
  return fetch(`${this._address}/movies/${movieId}`, {
   method: 'DELETE',
   headers: this._headers,
  })
   .then(this._checkResponse);
 }


 updateToken() {
  this._headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
 }

 _checkResponse(res) {
  // тут проверка ответа
  if (res.ok) {
   return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
 }
}

const mainApi = new MainApi({
 address: 'https://api.movies-explorer.karepanova.ru',
 headers: {
  Authorization: `Bearer ${localStorage.getItem('jwt')}`,
  'Content-Type': 'application/json',
 },
});
export default mainApi;