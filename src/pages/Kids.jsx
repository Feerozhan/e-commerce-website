// pages/Kids.jsx
import React from 'react';
import products from '../data/products.json';

import ProductCard from "../components/product/ProductCard";





export default function Kids() {
  const kidsProducts = products.filter(
    (p) => p.category.startsWith('kids/')
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Kids Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {kidsProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
