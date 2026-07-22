import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { MyStore } from "../Context/MyContext";

const ProductCard = ({ product }) => {
  let{setCartItems, cartItems, setIsCartOpen}=useContext(MyStore);

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
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
      
      {/* Image Section */}
      <div className="relative bg-gray-100 p-5">
        {/* Category Badge */}
        <span className="absolute top-4 left-4 bg-gray-700 text-white text-xs px-3 py-1 rounded-full capitalize">
          {product.category}
        </span>

        <div className="h-64 flex items-center justify-center overflow-hidden">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full object-contain group-hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-[#111111] text-white p-5">

        {/* Category */}
        <p className="text-gray-400 text-sm capitalize">
          {product.category}
        </p>

        {/* Title */}
        <h2 className="text-lg font-semibold mt-2 line-clamp-2 min-h-[56px]">
          {product.title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={
                star <= Math.round(product.rating)
                  ? "text-yellow-400"
                  : "text-gray-500"
              }
              size={14}
            />
          ))

          }

          <span className="text-gray-400 text-sm ml-2">
            ({Math.floor(Math.random() * 300) + 50})
          </span>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Price + Button */}
        <div className="flex justify-between items-center">
          <h3 className="text-3xl font-bold text-lime-400">
            ${product.price}
          </h3>

          <button onClick={()=> addtocart(product)} className="flex items-center gap-2 bg-lime-400 hover:bg-lime-500 text-black font-semibold px-4 py-2 rounded-full transition">
            <HiOutlineShoppingCart size={18} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;