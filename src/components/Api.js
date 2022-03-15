export default class Api {
  constructor(options) {
    this._baseUrl = options.url;
    this._token = options.token;
    this._paramCards = "cards";
    this._headers = {
      authorization: this._token,
      'Content-Type': 'application/json'
    };
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}${this._paramCards}`, {headers: this._headers})
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          return Promise.reject(`Ошибка получения ответа от сервера: ${response.status}`);
        }
      })
      .catch(err => console.log(err));
  }
}
