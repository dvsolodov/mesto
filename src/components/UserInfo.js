export default class UseInfo {
  constructor({nameSelector, aboutUserSelector}) {
    this._name = document.querySelector(nameSelector);
    this._aboutUser = document.querySelector(aboutUserSelector);
  }

  getUserInfo() {
    return {
      name: this._name.textContent,
      about: this._aboutUser.textContent
    };
  }

  setUserInfo(dataObj){
    this._name.textContent = dataObj.name;
    this._aboutUser.textContent = dataObj.about;
  }
}
