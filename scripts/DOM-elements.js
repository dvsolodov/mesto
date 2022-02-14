const profileName = document.querySelector('#profile-info-name');
const profileAbout = document.querySelector('#profile-info-about');
const popupEditPrifileOpenBtn = document.querySelector('#edit-popup-btn');
const popupAddCardOpenBtn = document.querySelector('#add-popup-btn');

const popupEditProfile = document.querySelector('#edit-popup');
const formEditProfile = popupEditProfile.querySelector('form');
const formEditProfileInputName = formEditProfile.querySelector('#input-name');
const formEditProfileInputAbout = formEditProfile.querySelector('#input-about');
const popupEditProfileCloseBtn = popupEditProfile.querySelector('.popup__close-btn');

const popupAddCard = document.querySelector('#add-popup');
const formAddCard = popupAddCard.querySelector('form');
const formAddCardInputTitle = formAddCard.querySelector('#input-title');
const formAddCardInputLink = formAddCard.querySelector('#input-link');
const popupAddCardCloseBtn = popupAddCard.querySelector('.popup__close-btn');

const popupViewImage = document.querySelector('#view-popup');
const popupImg = popupViewImage.querySelector('#photo-img');
const popupCaption = popupViewImage.querySelector('#photo-caption');
const popupViewImageCloseBtn = popupViewImage.querySelector('.popup__close-btn');

const photos = document.querySelector('.photos');

export {
  profileName,
  profileAbout,
  popupEditPrifileOpenBtn,
  popupAddCardOpenBtn,
  popupEditProfile,
  formEditProfile,
  formEditProfileInputName,
  formEditProfileInputAbout,
  popupEditProfileCloseBtn,
  popupAddCard,
  formAddCard,
  formAddCardInputTitle,
  formAddCardInputLink,
  popupAddCardCloseBtn,
  popupViewImage,
  popupImg,
  popupCaption,
  popupViewImageCloseBtn,
  photos
}
