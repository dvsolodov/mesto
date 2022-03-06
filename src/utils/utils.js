import Card from '../components/Card.js';
import {
  profileName,
  profileAbout,
  formEditProfileInputName,
  formEditProfileInputAbout,
  formAddCardInputTitle,
  formAddCardInputLink,
} from './DOM-elements.js';

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

function closePopupByEscKey(event) {
  if (event.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

function closePopupByOverlay(event) {
  if (event.currentTarget === event.target) {
    closePopup(event.currentTarget);
  }
}

function createCard(cardData) {
  const card = new Card(cardData, '#card-template');
  return card.createCard();
}

export {
  addDataToPopupFromProfile,
  saveDataToProfileFromPopup,
  getCardDataFromAddForm,
  openPopup,
  closePopup,
  closePopupByEscKey,
  closePopupByOverlay,
  createCard
};
