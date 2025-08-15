import React from 'react'
import HeroCarousel from '../components/common/HeroCarousel'
import ProductGrid from '../components/product/ProductGrid'
import products from '../data/products.json'

export default function Home(){
  const featured = products.slice(0,5)
  return (
    <div>
      <HeroCarousel />
      <section className="container py-8">
        <h2 className="text-xl font-semibold mb-4">Featured</h2>
        <ProductGrid products={featured} />
      </section>
    </div>
  )
}
