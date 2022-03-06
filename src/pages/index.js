import {
  addDataToPopupFromProfile,
  saveDataToProfileFromPopup,
  getCardDataFromAddForm,
  openPopup,
  closePopup,
  closePopupByOverlay,
  createCard
} from '../scripts/functions.js';
import {
  popupEditPrifileOpenBtn,
  popupAddCardOpenBtn,
  popupEditProfile,
  formEditProfile,
  popupEditProfileCloseBtn,
  popupAddCard,
  formAddCard,
  popupAddCardCloseBtn,
  popupViewImage,
  popupViewImageCloseBtn,
  photos
} from '../scripts/DOM-elements.js';
import initialCards from '../scripts/cards-data.js';
import FormValidator from '../scripts/FormValidator.js';


const formSettings = {
  formSelector: 'form',
  inputSelector: 'form__input',
  buttonSubmitSelector: 'form__button',
  buttonInactiveClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};

const formEditProfileValidator = new FormValidator(formSettings, formEditProfile);
const formAddCardValidator = new FormValidator(formSettings, formAddCard);

formEditProfileValidator.enableValidation();
formAddCardValidator.enableValidation();

// initial cards rendering
initialCards.forEach((cardData) => {
  photos.prepend(createCard(cardData));
});


// open profile popup
popupEditPrifileOpenBtn.addEventListener('click', function (event) {
  addDataToPopupFromProfile();
  formEditProfileValidator.setSubmitBtnState();
  formEditProfileValidator.clearErrors();
  openPopup(popupEditProfile);
});
// save data and close profile popup
formEditProfile.addEventListener('submit', function (event) {
  event.preventDefault();
  saveDataToProfileFromPopup();
  closePopup(popupEditProfile);
});
// close profile popup by close button
popupEditProfileCloseBtn.addEventListener('click', function (event) {
  closePopup(popupEditProfile);
});
// close profile popup by overlay
popupEditProfile.addEventListener('click', closePopupByOverlay);


// open add card popup
popupAddCardOpenBtn.addEventListener('click', function (event) {
  formAddCardValidator.setSubmitBtnState();
  openPopup(popupAddCard);
});
// add card and close add card popup
formAddCard.addEventListener('submit', function (event) {
  event.preventDefault();
  photos.prepend(createCard(getCardDataFromAddForm()));
  formAddCard.reset();
  closePopup(popupAddCard);
});
// close add card popup
popupAddCardCloseBtn.addEventListener('click', function (event) {
  closePopup(popupAddCard);
});
// close add card popup by overlay
popupAddCard.addEventListener('click', closePopupByOverlay);


// close image popup
popupViewImageCloseBtn.addEventListener('click', function (event) {
  closePopup(popupViewImage);
});
// close image popup by overlay
popupViewImage.addEventListener('click', closePopupByOverlay);

