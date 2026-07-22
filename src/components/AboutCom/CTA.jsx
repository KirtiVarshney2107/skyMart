import { Link } from "react-router";

const CTA = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-5">

        <div className="bg-[#1A2233] border border-gray-700 rounded-3xl p-8 md:p-12 text-center">

          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Ready to Shop?
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-8">
            Explore thousands of products and experience shopping like never
            before with SkyMart.
          </p>

          <Link
            to="/main/shop"
            className="inline-block mt-8 bg-lime-400 text-black font-semibold
            px-8 py-3 rounded-xl hover:bg-lime-300 transition duration-300"
          >
            Browse Products
          </Link>

        </div>
        

      </div>
    </section>
  );
};

export default CTA;