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

  setUserInfo(dataArray){
    dataArray.forEach((item) => {
      this._name.textContent = item.name;
      this._aboutUser.textContent = item.about;
    });
  }
}
