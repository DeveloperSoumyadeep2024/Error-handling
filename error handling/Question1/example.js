let cart = [];

function addToCart(name, price, quantity) {
  if (!name) {
    throw new Error("Product name is required.");
  }
  if (typeof price !== 'number' || price <= 0) {
    throw new Error("Invalid product price.");
  }
  if (!Number.isInteger(quantity) || quantity <= 0) {
    throw new Error("Invalid quantity.");
  }
  cart.push({ name, price, quantity });
  console.log(`${name} added to cart.`);
}

function checkout() {
  if (cart.length === 0) {
    throw new Error("Cart is empty. Add items before checkout.");
  }
  console.log("Proceeding to checkout...");
}

try {
  addToCart("Laptop", 1200, 2);  // Should succeed
  addToCart("", 30, 1);          // Should throw an error: "Product name is required."
  addToCart("Mouse", -15, 3);    // Should throw an error: "Invalid product price."
  addToCart("Keyboard", 50, "abc"); // Should throw an error: "Invalid quantity."

  checkout();                    // Should throw an error if no valid products are added
} catch (error) {
  console.error(error.message);
}
