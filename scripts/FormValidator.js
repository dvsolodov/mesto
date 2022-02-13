export default class FormValidator {
  constructor(settingsObj, formElement) {
    this.settings = settingsObj;
    this.form = formElement;
  }

  enableValidation = () => {
    this._setEventListeners(this.form, this.settings);
  }

  clearErrors = (inputElementsArray, inputErrorClass, errorClass) => {
    inputElementsArray.forEach((inputElement) => {
      const errorElement = document.querySelector('#error-' + inputElement.id);
      this._hideError(inputElement, errorElement, inputErrorClass, errorClass);
    });
  }

  setSubmitBtnState = (inputElements, submitBtn, inactiveButtonClass) => {
    if (this._hasInvalidInput(inputElements)) {
      this._hideSubmitButton(submitBtn, inactiveButtonClass);
      return;
    }
    this._showSubmitButton(submitBtn, inactiveButtonClass);
  }

  _setEventListeners = (formElement, obj) => {
    const inputElements = Array.from(formElement.querySelectorAll('.' + obj.inputSelector));
    const submitBtn = formElement.querySelector('.' + obj.submitButtonSelector);
    inputElements.forEach((inputElement) => {
      const errorElement = formElement.querySelector('#error-' + inputElement.id);
      inputElement.addEventListener('input', () => {
        this._isValid(inputElement, errorElement, obj);
        this.setSubmitBtnState(inputElements, submitBtn, obj.inactiveButtonClass);
      });
    });
  }

  _isValid = (inputElement, errorElement, obj) => {
    if (!inputElement.validity.valid) {
      this._showError(inputElement, errorElement, inputElement.validationMessage, obj.inputErrorClass, obj.errorClass);
    } else {
      this._hideError(inputElement, errorElement, obj.inputErrorClass, obj.errorClass);
    }
  }

  _showError = (inputElement, errorElement, errorMessage, inputErrorClass, errorClass) => {
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage;
    errorElement.classList.add(errorClass);
  }

  _hideError = (inputElement, errorElement, inputErrorClass, errorClass) => {
    inputElement.classList.remove(inputErrorClass);
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass);
  }

  _showSubmitButton = (submitBtn, inactiveButtonClass) => {
    submitBtn.classList.remove(inactiveButtonClass);
    submitBtn.disabled = false;
  }

  _hideSubmitButton =(submitBtn, inactiveButtonClass) => {
    submitBtn.classList.add(inactiveButtonClass);
    submitBtn.disabled = true;
  }

  _hasInvalidInput =(inputElements) => {
    return inputElements.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
}
