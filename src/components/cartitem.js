const CartItem = ({ item, removeFromCart, updateQuantity }) => {
    return (
      <div className="border p-4 rounded shadow-lg mb-4">
        <h2 className="text-xl font-semibold">{item.title}</h2>
        <p className="text-gray-600">Price: ${item.price}</p>
        <p className="text-gray-600">Quantity: {item.quantity}</p>
        <p className="text-gray-600">Total: ${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => updateQuantity(item.id, 1)}
          className="bg-green-500 text-white py-1 px-2 rounded mr-2"
        >
          Increase
        </button>
        <button
          onClick={() => updateQuantity(item.id, -1)}
          className="bg-yellow-500 text-white py-1 px-2 rounded mr-2"
        >
          Decrease
        </button>
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white py-1 px-2 rounded"
        >
          Remove from Cart
        </button>
      </div>
    );
  };
  
  export default CartItem;
  