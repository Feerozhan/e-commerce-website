import React from 'react';
import ProductCard from './ProductCard';

export default function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6">
      {products.map((product) => (
        <div 
          key={product.id} 
          className="group relative transition-all duration-300 hover:z-10"
        >
          <ProductCard 
            product={product}
            className="group-hover:shadow-lg group-hover:-translate-y-1 transition-all duration-300"
          />
          {/* Quick view button that appears on hover */}
          <button 
            className="absolute bottom-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 
                      bg-white text-gray-900 font-medium py-2 px-4 rounded-full shadow-md 
                      transition-opacity duration-300 hover:bg-gray-100 whitespace-nowrap"
            onClick={() => console.log('Quick view', product.id)}
          >
            Quick View
          </button>
        </div>
      ))}
    </div>
  );
}