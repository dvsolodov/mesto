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
const popupContainer = popup.querySelector('#popup-container');

// templates
const editFormTemplate = document.querySelector('#edit-form-template').content;
const addFormTemplate = document.querySelector('#add-form-template').content;
const cardTemplate = document.querySelector('#card-template').content;
const photoTemplate = document.querySelector('#view-img-template').content;


// initial photos rendering
renderPhotos(initialCards);

// open editing popup
profileInfoEditBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const cloneForm = editFormTemplate.cloneNode(true);

  cloneForm.querySelector('#input-name').value = profileInfoName.textContent;
  cloneForm.querySelector('#input-about').value = profileInfoAbout.textContent;

  popupContainer.prepend(cloneForm);

  togglePopup();
});

// save data and close a popup
popupContainer.addEventListener('submit', function (event) {
  event.preventDefault();

  const popupForm = popupContainer.querySelector('.form');

  if (popupForm.getAttribute('name') === "edit-form") {
    profileInfoName.textContent = popupForm.querySelector('#input-name').value;
    profileInfoAbout.textContent = popupForm.querySelector('#input-about').value;
  }

  if (popupForm.getAttribute('name') === "add-form") {
    const newPhoto = cardTemplate.cloneNode(true);
    newPhoto.querySelector('#photo-title').textContent = popupForm.querySelector('#img-title-input').value;
    newPhoto.querySelector('#photo-img').src = popupForm.querySelector('#img-link-input').value;
    newPhoto.querySelector('#photo-img').alt = popupForm.querySelector('#img-title-input').value;
    photos.prepend(newPhoto);
  }

  clearPopup();
  togglePopup();
});

// open a popup to add photo
photoAddBtn.addEventListener('click', function (event) {
  event.preventDefault();

  const cloneForm = addFormTemplate.cloneNode(true);
  popupContainer.prepend(cloneForm);

  togglePopup();
});

// close a popup
popupCloseBtn.addEventListener('click', function (event) {
  event.preventDefault();

  clearPopup();
  togglePopup();
});

// handel photos events
photos.addEventListener('click', function (event) {
  event.preventDefault();

  const targetElem = event.target;

  if (targetElem.id === "photo-delete-btn") {
    targetElem.closest(".photo").remove();
  }

  if (targetElem.id === "photo-like-btn") {
    targetElem.classList.toggle('photo__like-btn_active');
  }

  if (targetElem.id === "photo-img") {
    const clonePhoto = photoTemplate.cloneNode(true);
    const clonePhotoImg = clonePhoto.querySelector('img');
    const clonePhotoCaption = clonePhoto.querySelector('figcaption');
    clonePhotoImg.src = targetElem.src;
    clonePhotoImg.alt = targetElem.alt;
    clonePhotoCaption.textContent = targetElem.alt;
    popup.classList.add('popup_opacity-darker');
    popupContainer.prepend(clonePhoto);

    togglePopup();
  }
});


function togglePopup() {
  popup.classList.toggle('popup_opened');
}

function clearPopup() {
  setTimeout(() => {
    popupContainer.childNodes[1].remove();
    popup.classList.remove('popup_opacity-darker');
  }, 300);
}

function renderPhotos(photoArray) {
  photoArray.forEach((card, index) => {
    const cloneCard = cardTemplate.cloneNode(true);
    const photoTitle = cloneCard.querySelector('#photo-title');
    const photoImg = cloneCard.querySelector('#photo-img');
    const photoDeleteBtn = cloneCard.querySelector('#photo-delete-btn');

    photoTitle.textContent = card.name;
    photoImg.alt = card.name;
    photoImg.src = card.link;
    photoDeleteBtn.dataset.id = index;

    photos.prepend(cloneCard);
  })
}
