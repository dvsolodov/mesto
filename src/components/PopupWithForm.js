import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({submitCallback}, popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('form');
    this._submitCallback = submitCallback;
  }

  getDataFromForm() {
    const inputs = this._getInputValues();
    const dataObj = {};

    inputs.forEach((input) => {
      dataObj[input.name] = input.value;
    });

    return [dataObj];
  }

  setDataInForm(obj) {
    for (let key in obj) {
      const input = this._form.querySelector('#input-' + key);
      input.value = obj[key];
    }
  }

  setEventListeners() {
    this._form.addEventListener('submit', this._submitCallback);
    super.setEventListeners();
  }

  close() {
    this._form.reset();
    this._form.removeEventListener('submit', this._submitCallback);
    super.close();
  }

  getForm() {
    return this._form;
  }

  _getInputValues() {
    return Array.from(this._form.querySelectorAll('input'));
  }
}
