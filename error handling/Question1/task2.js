function checkout() {
    // Check if the cart is empty
    if (cart.length === 0) {
      throw new Error("Cart is empty. Add items before checkout.");
    }
  
    // Proceed with checkout if the cart is not empty
    console.log("Proceeding to checkout...");
    // Additional checkout logic can be added here
  }
  