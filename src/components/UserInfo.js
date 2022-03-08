export default class UseInfo {
  constructor({nameSelector, aboutUserSelector}) {
    this._nameSelector = nameSelector;
    this._aboutUserSelector = aboutUserSelector;
  }

  getUserInfo() {
    const userInfoElements = this._getUserInfoElements();

    return {
      name: userInfoElements.name.textContent,
      about: userInfoElements.aboutUser.textContent
    };
  }

  setUserInfo(dataArray){
    const userInfoElements = this._getUserInfoElements();

    dataArray.forEach((item) => {
      userInfoElements.name.textContent = item.name;
      userInfoElements.aboutUser.textContent = item.about;
    });
  }

  _getUserInfoElements() {
    return {
      name: document.querySelector(this._nameSelector),
      aboutUser: document.querySelector(this._aboutUserSelector)
    };
  }
}
