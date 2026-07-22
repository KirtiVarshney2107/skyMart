import {
  Package,
  Users,
  Star,
  Truck,
  ShieldCheck,
  Zap,
  HeartHandshake,
  BadgeCheck,
} from "lucide-react";

const ValueSection = () => {
     const values = [
  {
    id: 1,
    icon: ShieldCheck,
    title: "Trust",
    description:
      "We believe transparency and honesty build long-lasting relationships.",
  },
  {
    id: 2,
    icon: Zap,
    title: "Speed",
    description:
      "Fast delivery and smooth shopping experience are our priorities.",
  },
  {
    id: 3,
    icon: HeartHandshake,
    title: "Community",
    description:
      "We grow together by supporting our customers and partners.",
  },
  {
    id: 4,
    icon: BadgeCheck,
    title: "Quality",
    description:
      "Every product is carefully selected to ensure premium quality.",
  },
];
  return (
    <section className="bg-[#111827] py-16">
      <div className="max-w-6xl mx-auto px-5">

        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">
          What We Stand For
        </h2>

        <p className="text-gray-400 text-center mt-4 max-w-2xl mx-auto">
          These values guide everything we do and help us provide the best
          shopping experience.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className=" border border-gray-700 rounded-2xl p-6
                hover:border-lime-400 hover:-translate-y-2
                transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-lime-400 flex items-center justify-center mb-5">
                  <Icon className="text-black" size={24} />
                </div>

                <h3 className="text-white text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {item.description}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default ValueSection;

