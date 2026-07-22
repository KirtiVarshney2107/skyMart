import { IoClose } from "react-icons/io5";
import { FaShoppingBag } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useContext } from "react";
import { MyStore } from "../Context/MyContext";

const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    setCartItems
  } = useContext(MyStore);

 const totalPrice= cartItems.reduce((total,item)=>{
    return total+item.price*item.quantity;
   },0)
    
    
  const incrementQuantity = (id) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  // Decrease Quantity
  const decrementQuantity = (id) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Remove Item
  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <>
      {/* Overlay */}
      {isCartOpen && (
        <div
          onClick={() => setIsCartOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-screen w-[380px] bg-[#171923]
        z-50 shadow-2xl transition-all duration-300
        ${
          isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <h2 className="text-2xl text-white font-semibold">
            🛒 Cart
          </h2>

          <IoClose
            size={28}
            className="cursor-pointer text-white"
            onClick={() => setIsCartOpen(false)}
          />
        </div>

        {/* Body */}
        <div className="h-[calc(100%-90px)] overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col justify-center items-center h-full text-center">

              <FaShoppingBag
                size={55}
                className="text-lime-400"
              />

              <h2 className="text-white text-3xl font-bold mt-6">
                Cart is Empty
              </h2>

              <p className="text-gray-400 mt-2">
                Go shop something cool
              </p>

              <button
                className="mt-8 bg-lime-400 px-8 py-3 rounded-full font-semibold"
                onClick={() => setIsCartOpen(false)}
              >
                Browse Products
              </button>

            </div>
          ) : (
            <>
              {/* Yaha CartItem map hoga */}

              <div className="p-5 space-y-4">

                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="border border-gray-700 rounded-xl p-3 flex gap-3"
                  >
                    <img
                      src={item.thumbnail}
                      className="w-20 h-20 object-contain bg-white rounded-lg"
                    />

                    <div className="flex-1">
                      <h3 className="text-white line-clamp-2">
                        {item.title}
                      </h3>

                      <p className="text-lime-400 font-bold mt-2">
                        ${item.price}
                      </p>

                      <div className="flex gap-3 mt-3 text-white">

                        <button onClick={() => decrementQuantity(item.id)}>-</button>

                      <span>{item.quantity}</span>

                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                         <button
  onClick={() => removeItem(item.id)}
  className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500 hover:bg-red-600 transition"
>
  <RiDeleteBin6Line className="text-white" size={16} />
</button>
                      </div>
                    
                    </div>

                  </div>
                ))}

              </div>

              {/* Footer */}
              <div className="absolute bottom-0 w-full border-t border-gray-700 p-5 bg-[#171923]">

                <div className="flex justify-between text-white mb-5">
                  <span>Total</span>

                  <span> {totalPrice}</span>
                </div>

                <button onClick={()=>{
                    alert("your order is placed");
                    setCartItems([]);
                }} className="w-full bg-lime-400 text-black py-3 rounded-full font-semibold">
                  Checkout →
                </button>

              </div>
            </>
          )}
        </div>
      </div>
      
    </>
    
  );
}

export default CartDrawer;