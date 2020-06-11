class Storage {
  constructor(arrItems) {
    this.arrItems = arrItems;
  }
  getItems() {
    return this.arrItems;
  }
  addItem(item) {
    this.arrItems.push(item);
  }
  removeItem(item) {
    if (this.arrItems.includes(item)) {
      this.arrItems.splice(this.arrItems.indexOf(item), 1);
    } else {
      console.log(`There is not ${item} on storage!`);
    }
  }
}

const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор",
]);

const items = storage.getItems();
console.table(items);
storage.addItem("Дроид");
console.table(items);
storage.removeItem("Дроид");
storage.removeItem("Нанитоиды");
console.table(items);
