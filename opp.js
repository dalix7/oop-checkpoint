/* // product class
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}
// cardItem class
class CartItem {
  constructor(product, quatity) {
    this.product = product;
    this.quatity = quatity;
  }
  totalPrice() {
    return this.product.price * this.quatity;
  }
}

//class shopping cart
class ShoppingCartItem {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(itemId) {
    this.items = this.items.filter((item) => item.product.id !== itemId);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  getTotalItems() {
    return this.items.length;
  }

  displayCartItems() {
    this.items.forEach((item) => {
      console.log(`${item.product.name} - Quantity: ${item.quantity}`);
    });
  }
}
const product1 = new Product(1, "Shirt", 20);
const product2 = new Product(2, "Jeans", 30);

const item1 = new ShoppingCartItem(product1, 2);
const item2 = new ShoppingCartItem(product2, 1);

const cart = new ShoppingCart();
cart.addItem(item1);
cart.addItem(item2);

console.log(cart.getTotalItems()); // Output: 2
console.log(cart.getTotalPrice()); // Output: 70 (20 * 2 + 30 * 1)
cart.displayCartItems();
// Output:
// Shirt - Quantity: 2
// Jeans - Quantity: 1
 */
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// ShoppingCartItem class
class ShoppingCartItem {
  constructor(product, quantity) {
    this.product = product;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.product.price * this.quantity;
  }
}

// ShoppingCart class
class ShoppingCart {
  constructor() {
    this.items = [];
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemId) {
    this.items = this.items.filter((item) => item.product.id !== itemId);
  }

  getTotalPrice() {
    return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }
  getTotalItems() {
    return this.items.length;
  }

  displayCartItems() {
    this.items.forEach((item) => {
      console.log(`${item.product.name} - Quantity: ${item.quantity}`);
    });
  }
}

// Example usage:
const product1 = new Product(1, "Shirt", 20);
const product2 = new Product(2, "Jeans", 30);

const item1 = new ShoppingCartItem(product1, 2);
const item2 = new ShoppingCartItem(product2, 1);

const cart = new ShoppingCart();
cart.addItem(item1);
cart.addItem(item2);
console.log(cart.getTotalItems());

console.log(cart.getTotalPrice()); // Output: 70 (20 * 2 + 30 * 1)
cart.displayCartItems();
