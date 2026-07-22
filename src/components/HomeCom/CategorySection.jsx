import {
  FaLaptop,
  FaTshirt,
  FaCouch,
  FaHome,
  FaFootballBall,
  FaHeadphones,
} from "react-icons/fa";

const categories = [
  {
    id: 1,
    title: "Electronics",
    products: "25 Products",
    icon: <FaLaptop />,
  },
  {
    id: 2,
    title: "Clothing",
    products: "18 Products",
    icon: <FaTshirt />,
  },
  {
    id: 3,
    title: "Furniture",
    products: "12 Products",
    icon: <FaCouch />,
  },
  {
    id: 4,
    title: "Home",
    products: "15 Products",
    icon: <FaHome />,
  },
  {
    id: 5,
    title: "Sports",
    products: "10 Products",
    icon: <FaFootballBall />,
  },
  {
    id: 6,
    title: "Accessories",
    products: "20 Products",
    icon: <FaHeadphones />,
  },
];

const CategorySection = () => {
  return (
    <section className="max-w-7xl mx-auto mt-16">

      {/* Heading */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">
          Shop by <span className="text-lime-400">Category</span>
        </h2>

        <button className="border border-gray-600 px-5 py-2 rounded-full hover:bg-lime-400 hover:text-black transition">
          View All
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-3 gap-6">
        {categories.map((item) => (
          <div
            key={item.id}
            className="bg-[#1B1D29] border border-gray-700 rounded-2xl p-6 hover:border-lime-400 hover:-translate-y-1 transition duration-300 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-full bg-lime-400 text-black flex justify-center items-center text-2xl">
              {item.icon}
            </div>

            <h3 className="text-xl font-semibold mt-5">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {item.products}
            </p>
          </div>
        ))}
      </div>

    </section>
  );
};

export default CategorySection;