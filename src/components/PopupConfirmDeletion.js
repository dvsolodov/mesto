import PopupWithForm from './PopupWithForm.js';

export default class PopupConfirmDeletion extends PopupWithForm {
  constructor({submitCallback}, popupSelector) {
    super({submitCallback}, popupSelector);
    this.card = {};
  }
}
