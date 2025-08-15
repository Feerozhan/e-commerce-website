import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../contexts/CartContext'
import { formatCurrency } from '../utils/format'

export default function CartPage(){
  const { cart, updateQty, removeFromCart, total } = useCart()
  const navigate = useNavigate()

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>
          <Link to="/">Continue shopping</Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            {cart.map(item=> (
              <div key={item.id} className="flex items-center gap-4 border p-3 mb-3">
                <img src={item.image} className="w-24 h-24 object-contain" />
                <div className="flex-1">
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="text-sm">Size: {item.size}</p>
                </div>
                <div className="flex flex-col items-end gap-2">
                  <input type="number" min="1" value={item.qty} onChange={e=>updateQty(item.id, Number(e.target.value))} className="w-20 border p-1 rounded" />
                  <p className="font-semibold">{formatCurrency(item.price * item.qty)}</p>
                  <button onClick={()=>removeFromCart(item.id)} className="text-red-600 text-sm">Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="border p-4 rounded">
            <h2 className="font-semibold">Order Summary</h2>
            <div className="mt-4 flex justify-between"><span>Subtotal</span><span>{formatCurrency(total)}</span></div>
            <button onClick={()=>navigate('/checkout')} className="mt-4 w-full bg-accent text-white py-2 rounded">Checkout</button>
          </div>
        </div>
      )}
    </div>
  )
}
