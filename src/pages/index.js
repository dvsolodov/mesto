import './index.css';
import {
  popupEditPrifileOpenBtn,
  popupAddCardOpenBtn,
  popupWithImageSelector,
  popupAddCardSelector,
  popupEditProfileSelector,
  cardTemplateSelector,
  formSettings
} from '../utils/constants.js';
import initialCards from '../utils/cards-data.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

const createCardElement = (cardData) => {
  const card = new Card({
      cardData: cardData,
      handleCardClick: (imgData) => {
        popupWithImage.open(imgData);
      }
    },
    cardTemplateSelector
  );

  return card.createCard();
}

const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
      cardsList.addItem(createCardElement(item));
    }
  },
  '.photos'
);

const popupWithImage = new PopupWithImage(popupWithImageSelector);
const userInfo = new UserInfo({nameSelector: '#profile-info-name', aboutUserSelector: '#profile-info-about'});
const popupEditProfile = new PopupWithForm({
    submitCallback: (formData) => {
      userInfo.setUserInfo(formData);
      popupEditProfile.close();
    }
  },
  popupEditProfileSelector
);
const popupAddCard = new PopupWithForm({
    submitCallback: (cardData) => {
      const cardElement = createCardElement(cardData);
      cardsList.addItem(cardElement);
      popupAddCard.close();
    }
  },
  popupAddCardSelector
);

popupAddCard.setEventListeners();
popupWithImage.setEventListeners();
popupEditProfile.setEventListeners();

const formAddCardValidator = new FormValidator(formSettings, popupAddCard.getForm());
const formEditProfileValidator = new FormValidator(formSettings, popupEditProfile.getForm());

formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();



// initial cards rendering
cardsList.renderItems();

popupAddCardOpenBtn.addEventListener('click', function (event) {
  formAddCardValidator.setSubmitBtnState(); // initial validation of form fields and setting button state
  popupAddCard.open();
});

popupEditPrifileOpenBtn.addEventListener('click', function (event) {
  popupEditProfile.setDataInForm(userInfo.getUserInfo());
  formEditProfileValidator.setSubmitBtnState(); // initial validation of form fields and setting button state
  popupEditProfile.open();
});

