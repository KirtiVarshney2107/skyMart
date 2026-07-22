import {NavLink} from "react-router";

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto  border border-gray-600 rounded-3xl px-10 py-12 flex justify-between items-center">

      {/* Left Side */}
      <div className="max-w-xl">

        <p className="text-lime-400 font-semibold uppercase tracking-wider">
          Good Evening 👋
        </p>

        <h1 className="text-6xl font-bold mt-4 leading-tight">
          Welcome back,
          <br />
          <span className="text-lime-400">Kirti!</span>
        </h1>

        <p className="text-gray-400 mt-6">
          Discover today's picks — hand-curated products across
          electronics, fashion, and more.
        </p>

        <div className="flex gap-5 mt-8">
          <NavLink to="/shop"  className="bg-lime-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-lime-300 transition">
            Shop Now
         </NavLink>

          <NavLink   to="/shop" className="border border-gray-500 px-8 py-3 rounded-full hover:bg-gray-800 transition">
            View All Products
          </NavLink>
        </div>

      </div>

      {/* Right Side */}
      <div className="flex flex-col gap-6">

        <div className="bg-[#1b1d29] border border-gray-600 rounded-2xl p-8 text-center w-52">
          <h2 className="text-5xl font-bold text-lime-400">
            20+
          </h2>

          <p className="text-gray-300 mt-2">
            Products Available
          </p>
        </div>

        <div className="border border-gray-600 rounded-2xl p-8 text-center w-52">
          <h2 className="text-4xl font-bold">
            Free
          </h2>

          <p className="text-gray-400 mt-2">
            Delivery on ₹999+
          </p>
        </div>

      </div>

    </section>
  );
};

export default Hero;
