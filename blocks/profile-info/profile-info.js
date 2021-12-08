let editPopup = document.querySelector('#edit-popup');
let profileInfoEditBtn = document.querySelector('#profile-info-edit-btn');
let form = document.querySelector('#form');
let btnCloseForm = form.querySelector('#btn-close-form');

function openEditPopup(evt) {
  evt.preventDefault();

  let nameInput = form.querySelector('#input-name');
  let aboutInput = form.querySelector('#input-about');

  nameInput.value = document.querySelector('#profile-info-name').textContent;
  aboutInput.value = document.querySelector('#profile-info-about').textContent;

  editPopup.classList.toggle('popup_open');
}

function closeEditPopup(evt) {
  evt.preventDefault();

  editPopup.classList.toggle('popup_open');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  let nameInput = form.querySelector('#input-name').value;
  let aboutInput = form.querySelector('#input-about').value;

  let profileInfoName = document.querySelector('#profile-info-name');
  let profileInfoAbout = document.querySelector('#profile-info-about');

  profileInfoName.textContent = nameInput;
  profileInfoAbout.textContent = aboutInput;

  closeEditPopup(evt);
}

form.addEventListener('submit', formSubmitHandler);
profileInfoEditBtn.addEventListener('click', openEditPopup);
btnCloseForm.addEventListener('click', closeEditPopup);
