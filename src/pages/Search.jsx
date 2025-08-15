import React from "react";
import { useLocation } from "react-router-dom";
import products from "../data/products.json";
import ProductCard from "../components/product/ProductCard"; 

export default function Search() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const query = params.get("q")?.toLowerCase() || "";

  const results = products.filter(
    (p) =>
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Title */}
      <h1 className="text-2xl font-extrabold text-gray-900 mb-6 border-b pb-2">
        Search Results for:{" "}
        <span className="text-amber-500">"{query}"</span>
      </h1>

      {/* Results */}
      {results.length > 0 ? (
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 animate-fadeIn"
        >
          {results.map((product, index) => (
            <div
              key={product.id}
              style={{ animationDelay: `${index * 0.1}s` }}
              className="opacity-0 animate-slideUp"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center animate-fadeIn">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4076/4076549.png"
            alt="No results"
            className="w-28 h-28 mb-4 opacity-80"
          />
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            No products found
          </h2>
          <p className="text-gray-500 mb-6">
            Try searching with different keywords or browse our collections.
          </p>
          <a
            href="/collections"
            className="px-6 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600 transition"
          >
            Browse Collections
          </a>
        </div>
      )}
    </div>
  );
}
