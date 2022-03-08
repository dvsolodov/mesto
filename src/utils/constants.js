const popupEditPrifileOpenBtn = document.querySelector('#edit-popup-btn');
const popupAddCardOpenBtn = document.querySelector('#add-popup-btn');

const popupWithImageSelector = '#view-popup'
const popupAddCardSelector = '#add-popup'
const popupEditProfileSelector = '#edit-popup'
const cardTemplateSelector = '#card-template';
const formSettings = {
  formSelector: 'form',
  inputSelector: 'form__input',
  buttonSubmitSelector: 'form__button',
  buttonInactiveClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};


export {
  popupEditPrifileOpenBtn,
  popupAddCardOpenBtn,
  popupWithImageSelector,
  popupAddCardSelector,
  cardTemplateSelector,
  formSettings,
  popupEditProfileSelector
}
