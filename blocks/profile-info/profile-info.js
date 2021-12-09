let profileInfoEditBtn = document.querySelector('#profile-info-edit-btn');
let editPopup = document.querySelector('#edit-popup');
let form = document.querySelector('#form');
let btnCloseForm = form.querySelector('#btn-close-form');
let nameInput = form.querySelector('#input-name');
let aboutInput = form.querySelector('#input-about');
let profileInfoName = document.querySelector('#profile-info-name');
let profileInfoAbout = document.querySelector('#profile-info-about');

function openEditPopup(evt) {
  evt.preventDefault();

  nameInput.value = profileInfoName.textContent;
  aboutInput.value = profileInfoAbout.textContent;

  editPopup.classList.toggle('popup_open');
}

function closeEditPopup(evt) {
  evt.preventDefault();

  editPopup.classList.toggle('popup_open');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  profileInfoName.textContent = nameInput.value;
  profileInfoAbout.textContent = aboutInput.value;

  closeEditPopup(evt);
}

form.addEventListener('submit', formSubmitHandler);
profileInfoEditBtn.addEventListener('click', openEditPopup);
btnCloseForm.addEventListener('click', closeEditPopup);
