import React from 'react';
import { Link } from 'react-router-dom';
import { formatCurrency } from '../../utils/format';
import { FiStar } from 'react-icons/fi';

export default function ProductCard({ product }) {
  return (
    <div className="group relative border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${product.slug}`} className="block">
        {/* Image container with hover effects */}
        <div className="relative aspect-[4/5] bg-gray-50 flex items-center justify-center overflow-hidden">
          <img
            src={product.images[0]}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          
          {/* Quick view button (appears on hover) */}
          <button 
            className="absolute bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100
                      bg-white text-gray-900 font-medium py-2 px-4 rounded-full shadow-md 
                      transition-opacity duration-300 hover:bg-gray-100 whitespace-nowrap"
            onClick={(e) => {
              e.preventDefault();
              // Add quick view functionality here
              console.log('Quick view:', product.id);
            }}
          >
            Quick View
          </button>
          
          {/* Sale badge */}
          {product.compareAtPrice > 0 && (
            <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
              Sale
            </div>
          )}
        </div>

        {/* Product info */}
        <div className="p-4">
          <div className="flex justify-between items-start">
            <h3 className="text-sm font-medium text-gray-900 truncate flex-1">
              {product.title}
            </h3>
            {/* Rating */}
            <div className="flex items-center ml-2">
              <FiStar className="text-amber-400 fill-amber-400 w-4 h-4" />
              <span className="text-xs font-medium ml-1">{product.rating}</span>
            </div>
          </div>
          
          {/* Price section */}
          <div className="flex items-center gap-2 mt-1">
            <span className="font-semibold text-gray-900">
              {formatCurrency(product.price)}
            </span>
            
            {product.compareAtPrice > 0 && (
              <span className="text-sm line-through text-gray-500">
                {formatCurrency(product.compareAtPrice)}
              </span>
            )}
          </div>
          
          {/* Additional details (appear on hover) */}
          <div className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="text-xs text-gray-500 truncate">
              <span className="font-medium">Care:</span> {product.care}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              <span className="font-medium">Stock:</span> {product.stock > 0 
                ? `${product.stock} available` 
                : 'Out of stock'}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
}