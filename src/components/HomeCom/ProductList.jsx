import ProductCard from "./ProductCard";

const products = [
  {
    id: 1,
    title: "Apple AirPods Max",
    price: 54999,
    rating: 4.9,
    thumbnail:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
  },
  {
    id: 2,
    title: "Apple Watch Ultra",
    price: 79999,
    rating: 4.8,
    thumbnail:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
  },
  {
    id: 3,
    title: "Gaming Keyboard",
    price: 4999,
    rating: 4.7,
    thumbnail:
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500",
  },
  {
    id: 4,
    title: "JBL Bluetooth Speaker",
    price: 6999,
    rating: 4.8,
    thumbnail:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
  },
];


const ProductList = () => {
  return (
    <section className="max-w-7xl mx-auto mt-16">

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">
          Top <span className="text-lime-400">Products</span>
        </h2>

        <button className="border border-gray-600 px-5 py-2 rounded-full hover:bg-lime-400 hover:text-black">
          View All
        </button>
      </div>

      <div className="grid grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div>

    </section>
  );
};

export default ProductList;