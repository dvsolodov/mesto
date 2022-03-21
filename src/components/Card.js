export default class Card {
  constructor({cardData, handleCardClick, handleCardDeletion, handleLike}, templateSelector) {
    this._data = cardData;
    this._card = document.querySelector(templateSelector).content.cloneNode(true).querySelector('.photo');
    this._img = this._card.querySelector('.photo__img');
    this._title = this._card.querySelector('.photo__title');
    this._btnDelete = this._card.querySelector('.photo__delete-btn');
    this._btnLike = this._card.querySelector('.photo__like-btn');
    this._likesCounter = this._card.querySelector('.photo__likes-counter');
    this._handleCardClick = handleCardClick;
    this._handleCardDeletion = handleCardDeletion;
    this._handleLike = handleLike;
  }

  isLiked() {
    if (this._btnLike.classList.contains('photo__like-btn_active')) {
      return true;
    } else {
      return false;
    }
  }

  createCard() {
    if (this._data.ownerId !== this._data.myId) {
      this._btnDelete.classList.add('photo__delete-btn_invisible');
    }

    this._img.src = this._data.link;
    this._img.alt = this._title.textContent = this._data.name;
    this.setLikesCounter(this._data.likes);
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

  setLikesCounter(likes) {
    let iLikeIt = false;

    for (let i = 0; i < likes.length; i++) {
      if (likes[i]['_id'] === this._data.myId) {
        this._btnLike.classList.add('photo__like-btn_active');
        iLikeIt = true;
        break;
      }
    }

    if (!iLikeIt) {
      this._btnLike.classList.remove('photo__like-btn_active');
    }

    this._likesCounter.textContent = likes.length;
  }

  _setEventListeners() {
    this._img.addEventListener('click', () => {
      this._handleCardClick(this._data);
    });
    this._btnDelete.addEventListener('click', this._confirmDeletion.bind(this));
    this._btnLike.addEventListener('click', this._toggleLike.bind(this));
  }

  _toggleLike() {
    this._handleLike(this);
  }

  _confirmDeletion() {
    this._handleCardDeletion(this);
  }
}
