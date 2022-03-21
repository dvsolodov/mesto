export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems = (items) => {
    if (items === null || items === undefined) {
      this._items.forEach((item) => {
        this._renderer(item);
      });
    } else {
      items.forEach((item) => {
        this._renderer(item);
      });
    }
  }

  addItem = (element) => {
    this._container.prepend(element);
  }
}
