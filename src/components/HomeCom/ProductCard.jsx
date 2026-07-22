import { useContext } from "react";
import { FaStar, FaShoppingCart } from "react-icons/fa";
import { MyStore } from "../../Context/MyContext";

const ProductCard = ({ product }) => {
  let {setCartItems ,setIsCartOpen}=useContext(MyStore);
  const addtocart = (product) => {
  setCartItems((prev) => {
    const exist = prev.find((item) => item.id === product.id);

    if (exist) {
      return prev.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
    }

    return [
      ...prev,
      {
        ...product,
        quantity: 1,
      },
    ];
  });

  setIsCartOpen(true);
};
  return (
    <div className="bg-[#1B1D29] border border-gray-700 rounded-2xl p-4 hover:border-lime-400 transition">

      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-full h-48 object-contain"
      />

      {/* Rating */}
      <div className="flex items-center gap-1 mt-4 text-yellow-400">
        <FaStar />
        <span className="text-white">{product.rating}</span>
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold mt-2">
        {product.title}
      </h3>

      {/* Price */}
      <p className="text-lime-400 text-xl font-bold mt-2">
        ₹{product.price}
      </p>

      {/* Button */}
      <button onClick={()=>addtocart(product)} className="mt-5 w-full bg-lime-400 text-black py-2 rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-lime-300">
        <FaShoppingCart />
        Add to Cart
      </button>

    </div>
  );
};

export default ProductCard;