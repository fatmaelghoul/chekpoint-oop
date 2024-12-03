class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
class Item {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }
  calculatePrice() {
    return this.product.price * this.quantity;
  }
}

class Cart {
  constructor() {
    this.shoppingCart = [];
  }
  addItem(item) {
    this.shoppingCart.push(item);
  }
  total() {
    const total = this.shoppingCart.reduce(
      (acc, curr) => acc + curr.calculatePrice(),
      0
    );
    console.log(`Total of all items:`, total);
  }
  removeItem(Id) {
    const i = this.shoppingCart.findIndex((item) => item.product.id === Id);
    if (i !== -1) {
        this.shoppingCart.splice(i, 1);
        console.log("Item was removed");
    } else {
      console.log("Item not found in the cart.");
    }
  }
  displayItems() {
    this.shoppingCart.forEach((elt, i) =>
      console.log(
        `${i + 1}/${elt.product.name} | ${elt.product.price} - ${elt.quantity}`
      )
    );
  }
}
//products
const Product1 = new Product("i8e5b779f-cc77-", "Sweater", 50);
const Product2 = new Product("i8e5b779f-cc76-", "coat long", 150);
const Product3 = new Product("i8e5b779f-cc67-", "jachet", 100);

//items
const item1 = new Item(Product1, 2);
const item2 = new Item(Product2, 1);
const item3 = new Item(Product3, 3);
console.log(item1.calculatePrice());
console.log(item2.calculatePrice());
console.log(item3.calculatePrice());
const myCart = new Cart();
myCart.addItem(item1);
myCart.addItem(item2);
myCart.addItem(item3);
// my cart.add item(item1,item2,item3)
myCart.total();
myCart.removeItem("i8e5b779f-cc77-");
myCart.displayItems();
