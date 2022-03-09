export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popupCloseIcon = this._popup.querySelector('.popup__close-btn');
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  open() {
    document.addEventListener('keydown', this._handleEscClose);
    this._popup.classList.add('popup_opened');
  }

  close() {
    document.removeEventListener('keydown', this._handleEscClose);
    this._popup.classList.remove('popup_opened');
  }

  _handleEscClose(event) {
    if (event.key === 'Escape') {
      this.close();
    }
  }

  _closeByOverlay(event) {
    if (event.currentTarget === event.target) {
      this.close();
    }
  }

  setEventListeners() {
    this._popupCloseIcon.addEventListener('click', this.close.bind(this));
    this._popup.addEventListener('click', this._closeByOverlay.bind(this));
  }
}
