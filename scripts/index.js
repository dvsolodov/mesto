// profile-info
const profileInfoEditBtn = document.querySelector('#profile-info-edit-btn');
const profileInfoName = document.querySelector('#profile-info-name');
const profileInfoAbout = document.querySelector('#profile-info-about');

// photos
const photoAddBtn = document.querySelector('#photo-add-btn');

// popup
const popup = document.querySelector('#popup');
const popupCloseBtn = popup.querySelector('#popup-close-btn');
const popupWrap = popup.querySelector('#popup-wrap');
const popupForm = popup.querySelector('#popup-container');

// templates
const editFormTemplate = document.querySelector('#edit-form-template').content;
const addFormTemplate = document.querySelector('#add-form-template').content;


// open editing popup
profileInfoEditBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const cloneForm = editFormTemplate.cloneNode(true);
  cloneForm.querySelector('#input-name').value = profileInfoName.textContent;
  cloneForm.querySelector('#input-about').value = profileInfoAbout.textContent;

  popupForm.prepend(cloneForm);

  togglePopup();
});

// save data to profile-info and close a popup
popupForm.addEventListener('submit', function (event) {
  event.preventDefault();

  profileInfoName.textContent = popupForm.querySelector('#input-name').value;
  profileInfoAbout.textContent = popupForm.querySelector('#input-about').value;

  clearPopupForm();
  togglePopup();
});

// open a popup to add image
photoAddBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const cloneForm = addFormTemplate.cloneNode(true);
  popupForm.prepend(cloneForm);

  togglePopup();
});

// close a popup
popupCloseBtn.addEventListener('click', function (event) {
  event.preventDefault();

  clearPopupForm();
  togglePopup();
});


function togglePopup() {
  popup.classList.toggle('popup_opened');
}

function clearPopupForm() {
  while (popupForm.firstChild) {
    popupForm.removeChild(popupForm.firstChild);
  }
}
