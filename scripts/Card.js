import {popupViewImage, popupImg, popupCaption} from './DOM-elements.js';
import {closePopupByEscKey, openPopup} from './functions.js';

export default class Card {
  constructor(cardData, templateSelector) {
    this._data = cardData;
    this._card = document.querySelector(templateSelector).content.cloneNode(true);
    this._img = this._card.querySelector('.photo__img');
    this._title = this._card.querySelector('.photo__title');
    this._btnDelete = this._card.querySelector('.photo__delete-btn');
    this._btnLike = this._card.querySelector('.photo__like-btn');
  }

  createCard = () => {
    this._img.src = this._data.link;
    this._img.alt = this._title.textContent = this._data.name;

    this._setEventListeners(this._img, 'click', this._openPopup);
    this._setEventListeners(this._btnDelete, 'click', this._deleteCard);
    this._setEventListeners(this._btnLike, 'click', this._toggleLike);

    return this._card;
  }

  _setEventListeners(element, event, callBack) {
    element.addEventListener(event, callBack);
  }

  _openPopup = () => {
    popupImg.src = this._img.src;
    popupImg.alt = popupCaption.textContent = this._img.alt;
    this._setEventListeners(document, 'keydown', closePopupByEscKey);
    openPopup(popupViewImage);
  }

  _deleteCard = () => {
    this._img.closest('.photo').remove();
  }

  _toggleLike = () => {
    this._btnLike.classList.toggle('photo__like-btn_active');
  }

}
