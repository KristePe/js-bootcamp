

//Create a JavaScript class called CartItem that represents an item in a shopping cart. Each item should have properties such as the product name, price, and quantity. Your class should have the following functionalities:

//Add Items: Implement a method that allows adding items to the shopping cart. Each item should contain a product name, price, and quantity.

//Calculate Total Price: Create a method to calculate the total price of all the items in the shopping cart. The total price should be calculated by multiplying the price of each item by its quantity and summing up the results.

//Remove Items: Implement a method that allows removing items from the shopping cart. You should be able to specify the item to remove based on its product name.

//Update Items: Create a method to update the quantity of an item in the shopping cart. This method should take the product name and the new quantity as parameters.

//Clear Items from Cart: Implement a method that clears all items from the shopping cart, effectively resetting it to an empty state.

//Bonus Task: Implement a method named applyCoupon that applies a discount to the total price of the shopping cart based on the provided coupon code. The following coupon codes should be supported: 'SAVE10', 'SAVE20', and 'SAVE50'. Each coupon should provide a respective discount ratio of 10%, 20%, and 50%.

//Your task is to create the CartItem class and ensure that all the functionalities mentioned above are correctly implemented.

class CartItem {
    constructor (productName, price, quantity) {
        this.productName = productName;
        this.price = price;
        this.quantity = quantity
    }
}

