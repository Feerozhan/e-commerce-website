import React from 'react';
import products from '../data/products.json';
import ProductCard from '../components/product/ProductCard';

export default function Women() {
  const womenProducts = products.filter(p =>
    p.category.toLowerCase().includes('women')
  );

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-6">Women's Collections</h1>
      {womenProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {womenProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products available for Women.</p>
      )}
    </div>
  );
}
