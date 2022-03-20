import './index.css';
import {
  popupEditAvatarSubmitBtn,
  popupEditProfileSubmitBtn,
  popupAddCardSubmitBtn,
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
import PopupConfirmDeletion from '../components/PopupConfirmDeletion.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const createCardElement = (cardData) => {
  const data = {
    name: cardData.name,
    link: cardData.link,
    id: cardData['_id'],
    ownerId: cardData.owner['_id'],
    myId: userInfo.getUserInfo().userId,
    likes: cardData.likes
  };
  const card = new Card({
      cardData: data,
      handleCardClick: (imgData) => {
        popupWithImage.open(imgData);
      },
      handleCardDeletion: (card) => {
        popupConfirmDeletion.card = card;
        popupConfirmDeletion.setDataInForm({confirm: card.getId()});
        popupConfirmDeletion.open();
      },
      handleMinusLike: (cardId) => {
        return api.removeLike(cardId);
      },
      handlePlusLike: (cardId) => {
        return api.addLike(cardId);
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

const popupConfirmDeletion = new PopupConfirmDeletion({
    submitCallback: () => {
      const card = popupConfirmDeletion.card;
      api.deleteCard(card.getId())
        .then((result) => {
          card.deleteCard();
          popupConfirmDeletion.card = null;
          popupConfirmDeletion.close();
        });
    }
  },
  popupConfirmSelector
);

const popupEditAvatar = new PopupWithForm({
    submitCallback: (formData) => {
      popupEditAvatarSubmitBtn.textContent = 'Сохранение...';
      api.editAvatar(formData)
        .then((result) => {
          userInfo.setAvatar(result);
          popupEditAvatarSubmitBtn.textContent = 'Сохранить';
          popupEditAvatar.close();
        });
    }
  },
  popupEditAvatarSelector
);

const popupEditProfile = new PopupWithForm({
    submitCallback: (formData) => {
      popupEditProfileSubmitBtn.textContent = 'Сохранение...';
      api.editProfile(formData)
        .then((result) => {
          userInfo.setUserInfo(result);
          popupEditProfileSubmitBtn.textContent = 'Сохранить';
          popupEditProfile.close();
        });
    }
  },
  popupEditProfileSelector
);

const popupAddCard = new PopupWithForm({
    submitCallback: (formData) => {
      popupAddCardSubmitBtn.textContent = 'Сохранение...';
      api.addCard(formData)
        .then((result) => {
          const cardElement = createCardElement(result);
          cardsList.addItem(cardElement);
          popupAddCardSubmitBtn.textContent = 'Сохранить';
          popupAddCard.close();
        });
    }
  },
  popupAddCardSelector
);

popupEditAvatar.setEventListeners();
popupAddCard.setEventListeners();
popupWithImage.setEventListeners();
popupEditProfile.setEventListeners();
popupConfirmDeletion.setEventListeners();

const formEditAvatarValidator = new FormValidator(formSettings, popupEditAvatar.getForm());
const formAddCardValidator = new FormValidator(formSettings, popupAddCard.getForm());
const formEditProfileValidator = new FormValidator(formSettings, popupEditProfile.getForm());

formEditAvatarValidator.enableValidation();
formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();


// initial profile rendering
api.getProfile()
  .then((data) => {
    userInfo.setUserInfo(data);
    userInfo.setAvatar(data);
  })

// initial cards rendering
api.getInitialCards()
  .then((data) => {
      data.forEach((cardData) => {
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

