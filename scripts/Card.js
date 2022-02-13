export default class Card {
  constructor(cardData, templateSelector) {
    this._data = cardData;
    this._card = document.querySelector(templateSelector).content.cloneNode(true);
    this._img = this._card.querySelector('.photo__img');
    this._title = this._card.querySelector('.photo__title');
    this._deleteBtn = this._card.querySelector('.photo__delete-btn');
    this._likeBtn = this._card.querySelector('.photo__like-btn');
  }

  createCard = (popupSelector) => {
    this._popupSelector = popupSelector;
    this._img.src = this._data.link;
    this._img.alt = this._title.textContent = this._data.name;

    this._addEventListeners(this._img, 'click', this._openPopup);
    this._addEventListeners(this._deleteBtn, 'click', this._deleteCard);
    this._addEventListeners(this._likeBtn, 'click', this._toggleLike);

    return this._card;
  }

  _addEventListeners(element, event, callBack) {
    element.addEventListener(event, callBack);
  }

  _openPopup = () => {
    this._popup = document.querySelector(this._popupSelector);
    this._popupImg = this._popup.querySelector('#photo-img');
    this._popupCaption = this._popup.querySelector('#photo-caption');
    this._popupImg.src = this._img.src;
    this._popupImg.alt = this._popupCaption.textContent = this._img.alt;
    this._addEventListeners(document, 'keydown', this._closePopup);
    this._popup.classList.add('popup_opened');
  }

  _closePopup = () => {
      if (event.key === 'Escape') {
        const openedPopup = document.querySelector('.popup_opened');
        this._popup.classList.remove('popup_opened');
      }
  }

  _deleteCard = () => {
    this._img.closest('.photo').remove();
  }

  _toggleLike = () => {
    this._likeBtn.classList.toggle('photo__like-btn_active');
  }

}
