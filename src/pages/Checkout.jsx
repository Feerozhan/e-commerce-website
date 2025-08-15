import React, { useState } from 'react';
import { useCart } from '../contexts/CartContext';
import { useNavigate } from 'react-router-dom';
import { formatCurrency } from '../utils/format';
import { FiCheckCircle, FiShoppingBag, FiCalendar, FiMapPin, FiPhone, FiUser } from 'react-icons/fi';

export default function Checkout() {
  const { cart, total, clearCart } = useCart();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [orderDetails, setOrderDetails] = useState(null);
  const [form, setForm] = useState({
    name: '',
    address: '',
    city: '',
    phone: '',
    email: ''
  });

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const orderData = {
        ...form,
        items: cart,
        total,
        orderDate: new Date().toLocaleString(),
        orderId: `ORD-${Math.floor(Math.random() * 1000000)}`
      };
      
      setOrderDetails(orderData);
      setLoading(false);
      setOrderSuccess(true);
      clearCart();
    }, 1200);
  }

  if (orderSuccess) {
    return (
      <div className="container mx-auto py-12 px-4 max-w-4xl">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Order Confirmation Header */}
          <div className="bg-green-50 p-6 text-center border-b">
            <FiCheckCircle className="mx-auto text-5xl text-green-500 mb-4" />
            <h1 className="text-2xl font-bold text-gray-800 mb-2">Order Placed Successfully!</h1>
            <p className="text-gray-600">Thank you for your purchase. Your order details are below.</p>
          </div>
          
          {/* Order Details */}
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Customer Info */}
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <FiUser className="mr-2" /> Customer Information
                </h3>
                <div className="space-y-3">
                  <p><span className="font-medium">Name:</span> {orderDetails.name}</p>
                  <p><span className="font-medium">Phone:</span> {orderDetails.phone}</p>
                  <p><span className="font-medium">Email:</span> {orderDetails.email}</p>
                  <p className="flex items-start">
                    <FiMapPin className="mr-2 mt-1 flex-shrink-0" />
                    <span>{orderDetails.address}, {orderDetails.city}</span>
                  </p>
                </div>
              </div>
              
              {/* Order Info */}
              <div className="bg-gray-50 p-5 rounded-lg">
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <FiShoppingBag className="mr-2" /> Order Summary
                </h3>
                <div className="space-y-3">
                  <p className="flex justify-between">
                    <span className="font-medium">Order ID:</span>
                    <span className="font-mono">{orderDetails.orderId}</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Date:</span>
                    <span className="flex items-center">
                      <FiCalendar className="mr-1" /> {orderDetails.orderDate}
                    </span>
                  </p>
                  <p className="flex justify-between border-t pt-3 mt-3">
                    <span className="font-medium">Total:</span>
                    <span className="font-bold text-lg">{formatCurrency(orderDetails.total)}</span>
                  </p>
                </div>
              </div>
            </div>
            
            {/* Order Items */}
            <div className="mt-8">
              <h3 className="font-semibold text-lg mb-4">Order Items</h3>
              <div className="border rounded-lg overflow-hidden">
                {orderDetails.items.map(item => (
                  <div key={item.id} className="p-4 border-b last:border-b-0 flex justify-between items-center">
                    <div>
                      <p className="font-medium">{item.title}</p>
                      <p className="text-sm text-gray-500">Qty: {item.qty} | {formatCurrency(item.price)} each</p>
                    </div>
                    <p className="font-medium">{formatCurrency(item.price * item.qty)}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Continue Shopping Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => navigate('/')}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Checkout Form */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Shipping Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                required
                value={form.name}
                onChange={e => setForm({...form, name: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                required
                type="tel"
                value={form.phone}
                onChange={e => setForm({...form, phone: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="md:col-span-2 space-y-1">
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                required
                type="email"
                value={form.email}
                onChange={e => setForm({...form, email: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="md:col-span-2 space-y-1">
              <label className="block text-sm font-medium text-gray-700">Street Address</label>
              <input
                required
                value={form.address}
                onChange={e => setForm({...form, address: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div className="space-y-1">
              <label className="block text-sm font-medium text-gray-700">City</label>
              <input
                required
                value={form.city}
                onChange={e => setForm({...form, city: e.target.value})}
                className="w-full border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
          
          <button
            disabled={loading}
            className={`mt-8 w-full py-3 px-6 rounded-md font-medium text-white transition-colors ${
              loading ? 'bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? 'Processing Order...' : 'Place Order'}
          </button>
        </form>
        
        {/* Order Summary */}
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
          
          <div className="space-y-4">
            {cart.map(item => (
              <div key={item.id} className="flex justify-between items-start border-b pb-4">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                </div>
                <p className="font-medium">{formatCurrency(item.price * item.qty)}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-6 pt-4 border-t">
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>{formatCurrency(total)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}