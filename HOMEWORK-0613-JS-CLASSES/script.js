class CartItem {
    constructor() {
      this.items = [];
    }
  
    addItem(productName, price, quantity) {
      const item = {
        productName,
        price,
        quantity
      };
      this.items.push(item);
    }
  
    calculateTotalPrice() {
      let totalPrice = 0;
      this.items.forEach(item => {
        totalPrice += item.price * item.quantity;
      });
      return totalPrice;
    }
  
    removeItem(productName) {
      this.items = this.items.filter(item => item.productName !== productName);
    }
  
    updateItemQuantity(productName, newQuantity) {
      this.items.forEach(item => {
        if (item.productName === productName) {
          item.quantity = newQuantity;
        }
      });
    }
  
    clearCart() {
      this.items = [];
    }
  
    applyCoupon(couponCode) {
      const discountRatio = this.getDiscountRatio(couponCode);
      if (discountRatio === null) {
        console.log('Invalid coupon code');
        return null;
      }
  
      const totalPrice = this.calculateTotalPrice();
      const discountedPrice = totalPrice - totalPrice * discountRatio;
      return discountedPrice;
    }
  
    getDiscountRatio(couponCode) {
      const couponCodes = new Map([
        ['SAVE10', 0.1],
        ['SAVE20', 0.2],
        ['SAVE50', 0.5]
      ]);
      return couponCodes.get(couponCode) || null;
    }
  }
  
git
  const cart = new CartItem();
  
  cart.addItem('Product 1', 10, 2);
  cart.addItem('Product 2', 5, 3);
  
  console.log('Total price:', cart.calculateTotalPrice()); // Output: 40 (10 * 2 + 5 * 3)
  
  cart.removeItem('Product 1');
  
  cart.updateItemQuantity('Product 2', 4);
  
  console.log('Total price:', cart.calculateTotalPrice()); // Output: 20 (5 * 4)
  
  console.log('Discounted price:', cart.applyCoupon('SAVE10')); // Output: 18 (20 - 20 * 0.1)
  
  cart.clearCart();
  
  console.log('Total price:', cart.calculateTotalPrice()); // Output: 0