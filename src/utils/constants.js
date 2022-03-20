const popupEditAvatarOpenBtn = document.querySelector('#edit-avatar-popup-btn');
const popupEditPrifileOpenBtn = document.querySelector('#edit-popup-btn');
const popupAddCardOpenBtn = document.querySelector('#add-popup-btn');

const popupWithImageSelector = '#view-popup'
const popupEditAvatarSelector = '#edit-avatar-popup';
const popupAddCardSelector = '#add-popup'
const popupEditProfileSelector = '#edit-popup';
const popupConfirmSelector = '#confirm-popup';
const cardTemplateSelector = '#card-template';
const nameSelector = '#profile-info-name';
const aboutSelector = '#profile-info-about';
const avatarSelector = '#profile-info-avatar';
const formSettings = {
  formSelector: 'form',
  inputSelector: 'form__input',
  buttonSubmitSelector: 'form__button',
  buttonInactiveClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};

const options = {
  url: "https://mesto.nomoreparties.co/v1/cohort-37",
  token: "7f6cc6de-c4ad-423a-8b4b-dcbd983f998a"
};

export {
  popupEditAvatarOpenBtn,
  popupEditPrifileOpenBtn,
  popupAddCardOpenBtn,
  popupEditAvatarSelector,
  popupWithImageSelector,
  popupAddCardSelector,
  cardTemplateSelector,
  formSettings,
  popupEditProfileSelector,
  popupConfirmSelector,
  nameSelector,
  aboutSelector,
  avatarSelector,
  options
}
