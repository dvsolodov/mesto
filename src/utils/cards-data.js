const arkhyz = new URL('../images/photos/arkhyz.jpg', import.meta.url)
const ivanovo = new URL('../images/photos/ivanovo.jpg', import.meta.url)
const chelyabinsk_oblast = new URL('../images/photos/chelyabinsk-oblast.jpg', import.meta.url)
const kamchatka = new URL('../images/photos/kamchatka.jpg', import.meta.url)
const kholmogorsky_rayon = new URL('../images/photos/kholmogorsky-rayon.jpg', import.meta.url)
const baikal = new URL('../images/photos/baikal.jpg', import.meta.url)

export default [
  {
    name: 'Архыз',
    link: arkhyz
  },
  {
    name: 'Челябинская область',
    link: chelyabinsk_oblast
  },
  {
    name: 'Иваново',
    link: ivanovo
  },
  {
    name: 'Камчатка',
    link: kamchatka
  },
  {
    name: 'Холмогорский район',
    link: kholmogorsky_rayon
  },
  {
    name: 'Байкал',
    link: baikal
  }
];
