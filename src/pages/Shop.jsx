import React, { useContext, useEffect ,useState} from 'react'
import Navbar from '../components/HomeCom/Navbar'
import { FiSearch } from "react-icons/fi";
import axios from "axios";
import { IoChevronDown } from "react-icons/io5";
import { MyStore } from '../Context/MyContext';
import ProductCard from "../components/ProductCard";

const Shop = () => {

  let{product , setProduct,isCartOpen}= useContext(MyStore);
  const [search, setSearch] = useState("");
const [category, setCategory] = useState("All");
const [sort, setSort] = useState("Featured");
  const getproduct = async () => {
    try{
      let res=  await axios.get("https://dummyjson.com/products");
      setProduct(res.data.products);
    }catch(err){
        console.log(err);
    }
  }

  useEffect(()=>{
    getproduct()
  },[])
let filteredProducts = product.filter((item) => {
  const matchSearch = item.title
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchCategory =
    category === "All" || item.category === category;

  return matchSearch && matchCategory;
});

// Sorting
if (sort === "Price Low") {
  filteredProducts.sort((a, b) => a.price - b.price);
}

if (sort === "Price High") {
  filteredProducts.sort((a, b) => b.price - a.price);
}

if (sort === "Newest") {
  filteredProducts.sort((a, b) => b.id - a.id);
}

  return (
    <div  className={`transition-all duration-300 ${
    isCartOpen ? "blur-sm pointer-events-none" : ""
  }`}
>

   <div className="min-h-screen bg-[#0b0b0b] text-white px-6 lg:px-14 py-10">
      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-5xl font-bold">All Products</h1>
        <p className="text-gray-400 mt-2">
          {product.length} Products Found
        </p>
      </div>

      {/* Search + Filter */}
      <div className="border border-zinc-700 rounded-2xl p-4 mb-10">
        <div className="flex flex-col lg:flex-row gap-4">

          {/* Search */}
          <div className="flex-1 relative">
            <FiSearch
              className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
              size={20}
            />

          <input
  type="text"
  placeholder="Search Products..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="w-full bg-[#1b1b1b] border border-zinc-700 rounded-xl pl-14 pr-4 py-4 outline-none focus:border-lime-400"
/>
          </div>

          {/* Category */}
          <div className="relative">
            <select
  value={category}
  onChange={(e) => setCategory(e.target.value)}
  className="appearance-none bg-[#1b1b1b] border border-zinc-700 rounded-xl px-5 py-4 pr-12 outline-none cursor-pointer"
>
  <option value="All">All Categories</option>
  <option value="beauty">Beauty</option>
  <option value="fragrances">Fragrances</option>
  <option value="furniture">Furniture</option>
  <option value="groceries">Groceries</option>
</select>

            <IoChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>

          {/* Sort */}
          <div className="relative">
           <select
  value={sort}
  onChange={(e) => setSort(e.target.value)}
  className="appearance-none bg-[#1b1b1b] border border-zinc-700 rounded-xl px-5 py-4 pr-12 outline-none cursor-pointer"
>
  <option>Featured</option>
  <option>Price Low</option>
  <option>Price High</option>
  <option>Newest</option>
</select>

            <IoChevronDown
              className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none"
            />
          </div>

        </div>
      </div>

      {/* Products */}
      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        xl:grid-cols-4
        2xl:grid-cols-5
        gap-8
      "
      >
      {filteredProducts.map((pro) => (
          <ProductCard key={pro.id} product={pro} />
        ))}
      </div>
    </div>

      
    </div>
  )
}

export default Shop
