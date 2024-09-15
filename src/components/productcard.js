const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="border p-4 rounded shadow-lg">
        <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4" />
        <h2 className="text-xl font-semibold">{product.title}</h2>
        <p className="text-gray-600">${product.price}</p>
        <p className="text-gray-800 mt-2">{product.description}</p>
        <button
          onClick={() => addToCart(product)}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  