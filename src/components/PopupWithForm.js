import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({submitCallback}, popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('form');
    this._submitCallback = submitCallback.bind(this);
    this._inputs = Array.from(this._form.querySelectorAll('input'));
  }

  _getInputValues() {
    const dataObj = {};

    this._inputs.forEach((input) => {
      dataObj[input.name] = input.value;
    });

    return dataObj;
  }

  setDataInForm(obj) {
    for (let key in obj) {
      const input = this._form.querySelector('[data-id=input-' + key + ']');

      if (input !== null) {
        input.value = obj[key];
      }
    }
  }

  setEventListeners() {
    this._form.addEventListener('submit', (event) => {
      event.preventDefault();
      this._submitCallback(this._getInputValues());
    });
    super.setEventListeners();
  }

  close() {
    super.close();
    this._form.reset();
  }

  getForm() {
    return this._form;
  }
}
