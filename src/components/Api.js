export default class Api {
  constructor(options) {
    this._baseUrl = options.url;
    this._token = options.token;
    this._paramProfile = "users/me";
    this._paramCards = "cards";
    this._headers = {
      authorization: this._token,
      'Content-Type': 'application/json'
    };
  }

  getProfile() {
    return fetch(this._baseUrl + this._paramProfile, {headers: this._headers})
      .then((response) => this._checkResponse(response))
      .catch(err => console.log(err));
  }

  editProfile({name, about}) {
    return fetch(this._baseUrl + this._paramProfile, {
        method: "PATCH",
        headers: this._headers,
        body: JSON.stringify({name, about})
      })
      .then((response) => this._checkResponse(response))
      .catch(err => console.log(err));
  }

  getInitialCards() {
    return fetch(this._baseUrl + this._paramCards, {headers: this._headers})
      .then((response) => this._checkResponse(response))
      .catch(err => console.log(err));
  }

  _checkResponse(response) {
    return response.ok ? response.json() : Promise.reject(`Ошибка запроса: ${response.status}`);
  }
}
