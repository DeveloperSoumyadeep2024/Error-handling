function processPayment(amount, cardNumber, expirationDate) {
    // Validate the payment amount
    if (typeof amount !== 'number' || amount <= 0) {
      throw new Error("Invalid payment amount.");
    }
  
    // Validate the card number using a simple regex pattern for 16 digits
    const cardNumberPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (!cardNumber || !cardNumberPattern.test(cardNumber)) {
      throw new Error("Invalid card number.");
    }
  
    // Validate the expiration date
    if (!expirationDate || !isValidExpirationDate(expirationDate)) {
      throw new Error("Invalid expiration date.");
    }
  
    console.log("Payment processed successfully!");
  }
  
  function isValidExpirationDate(expirationDate) {
    // Check if expiration date is in the format MM/YY
    const expDatePattern = /^\d{2}\/\d{2}$/;
    if (!expDatePattern.test(expirationDate)) {
      return false;
    }
  
    // Parse the expiration date
    const [month, year] = expirationDate.split("/").map(Number);
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of current year
    const currentMonth = new Date().getMonth() + 1; // Months are 0-indexed
  
    // Check if the expiration date is in the future
    if (year < currentYear || (year === currentYear && month < currentMonth)) {
      return false;
    }
  
    return true;
  }
  
  try {
    processPayment(50.25, "1234-5678-9012-3456", "12/25");  // Should succeed
    processPayment(-10, "InvalidCardNumber", "05/21");     // Should throw an error: "Invalid payment amount." and "Invalid card number."
    processPayment(100.75, "9876-5432-1098-7654", "01/20"); // Should throw an error: "Invalid expiration date."
  } catch (error) {
    console.error(error.message);
  }
  