import React from 'react'
import { useLocation } from 'react-router-dom'
import products from '../data/products.json'
import ProductGrid from '../components/product/ProductGrid'

export default function Collections() {
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const category = params.get('category')

  const filteredProducts = category
    ? products.filter(p => p.category.toLowerCase() === category.toLowerCase())
    : products

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">
        {category ? category.charAt(0).toUpperCase() + category.slice(1) : 'All'} Collections
      </h1>
      <ProductGrid products={filteredProducts} />
    </div>
  )
}
