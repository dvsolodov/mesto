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
        popupWithConfirmation.card = card;
        popupWithConfirmation.setDataInForm({confirm: card.getId()});
        popupWithConfirmation.open();
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

const popupWithConfirmation = new PopupWithForm({
    submitCallback: () => {
      const card = popupWithConfirmation.card;
      api.deleteCard(card.getId())
        .then((result) => {
          card.deleteCard();
          popupWithConfirmation.card = null;
        })
        .catch(err => console.log(err))
        .finally(() => {
          popupWithConfirmation.close();
        });
    }
  },
  popupConfirmSelector
);

const popupEditAvatar = new PopupWithForm({
    submitCallback: (formData) => {
      popupEditAvatar.renderLoading('Сохранение...');
      api.editAvatar(formData)
        .then((result) => {
          userInfo.setAvatar(result);
        })
        .catch(err => console.log(err))
        .finally(() => {
          popupEditAvatar.renderLoading('Сохранить');
          popupEditAvatar.close();
        });
    }
  },
  popupEditAvatarSelector
);

const popupEditProfile = new PopupWithForm({
    submitCallback: (formData) => {
      popupEditProfile.renderLoading('Сохранение...');
      api.editProfile(formData)
        .then((result) => {
          userInfo.setUserInfo(result);
        })
        .catch(err => console.log(err))
        .finally(() => {
          popupEditProfile.renderLoading('Сохранить');
          popupEditProfile.close();
        });
    }
  },
  popupEditProfileSelector
);

const popupAddCard = new PopupWithForm({
    submitCallback: (formData) => {
      popupAddCard.renderLoading('Сохранение...');
      api.addCard(formData)
        .then((result) => {
          const cardElement = createCardElement(result);
          cardsList.addItem(cardElement);
        })
        .catch(err => console.log(err))
        .finally(() => {
          popupAddCard.renderLoading('Сохранить');
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
popupWithConfirmation.setEventListeners();

const formEditAvatarValidator = new FormValidator(formSettings, popupEditAvatar.getForm());
const formAddCardValidator = new FormValidator(formSettings, popupAddCard.getForm());
const formEditProfileValidator = new FormValidator(formSettings, popupEditProfile.getForm());

formEditAvatarValidator.enableValidation();
formAddCardValidator.enableValidation();
formEditProfileValidator.enableValidation();

// initial profile and cards rendering
Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([userData, cardsData]) => {
    userInfo.setUserInfo(userData);
    userInfo.setAvatar(userData);
    cardsList.renderItems(cardsData);
  })
  .catch(err => console.log(err));

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

