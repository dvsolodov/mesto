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
      handleLike: (card) => {
        if (card.isLiked()) {
          api.removeLike(card.getId())
            .then((result) => {
              card.setLikesCounter(result.likes);
            })
            .catch(err => console.log(err));
        } else {
          api.addLike(card.getId())
            .then((result) => {
              card.setLikesCounter(result.likes);
            })
            .catch(err => console.log(err));
        }
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
          popupWithConfirmation.close();
        })
        .catch(err => console.log(err))
    }
  },
  popupConfirmSelector
);

const popupEditAvatar = new PopupWithForm({
    submitCallback: (formData) => {
      popupEditAvatar.renderLoading('????????????????????...');
      api.editAvatar(formData)
        .then((result) => {
          userInfo.setUserInfo(result);
          popupEditAvatar.close();
        })
        .catch(err => console.log(err))
        .finally(() => {
          popupEditAvatar.renderLoading('??????????????????');
        });
    }
  },
  popupEditAvatarSelector
);

const popupEditProfile = new PopupWithForm({
    submitCallback: (formData) => {
      popupEditProfile.renderLoading('????????????????????...');
      api.editProfile(formData)
        .then((result) => {
          userInfo.setUserInfo(result);
          popupEditProfile.close();
        })
        .catch(err => console.log(err))
        .finally(() => {
          popupEditProfile.renderLoading('??????????????????');
        });
    }
  },
  popupEditProfileSelector
);

const popupAddCard = new PopupWithForm({
    submitCallback: (formData) => {
      popupAddCard.renderLoading('????????????????????...');
      api.addCard(formData)
        .then((result) => {
          const cardElement = createCardElement(result);
          cardsList.addItem(cardElement);
          popupAddCard.close();
        })
        .catch(err => console.log(err))
        .finally(() => {
          popupAddCard.renderLoading('??????????????????');
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

