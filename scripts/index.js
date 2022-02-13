import initialCards from './cards-data.js';
import Card from './Card.js';
import FormValidator from './FormValidator.js';

const profileName = document.querySelector('#profile-info-name');
const profileAbout = document.querySelector('#profile-info-about');
const profilePopupOpenBtn = document.querySelector('#edit-popup-btn');
const addCardPopupOpenBtn = document.querySelector('#add-popup-btn');

const profilePopup = document.querySelector('#edit-popup');
const editForm = profilePopup.querySelector('form');
const editInputName = editForm.querySelector('#input-name');
const editInputAbout = editForm.querySelector('#input-about');
const profilePopupCloseBtn = profilePopup.querySelector('.popup__close-btn');

const addCardPopup = document.querySelector('#add-popup');
const addForm = addCardPopup.querySelector('form');
const addInputTitle = addForm.querySelector('#input-title');
const addInputLink = addForm.querySelector('#input-link');
const addCardPopupCloseBtn = addCardPopup.querySelector('.popup__close-btn');

const imagePopup = document.querySelector('#view-popup');
const imagePopupCloseBtn = imagePopup.querySelector('.popup__close-btn');

const photos = document.querySelector('.photos');

const formSettings = {
  formSelector: 'form',
  inputSelector: 'form__input',
  submitButtonSelector: 'form__button',
  inactiveButtonClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};

const profileFormValidator = new FormValidator(formSettings, editForm);
const addCardFormValidator = new FormValidator(formSettings, addForm);

profileFormValidator.enableValidation();
addCardFormValidator.enableValidation();

// initial cards rendering
initialCards.forEach((cardData) => {
  photos.prepend(createCard(cardData));
});


// open profile popup
profilePopupOpenBtn.addEventListener('click', function (event) {
  addDataToPopupFromProfile();
  profileFormValidator.setSubmitBtnState();
  profileFormValidator.clearErrors();
  openPopup(profilePopup);
});
// save data and close profile popup
editForm.addEventListener('submit', function (event) {
  event.preventDefault();
  saveDataToProfileFromPopup();
  closePopup(profilePopup);
});
// close profile popup by close button
profilePopupCloseBtn.addEventListener('click', function (event) {
  closePopup(profilePopup);
});
// close profile popup by overlay
profilePopup.addEventListener('click', closePopupByOverlay);


// open add card popup
addCardPopupOpenBtn.addEventListener('click', function (event) {
  addCardFormValidator.setSubmitBtnState();
  openPopup(addCardPopup);
});
// add card and close add card popup
addForm.addEventListener('submit', function (event) {
  event.preventDefault();
  photos.prepend(createCard(getCardDataFromAddForm()));
  addForm.reset();
  closePopup(addCardPopup);
});
// close add card popup
addCardPopupCloseBtn.addEventListener('click', function (event) {
  closePopup(addCardPopup);
});
// close add card popup by overlay
addCardPopup.addEventListener('click', closePopupByOverlay);


// close image popup
imagePopupCloseBtn.addEventListener('click', function (event) {
  closePopup(imagePopup);
});
// close image popup by overlay
imagePopup.addEventListener('click', closePopupByOverlay);


// functions
function addDataToPopupFromProfile() {
  editInputName.value = profileName.textContent;
  editInputAbout.value = profileAbout.textContent;
}

function saveDataToProfileFromPopup() {
  profileName.textContent = editInputName.value;
  profileAbout.textContent = editInputAbout.value;
}

function getCardDataFromAddForm() {
  return {
    name: addInputTitle.value,
    link: addInputLink.value
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
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
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
  return card.createCard(imagePopup);
}
