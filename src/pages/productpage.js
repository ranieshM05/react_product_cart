import React, { useState, useEffect } from 'react';

const ProductPage = () => {
  // State to store products
  const [products, setProducts] = useState([]);
  // State to manage the cart
  const [cart, setCart] = useState([]);

  // Fetch products from the Fake Store API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Function to add or remove an item from the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if the product is already in the cart
      const isProductInCart = prevCart.some((item) => item.id === product.id);
      if (isProductInCart) {
        // Remove product from cart if already present
        return prevCart.filter((item) => item.id !== product.id);
      } else {
        // Add product to cart
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  return (
    <div>
      <h1>Products</h1>
      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ width: '100px', height: '100px' }} />
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <button onClick={() => addToCart(product)}>
              {cart.some((item) => item.id === product.id) ? 'Remove from Cart' : 'Add to Cart'}
            </button>
          </div>
        ))}
      </div>
      <h2>Cart</h2>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} x {item.quantity}
          </li>
        ))}
      </ul>
      <p>Total Items in Cart: {cart.length}</p>
    </div>
  );
};

export default ProductPage;
