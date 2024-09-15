import { useState } from 'react';
import CartItem from '../components/cartitem';

const CartPage = () => {
  const [cart, setCart] = useState([]); // This should come from context or props

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(p => p.id !== productId));
  };

  const updateQuantity = (productId, amount) => {
    setCart(prevCart => prevCart.map(p =>
      p.id === productId ? { ...p, quantity: p.quantity + amount } : p
    ));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * 0.9;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div>
        {cart.map(item => (
          <CartItem
            key={item.id}
            item={item}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
          />
        ))}
      </div>
      <div className="mt-4">
        <p>Total Price: ${totalPrice.toFixed(2)}</p>
        <p>Discounted Price (10% off): ${discountedPrice.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default CartPage;
