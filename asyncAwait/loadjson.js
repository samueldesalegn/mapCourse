/* eslint-disable no-irregular-whitespace */
/* eslint-disable require-jsdoc */

// convert to async/await code
// function loadJson(url) {
//   return fetch(url)
//     .then(response => {
//       if (response.status == 200) {
//         return response.json();
//       } else {
//         throw new Error(response.status);
//       }
//     });
// }

// loadJson('https://javascript.info/no-such-user.json')
//   .catch(alert); // Error: 404

// async function loadJson(url) {
//   let response = await fetch(url);
// 		if (response.status === 200) {
// 			let json = await response.json();
// 			return json;
// 		}else {
// 			throw new Error(response.status);
// 		} 
	
// }

// loadJson('https://javascript.info/no-such-user.json')
// .catch(console.log);




async function calcTotalPrice(category) {

	    try {
	
	      // Retrieve shopping cart items from server
	
	      const cartResponse = await fetch('http://www.example.com/shoppingcart');
	
	      const cartData = await cartResponse.json();	
	
	      /*
	
	      const cartData = {
	
	  "cart": [
	
	    { "orderItem": 1, "productId": 1, "quantity": 3 },
	
	    { "orderItem": 2, "productId": 4, "quantity": 5 },
	
	    { "orderItem": 3, "productId": 5, "quantity": 1 }
	
	  ]
	
	};
	
	*/
	
	      const cartItems = cartData.cart;	
	      let totalPrice = 0;
	
	      // Iterate over cart items and calculate total price for the specified category
	
	      for (const item of cartItems) {
	
	        // Retrieve product details from server for each cart item
	
	        const productResponse = await fetch(`http://www.example.com/product?productid=${item.productId}`);
	
	        const productData = await productResponse.json();
	

	        // Check if the product belongs to the specified category
	
	        if (productData.category === category) {
	
	          const itemPrice = productData.price * item.quantity;
	
	          totalPrice += itemPrice;
	
	        }
	
	      }
	
	 
	
	      return totalPrice;
	
	    } catch (error) {
	
	      console.log(error);
	
	    }
	
	  }
	
	 