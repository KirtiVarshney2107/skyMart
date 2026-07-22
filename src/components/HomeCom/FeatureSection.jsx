import {
  FaTruck,
  FaShieldAlt,
  FaTags,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaTruck />,
    title: "Fast Delivery",
    desc: "Quick delivery across India",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    desc: "100% safe & secure payments",
  },
  {
    id: 3,
    icon: <FaTags />,
    title: "Best Prices",
    desc: "Affordable products everyday",
  },
  {
    id: 4,
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Always here to help you",
  },
];

const FeatureSection = () => {
  return (
    <section className="max-w-7xl mx-auto mt-20">
      <div className="grid grid-cols-4 gap-6">
        {features.map((item) => (
          <div
            key={item.id}
            className="bg-[#1B1D29] border border-gray-700 rounded-2xl p-6 text-center hover:border-lime-400 transition"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-lime-400 text-black flex items-center justify-center text-2xl">
              {item.icon}
            </div>

            <h3 className="mt-4 text-xl font-semibold">
              {item.title}
            </h3>

            <p className="text-gray-400 mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeatureSection;