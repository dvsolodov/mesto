export default class Card {
  constructor({cardData, handleCardClick, handleCardDeletion}, templateSelector) {
    this._data = cardData;
    this._card = document.querySelector(templateSelector).content.cloneNode(true).querySelector('.photo');
    this._img = this._card.querySelector('.photo__img');
    this._title = this._card.querySelector('.photo__title');
    this._btnDelete = this._card.querySelector('.photo__delete-btn');
    this._btnLike = this._card.querySelector('.photo__like-btn');
    this._likesCounter = this._card.querySelector('.photo__likes-counter');
    this._handleCardClick = handleCardClick;
    this._handleCardDeletion = handleCardDeletion;
  }

  createCard() {
    if (this._data.ownerId !== this._data.myId) {
      this._btnDelete.classList.add('photo__delete-btn_invisible');
    }

    this._img.src = this._data.link;
    this._img.alt = this._title.textContent = this._data.name;
    this._setLikesCounter(this._data.likes);
    this._setEventListeners();

    return this._card;
  }

  deleteCard() {
    this._card.remove();
    this._card = null
  }

  getId() {
    return this._data.id;
  }

  _setLikesCounter(likesNumber) {
    this._likesCounter.textContent = likesNumber;
  }

  _setEventListeners() {
    this._img.addEventListener('click', () => {
      this._handleCardClick(this._data);
    });
    this._btnDelete.addEventListener('click', this._confirmDeletion.bind(this));
    this._btnLike.addEventListener('click', this._toggleLike.bind(this));
  }

  _confirmDeletion() {
    this._handleCardDeletion(this);
  }

  _toggleLike() {
    this._btnLike.classList.toggle('photo__like-btn_active');
  }
}
