import './index.css';
import {
  popupEditAvatarOpenBtn,
  popupEditPrifileOpenBtn,
  popupAddCardOpenBtn,
  popupEditAvatarSelector,
  popupWithImageSelector,
  popupAddCardSelector,
  popupEditProfileSelector,
  popupConfirmSelector,
  cardTemplateSelector,
  formSettings,
  nameSelector,
  aboutSelector,
  avatarSelector,
  options
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const createCardElement = (cardData) => {
  const card = new Card({
      cardData: cardData,
      handleCardClick: (imgData) => {
        popupWithImage.open(imgData);
      },
      handleCardDelete: (imgData) => {
        popupConfirm.open(imgData);
      }
    },
    cardTemplateSelector
  );

  return card.createCard();
}

const cardsList = new Section({
    items: [],
    renderer: (item) => {
      cardsList.addItem(createCardElement(item));
    }
  },
  '.photos'
);

const api = new Api(options);
const popupWithImage = new PopupWithImage(popupWithImageSelector);
const userInfo = new UserInfo({
  nameSelector: nameSelector,
  aboutUserSelector: aboutSelector,
  avatarSelector: avatarSelector
});

const popupConfirm = new PopupWithForm({
    submitCallback: (cardData) => {
      api.deleteCard(cardData);
      popupConfirm.close();
    }
  },
  popupConfirmSelector
);

const popupEditAvatar = new PopupWithForm({
    submitCallback: (formData) => {
      console.log(formData);
      api.editAvatar(formData);
      userInfo.setAvatar(formData);
      popupEditAvatar.close();
    }
  },
  popupEditAvatarSelector
);

const popupEditProfile = new PopupWithForm({
    submitCallback: (formData) => {
      api.editProfile(formData);
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
      api.addCard(cardData);
      popupAddCard.close();
    }
  },
  popupAddCardSelector
);

popupEditAvatar.setEventListeners();
popupAddCard.setEventListeners();
popupWithImage.setEventListeners();
popupEditProfile.setEventListeners();

const formEditAvatarValidator = new FormValidator(formSettings, popupEditAvatar.getForm());
const formAddCardValidator = new FormValidator(formSettings, popupAddCard.getForm());
const formEditProfileValidator = new FormValidator(formSettings, popupEditProfile.getForm());

formEditAvatarValidator.enableValidation();
formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();


// initial profile rendering
api.getProfile()
  .then((data) => {
    userInfo.setUserInfo({name: data.name, about: data.about});
    userInfo.setAvatar({link: data.avatar, name: data.name});
  })

// initial cards rendering
api.getInitialCards()
  .then((data) => {
      data.forEach((card) => {
        const likesNumber = card.likes.length;
        const cardData = {name: card.name, link: card.link, id: card._id, likes: likesNumber};
        cardsList.addItem(createCardElement(cardData));
      });
    }
  );

popupEditAvatarOpenBtn.addEventListener('click', function (event) {
  formEditAvatarValidator.setSubmitBtnState(); // initial validation of form fields and setting button state
  popupEditAvatar.open();
});

popupAddCardOpenBtn.addEventListener('click', function (event) {
  formAddCardValidator.setSubmitBtnState(); // initial validation of form fields and setting button state
  popupAddCard.open();
});

popupEditPrifileOpenBtn.addEventListener('click', function (event) {
  popupEditProfile.setDataInForm(userInfo.getUserInfo());
  formEditProfileValidator.setSubmitBtnState(); // initial validation of form fields and setting button state
  popupEditProfile.open();
});

