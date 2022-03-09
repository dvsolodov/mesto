export default class Card {
  constructor({cardData, handleCardClick}, templateSelector) {
    this._data = cardData;
    this._card = document.querySelector(templateSelector).content.cloneNode(true).querySelector('.photo');
    this._img = this._card.querySelector('.photo__img');
    this._title = this._card.querySelector('.photo__title');
    this._btnDelete = this._card.querySelector('.photo__delete-btn');
    this._btnLike = this._card.querySelector('.photo__like-btn');
    this._handleCardClick = handleCardClick;
  }

  createCard() {
    this._img.src = this._data.link;
    this._img.alt = this._title.textContent = this._data.name;
    this._setEventListeners();

    return this._card;
  }

  _setEventListeners() {
    this._img.addEventListener('click', () => {
      this._handleCardClick(this._data);
    });
    this._btnDelete.addEventListener('click', this._deleteCard.bind(this));
    this._btnLike.addEventListener('click', this._toggleLike.bind(this));
  }

  _deleteCard() {
    this._card.remove();
    this._card = null
  }

  _toggleLike() {
    this._btnLike.classList.toggle('photo__like-btn_active');
  }
}
