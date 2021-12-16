class MoviesApi {
 constructor(config) {
  this._address = config.address;
  this._headers = config.headers;
 }


 //1. Загрузка информации с сервера (GET)
 getMovies() {
  return fetch(`${this._address}/beatfilm-movies`, {
   method: 'GET',
   headers: this._headers
  })
   .then(this._checkResponse)
 }


 _checkResponse(res) {
  // тут проверка ответа
  if (res.ok) {
   return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
 }

}

const moviesApi = new MoviesApi({
 address: 'https://api.nomoreparties.co',
 headers: {
  'Content-Type': 'application/json'
 }
})
export default moviesApi