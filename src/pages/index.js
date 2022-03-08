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
      handleCardClick: () => {
        popupWithImage.open(card.getImg());
      }
    },
    cardTemplateSelector
  );

  return card.createCard();
}

const cardsList = (items) => {
   const list = new Section({
      items: items,
      renderer: (item) => {
        list.addItem(createCardElement(item));
      }
    },
    '.photos'
  );

  return list;
}

const popupWithImage = new PopupWithImage(popupWithImageSelector);
const userInfo = new UserInfo({nameSelector: '#profile-info-name', aboutUserSelector: '#profile-info-about'});
const popupEditProfile = new PopupWithForm({
    submitCallback: (event) => {
      event.preventDefault();
      userInfo.setUserInfo(popupEditProfile.getDataFromForm());
      popupEditProfile.close();
    }
  },
  popupEditProfileSelector
);
const popupAddCard = new PopupWithForm({
    submitCallback: (event) => {
      event.preventDefault();
      const cards = cardsList(popupAddCard.getDataFromForm());
      cards.renderItems();
      popupAddCard.close();
    }
  },
  popupAddCardSelector
);

const formAddCardValidator = new FormValidator(formSettings, popupAddCard.getForm());
const formEditProfileValidator = new FormValidator(formSettings, popupEditProfile.getForm());

formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();

formAddCardValidator.setSubmitBtnState();
formEditProfileValidator.setSubmitBtnState();


// initial cards rendering
const cards = cardsList(initialCards);
cards.renderItems();

popupAddCardOpenBtn.addEventListener('click', function (event) {
  popupAddCard.open();
});

popupEditPrifileOpenBtn.addEventListener('click', function (event) {
  popupEditProfile.setDataInForm(userInfo.getUserInfo());
  popupEditProfile.open();
});

