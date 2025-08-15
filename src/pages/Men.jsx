import React from 'react';
import products from '../data/products.json';
import ProductCard from '../components/product/ProductCard';

export default function Men() {
  // Fixed filtering to only show products where category STARTS WITH 'men/'
  const menProducts = products.filter(p => 
    p.category.toLowerCase().startsWith('men/')
  );

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center md:text-left">Men's Collection</h1>
      
      {menProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-500">No products available in the men's collection.</p>
        </div>
      )}
    </div>
  );
}