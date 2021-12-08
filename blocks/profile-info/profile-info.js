let editPopup = document.querySelector('#edit-popup');
let profileInfoEditBtn = document.querySelector('#profile-info-edit-btn');
let form = document.querySelector('#form');
let btnCloseForm = form.querySelector('#btn-close-form');

function openEditPopup(evt) {
  evt.preventDefault();

  editPopup.classList.toggle('popup_open');
}

function closeEditPopup(evt) {
  evt.preventDefault();

  editPopup.classList.toggle('popup_open');
}

function formSubmitHandler(evt) {
  evt.preventDefault();

  // Получите значение полей jobInput и nameInput из свойства value
  let nameInput = form.querySelector('#input-name').value;
  let aboutInput = form.querySelector('#input-about').value;

  // Выберите элементы, куда должны быть вставлены значения полей
  let profileInfoName = document.querySelector('#profile-info-name');
  let profileInfoAbout = document.querySelector('#profile-info-about');

  // Вставьте новые значения с помощью textContent
  profileInfoName.textContent = nameInput;
  profileInfoAbout.textContent = aboutInput;

  closeEditPopup(evt);
}

form.addEventListener('submit', formSubmitHandler);
profileInfoEditBtn.addEventListener('click', openEditPopup);
btnCloseForm.addEventListener('click', closeEditPopup);
