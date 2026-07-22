import { FaShoppingCart, FaRupeeSign, FaStar, FaBoxes } from "react-icons/fa";

const statsData = [
  {
    id: 1,
    title: "Cart Items",
    value: "5",
    icon: <FaShoppingCart />,
  },
  {
    id: 2,
    title: "Cart Value",
    value: "₹4,250",
    icon: <FaRupeeSign />,
  },
  {
    id: 3,
    title: "Top Products",
    value: "20+",
    icon: <FaStar />,
  },
  {
    id: 4,
    title: "Categories",
    value: "6",
    icon: <FaBoxes />,
  },
];

const Stats = () => {
  return (
    <section className="max-w-7xl mx-auto mt-10">
      <div className="grid grid-cols-4 gap-6">
        {statsData.map((item) => (
          <div
            key={item.id}
            className="bg-[#1B1D29] border border-gray-700 rounded-2xl p-6 hover:border-lime-400 transition duration-300"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-gray-400">{item.title}</p>

                <h2 className="text-3xl font-bold mt-2">
                  {item.value}
                </h2>
              </div>

              <div className="w-12 h-12 rounded-full bg-lime-400 text-black flex justify-center items-center text-xl">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
