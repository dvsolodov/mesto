import PopupWithForm from './PopupWithForm.js';

export default class PopupWithConfirmation extends PopupWithForm {
  constructor({submitCallback}, popupSelector) {
    super({submitCallback}, popupSelector);
    this.card = {};
  }
}
