import React from 'react'
import Navbar from '../components/HomeCom/Navbar'
import Hero from "../components/HomeCom/Hero";
import Stats from "../components/HomeCom/Stats";
import CategorySection from "../components/HomeCom/CategorySection";
import ProductList from "../components/HomeCom/ProductList";
import FeatureSection from "../components/HomeCom/FeatureSection";
import Bottom from "../components/AboutCom/Bottom";

const Home = () => {
  return (
   
        <div className="bg-[#0f111a] min-h-screen text-white">
      
      <Hero />
      <Stats />
      <CategorySection />
      <ProductList />
      <FeatureSection />
      <Bottom />
    </div>
    
  )
}

export default Home
