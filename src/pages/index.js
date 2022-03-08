import './index.css';
import {
  popupEditPrifileOpenBtn,
  popupAddCardOpenBtn,
  popupWithImageSelector,
  popupAddCardSelector,
  popupEditProfileSelector,
  cardTemplateSelector,
} from '../utils/constants.js';
import initialCards from '../utils/cards-data.js';
import FormValidator from '../components/FormValidator.js';
import Section from '../components/Section.js';
import Card from '../components/Card.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';


const formSettings = {
  formSelector: 'form',
  inputSelector: 'form__input',
  buttonSubmitSelector: 'form__button',
  buttonInactiveClass: 'form__button_disabled',
  inputErrorClass: 'form__input_type_error',
  errorClass: 'form__error_visible'
};


const userInfo = new UserInfo({nameSelector: '#profile-info-name', aboutUserSelector: '#profile-info-about'});
const popupWithImage = new PopupWithImage(popupWithImageSelector);
const cardsList = new Section({
    items: initialCards,
    renderer: (item) => {
        const card = new Card({
          cardData: item,
          handleCardClick: () => {
            popupWithImage.open(card.getImg());
          }
        },
        cardTemplateSelector
      );
      const cardElement = card.createCard();
      cardsList.addItem(cardElement);
    }
  },
  '.photos'
);


// initial cards rendering
cardsList.renderItems();

popupAddCardOpenBtn.addEventListener('click', function (event) {
  const popupAddCard = new PopupWithForm({
      submitCallback: (event) => {
        event.preventDefault();
        const cardsList = new Section({
            items: popupAddCard.getDataFromForm(),
            renderer: (item) => {
                const card = new Card({
                  cardData: item,
                  handleCardClick: () => {
                    popupWithImage.open(card.getImg());
                  }
                },
                cardTemplateSelector
              );
              const cardElement = card.createCard();
              cardsList.addItem(cardElement);
            }
          },
          '.photos'
        );
        cardsList.renderItems();
        popupAddCard.close();
      }
    },
    popupAddCardSelector
  );
  const formAddCardValidator = new FormValidator(formSettings, popupAddCard.getForm());
  formAddCardValidator.enableValidation();
  formAddCardValidator.setSubmitBtnState();
  popupAddCard.open();
});

popupEditPrifileOpenBtn.addEventListener('click', function (event) {
  const popupEditProfile = new PopupWithForm({
      submitCallback: (event) => {
        event.preventDefault();
        userInfo.setUserInfo(popupEditProfile.getDataFromForm());
        popupEditProfile.close();
      }
    },
    popupEditProfileSelector
  );
  popupEditProfile.setDataInForm(userInfo.getUserInfo());
  const formEditProfileValidator = new FormValidator(formSettings, popupEditProfile.getForm());
  formEditProfileValidator.enableValidation();
  formEditProfileValidator.setSubmitBtnState();
  popupEditProfile.open();
});

