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
import PopupConfirmDeletion from '../components/PopupConfirmDeletion.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

const createCardElement = (cardData) => {
  const card = new Card({
      cardData: cardData,
      handleCardClick: (imgData) => {
        popupWithImage.open(imgData);
      },
      handleCardDeletion: (card) => {
        popupConfirmDeletion.card = card;
        popupConfirmDeletion.setDataInForm({confirm: card.getId()});
        popupConfirmDeletion.open();
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
      api.deleteCard(card.getId());
      card.deleteCard();
      popupConfirmDeletion.close();
    }
  },
  popupConfirmSelector
);

const popupEditAvatar = new PopupWithForm({
    submitCallback: (formData) => {
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
      cardData.ownerId = cardData.myId = userInfo.getUserInfo().userId;
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
    userInfo.setUserInfo({name: data.name, about: data.about, userId: data['_id']});
    userInfo.setAvatar({link: data.avatar, name: data.name});
  })

// initial cards rendering
api.getInitialCards()
  .then((data) => {
      data.forEach((card) => {
        const cardData = {
          name: card.name,
          link: card.link,
          id: card['_id'],
          ownerId: card.owner['_id'],
          myId: userInfo.getUserInfo().userId,
          likes: card.likes.length
        };
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

