export default class UseInfo {
  constructor({nameSelector, aboutUserSelector, avatarSelector}) {
    this._name = document.querySelector(nameSelector);
    this._aboutUser = document.querySelector(aboutUserSelector);
    this._avatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._aboutUser.textContent,
    };
  }

  setUserInfo(dataObj){
    this._name.textContent = dataObj.name;
    this._aboutUser.textContent = dataObj.about;
  }

  getAvatar() {
    return {
      avatar: this._avatar.src
    }
  }

  setAvatar(avatar) {
    this._avatar.src = avatar.link;

    if (avatar.name !== undefined) {
      this._avatar.alt = avatar.name;
    }
  }
}
