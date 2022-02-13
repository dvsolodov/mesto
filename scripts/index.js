import initialCards from './cards-data.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const profileName = document.querySelector('#profile-info-name');
const profileAbout = document.querySelector('#profile-info-about');
const popupEditPrifileOpenBtn = document.querySelector('#edit-popup-btn');
const popupAddCardOpenBtn = document.querySelector('#add-popup-btn');

const popupEditProfile = document.querySelector('#edit-popup');
const formEditProfile = popupEditProfile.querySelector('form');
const formEditProfileInputName = formEditProfile.querySelector('#input-name');
const formEditProfileInputAbout = formEditProfile.querySelector('#input-about');
const popupEditProfileCloseBtn = popupEditProfile.querySelector('.popup__close-btn');

const popupAddCard = document.querySelector('#add-popup');
const formAddCard = popupAddCard.querySelector('form');
const formAddCardInputTitle = formAddCard.querySelector('#input-title');
const formAddCardInputLink = formAddCard.querySelector('#input-link');
const popupAddCardCloseBtn = popupAddCard.querySelector('.popup__close-btn');

const popupViewImage = document.querySelector('#view-popup');
const popupViewImageCloseBtn = popupViewImage.querySelector('.popup__close-btn');

const photos = document.querySelector('.photos');

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


// functions
function addDataToPopupFromProfile() {
  formEditProfileInputName.value = profileName.textContent;
  formEditProfileInputAbout.value = profileAbout.textContent;
}

function saveDataToProfileFromPopup() {
  profileName.textContent = formEditProfileInputName.value;
  profileAbout.textContent = formEditProfileInputAbout.value;
}

function getCardDataFromAddForm() {
  return {
    name: formAddCardInputTitle.value,
    link: formAddCardInputLink.value
  };
}

function openPopup(popup) {
  document.addEventListener('keydown', closePopupByEscKey);
  popup.classList.add('popup_opened');
}

function closePopup(popup) {
  document.removeEventListener('keydown', closePopupByEscKey);
  popup.classList.remove('popup_opened');
}


// handle the event when the esc key is pressed
function closePopupByEscKey() {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

// handle the event when a overlay is clicked
function closePopupByOverlay() {
  if (event.currentTarget === event.target) {
    closePopup(event.currentTarget);
  }
}

function createCard(cardData) {
  const card = new Card(cardData, '#card-template');
  return card.createCard(popupViewImage);
}
