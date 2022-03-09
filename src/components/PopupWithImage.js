import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector('#photo-img');
    this._caption = this._popup.querySelector('#photo-caption');
  }

  open(imgData) {
    this._image.src = imgData.link;
    this._image.alt = this._caption.textContent = imgData.name;
    super.open();
  }
}
