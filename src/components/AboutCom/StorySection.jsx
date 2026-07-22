const StorySection = () => {
  return (
    <section className=" py-12">
      <div className="max-w-6xl mx-auto px-5">

        <div
          className="
          bg-[#1A2233]
          border border-gray-700
          rounded-3xl
          p-6
          md:p-10
          hover:border-lime-400
          transition-all
          duration-300"
        >
          <h2 className="text-white text-2xl md:text-4xl font-bold mb-6">
            Our Story
          </h2>

          <p className="text-gray-300 leading-8 mb-5">
            SkyMart started in 2022 as a small side project by two passionate
            developers who believed online shopping could be simpler, faster,
            and more enjoyable.
          </p>

          <p className="text-gray-300 leading-8 mb-5">
            We focused on creating a platform where customers could discover
            quality products without unnecessary complexity, hidden costs, or
            slow delivery.
          </p>

          <p className="text-gray-300 leading-8">
            Today, SkyMart serves thousands of happy customers and continues to
            grow with the same mission: making online shopping easy, affordable,
            and trustworthy for everyone.
          </p>
        </div>

      </div>
    </section>
  );
};

export default StorySection;
