const initialCards = [
  {
    name: 'Архыз',
    link: 'images/photos/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'images/photos/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'images/photos/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'images/photos/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'images/photos/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'images/photos/baikal.jpg'
  }
];

// profile-info
const profileInfoEditBtn = document.querySelector('#profile-info-edit-btn');
const profileInfoName = document.querySelector('#profile-info-name');
const profileInfoAbout = document.querySelector('#profile-info-about');

// photos
const photoAddBtn = document.querySelector('#photo-add-btn');
let photos = document.querySelector('#photos');

// popup
const popup = document.querySelector('#popup');
const popupCloseBtn = popup.querySelector('#popup-close-btn');
const popupWrap = popup.querySelector('#popup-wrap');
const popupForm = popup.querySelector('#popup-container');

// templates
const editFormTemplate = document.querySelector('#edit-form-template').content;
const addFormTemplate = document.querySelector('#add-form-template').content;
const cardTemplate = document.querySelector('#card-template').content;


// photos rendering
initialCards.forEach(card => {
  const cloneCard = cardTemplate.cloneNode(true);
  const photoTitle = cloneCard.querySelector('#photo-title');
  const photoImg = cloneCard.querySelector('#photo-img');

  photoTitle.textContent = card.name;
  photoImg.alt = card.name;
  photoImg.src = card.link;

  photos.append(cloneCard);
})

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
