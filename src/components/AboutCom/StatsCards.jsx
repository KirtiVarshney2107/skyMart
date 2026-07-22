import React from 'react'
   import { Package, Users, Star, Truck } from "lucide-react";

const StatsCards = () => {
 
 const stats = [
  {
    id: 1,
    icon: Package,
    number: "20K+",
    title: "Products",
  },
  {
    id: 2,
    icon: Users,
    number: "50K+",
    title: "Happy Customers",
  },
  {
    id: 3,
    icon: Star,
    number: "4.9",
    title: "Avg. Rating",
  },
  {
    id: 4,
    icon: Truck,
    number: "99%",
    title: "On-time Delivery",
  },
];
  return (
    <section className='py-12'>
<div className='max-w-6xl mx-auto px-5 '>

    <div className='grid grid-cols-1 sm: grid-cols-2 lg:grid-cols-4 gap-6'>
  {
    stats.map((item)=>{
        const Icon=item.icon;

        return (
              <div
                key={item.id}
                className="bg-[#1a2233] border border-gray-700 rounded-2xl p-8 text-center
                hover:border-lime-400 hover:-translate-y-2 transition-all duration-300"
              >
                <Icon className="mx-auto text-lime-400 mb-4" size={28} />

                <h2 className="text-white text-3xl font-bold">
                  {item.number}
                </h2>

                <p className="text-gray-400 mt-2">
                  {item.title}
                </p>

              </div>
             
        )
    })
  }
    </div>
    </div>
    </section>
    
  )
}

export default StatsCards;
