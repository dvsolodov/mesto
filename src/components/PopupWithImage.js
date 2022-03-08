import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('#photo-img');
    this._caption = this._popup.querySelector('#photo-caption');
  }

  open(img) {
    this._image.src = img.src;
    this._image.alt = this._caption.textContent = img.alt;
    this.setEventListeners();
    this._popup.classList.add('popup_opened');
  }
}
