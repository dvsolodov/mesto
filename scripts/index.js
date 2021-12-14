let profileInfoEditBtn = document.querySelector('#profile-info-edit-btn');
let editPopup = document.querySelector('#edit-popup');
let popupContainer = document.querySelector('#popup-container');
let btnClosePopup = document.querySelector('#btn-close-popup');
let nameInput = popupContainer.querySelector('#input-name');
let aboutInput = popupContainer.querySelector('#input-about');
let profileInfoName = document.querySelector('#profile-info-name');
let profileInfoAbout = document.querySelector('#profile-info-about');

// open popup to edit profile information
function openEditPopup(evt) {
  evt.preventDefault();

  nameInput.value = profileInfoName.textContent;
  aboutInput.value = profileInfoAbout.textContent;

  editPopup.classList.toggle('popup_opened');
}

// close popup to edit profile information
function closeEditPopup(evt) {
  evt.preventDefault();

  editPopup.classList.toggle('popup_opened');
}

// save profile information after edition
function formSubmitHandler(evt) {
  evt.preventDefault();

  profileInfoName.textContent = nameInput.value;
  profileInfoAbout.textContent = aboutInput.value;

  closeEditPopup(evt);
}

profileInfoEditBtn.addEventListener('click', openEditPopup);
popupContainer.addEventListener('submit', formSubmitHandler);
btnClosePopup.addEventListener('click', closeEditPopup);
