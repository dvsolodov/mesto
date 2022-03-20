export default class FormValidator {
  constructor(settingsObj, formElement) {
    this._form = formElement;
    this._inputElements = Array.from(this._form.querySelectorAll('.' + settingsObj.inputSelector));
    this._btnSubmit = this._form.querySelector('.' + settingsObj.buttonSubmitSelector);

    this._btnInactiveClass = settingsObj.buttonInactiveClass;
    this._inputErrorClass = settingsObj.inputErrorClass;
    this._errorClass = settingsObj.errorClass;
  }

  enableValidation = () => {
    this._setEventListeners();
  }

  clearErrors = () => {
    this._inputElements.forEach((inputElement) => {
      const errorElement = document.querySelector('[data-id=error-' + inputElement.dataset.id + ']');
      this._hideError(inputElement, errorElement);
    });
  }

  setSubmitBtnState = () => {
    if (this._hasInvalidInput()) {
      this._hideSubmitButton();
      return;
    }
    this.clearErrors();
    this._showSubmitButton();
  }

  _setEventListeners = () => {
    this._inputElements.forEach((inputElement) => {
      const errorElement = this._form.querySelector('[data-id=error-' + inputElement.dataset.id + ']');
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement, errorElement);
        this.setSubmitBtnState();
      });
    });
  }

  _isValid = (inputElement, errorElement) => {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, errorElement);
    } else {
      this._hideError(inputElement, errorElement);
    }
  }

  _showError = (inputElement, errorElement) => {
    inputElement.classList.add(this._inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._errorClass);
  }

  _hideError = (inputElement, errorElement) => {
    inputElement.classList.remove(this._inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(this._errorClass);
  }

  _showSubmitButton = () => {
    this._btnSubmit.classList.remove(this._btnInactiveClass);
    this._btnSubmit.disabled = false;
  }

  _hideSubmitButton = () => {
    this._btnSubmit.classList.add(this._btnInactiveClass);
    this._btnSubmit.disabled = true;
  }

  _hasInvalidInput = () => {
    return this._inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
}
