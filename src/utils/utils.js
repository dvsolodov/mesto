import {
  profileName,
  profileAbout,
  formEditProfileInputName,
  formEditProfileInputAbout,
} from './constants.js';

function addDataToPopupFromProfile() {
  formEditProfileInputName.value = profileName.textContent;
  formEditProfileInputAbout.value = profileAbout.textContent;
}

function saveDataToProfileFromPopup() {
  profileName.textContent = formEditProfileInputName.value;
  profileAbout.textContent = formEditProfileInputAbout.value;
}

export {
  addDataToPopupFromProfile,
  saveDataToProfileFromPopup,
};
