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
      userId: this._userId
    };
  }

  setUserInfo(dataObj){
    this._name.textContent = dataObj.name;
    this._aboutUser.textContent = dataObj.about;
    this._userId = dataObj['_id'];
  }

  getAvatar() {
    return {
      avatar: this._avatar.src
    }
  }

  setAvatar(userData) {
    this._avatar.src = userData.avatar;

    if (userData.name !== undefined) {
      this._avatar.alt = userData.name;
    }
  }
}
