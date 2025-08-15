import React, { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import products from '../data/products.json'
import { useCart } from '../contexts/CartContext'
import { formatCurrency } from '../utils/format'

export default function ProductPage(){
  const { slug } = useParams()
  const product = products.find(p=> p.slug === slug)
  const [size, setSize] = useState(product?.sizes?.[0] || '')
  const [qty, setQty] = useState(1)
  const { addToCart } = useCart()
  const navigate = useNavigate()

  if(!product) return <div className="container py-8">Product not found</div>

  function handleAdd(){
    addToCart({ id: product.id, title: product.title, price: product.price, qty, image: product.images[0], size })
    navigate('/cart')
  }

  return (
    <div className="container py-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <img src={product.images[0]} alt={product.title} className="w-full object-contain" />
      </div>
      <div>
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="mt-2">{formatCurrency(product.price)}</p>
        <div className="mt-4">
          <label className="block text-sm">Size</label>
          <select value={size} onChange={e=>setSize(e.target.value)} className="border p-2 rounded mt-1">
            {product.sizes.map(s=> <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <label>Quantity</label>
          <input type="number" min="1" value={qty} onChange={e=>setQty(Number(e.target.value))} className="w-20 border p-2 rounded" />
        </div>
        <button onClick={handleAdd} className="mt-6 bg-accent text-white px-4 py-2 rounded">Add to cart</button>
        <div className="mt-6">
          <h3 className="font-semibold">Description</h3>
          <p className="mt-2 text-sm">{product.description}</p>
        </div>
      </div>
    </div>
  )
}
