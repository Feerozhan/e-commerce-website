import React from 'react'
import { Link } from 'react-router-dom'
import { FiMail, FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Info */}
          <div className="space-y-4">
            <Link to="/" className="text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
              WearEdge
            </Link>
            <p className="text-gray-400">
              Premium denim & apparel for the modern lifestyle.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FiFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Shop</h4>
            <ul className="space-y-2">
              <li><Link to="/men" className="text-gray-400 hover:text-white transition-colors">Men's Collection</Link></li>
              <li><Link to="/women" className="text-gray-400 hover:text-white transition-colors">Women's Collection</Link></li>
              <li><Link to="/kids" className="text-gray-400 hover:text-white transition-colors">Kids' Collection</Link></li>
              <li><Link to="/new-arrivals" className="text-gray-400 hover:text-white transition-colors">New Arrivals</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Help</h4>
            <ul className="space-y-2">
              <li><Link to="/policy/returns" className="text-gray-400 hover:text-white transition-colors">Returns & Exchanges</Link></li>
              <li><Link to="/policy/shipping" className="text-gray-400 hover:text-white transition-colors">Shipping Info</Link></li>
              <li><Link to="/policy/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Contact Us</h4>
            <div className="flex items-start space-x-3 text-gray-400">
              <FiMail className="mt-1 flex-shrink-0" />
              <a href="mailto:WearEdge@gmail.com" className="hover:text-white transition-colors">
                WearEdge@gmail.com
              </a>
            </div>
            
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} WearEdge. All rights reserved.</p>
          <p className="mt-1">Premium fashion for everyone.</p>
        </div>
      </div>
    </footer>
  )
}