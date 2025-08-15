import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '../../contexts/CartContext'
import { FiSearch, FiShoppingCart, FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const { cart } = useCart()
  const count = cart.reduce((s, i) => s + i.qty, 0)
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleKeyDown(e) {
    if (e.key === 'Enter' && searchTerm.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchTerm.trim())}`)
      setSearchTerm("")
      setMobileMenuOpen(false)
    }
  }

  return (
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${scrolled ? 'shadow-lg' : 'shadow-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">

          {/* Logo */}
          <Link 
            to="/" 
            className="text-2xl font-bold tracking-tight bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent"
          >
            WearEdge
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-700 hover:text-amber-500 font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              to="/collections"
              className="text-gray-700 hover:text-amber-500 font-medium transition-colors"
            >
              Collections
            </Link>
            <Link
              to="/men"
              className="text-gray-700 hover:text-amber-500 font-medium transition-colors"
            >
              Men
            </Link>
            <Link
              to="/women"
              className="text-gray-700 hover:text-amber-500 font-medium transition-colors"
            >
              Women
            </Link>
            <Link
              to="/kids"
              className="text-gray-700 hover:text-amber-500 font-medium transition-colors"
            >
              Kids
            </Link>
          </nav>

          {/* Search + Cart */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="relative">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="search"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent w-64"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            <Link
              to="/cart"
              className="relative p-2 text-gray-700 hover:text-amber-500 transition-colors"
              aria-label="Cart"
            >
              <FiShoppingCart size={20} />
              {count > 0 && (
                <span className="absolute -top-1 -right-1 text-xs bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                  {count}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-amber-500 focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-inner">
            <nav className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-amber-500 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/collections"
                className="text-gray-700 hover:text-amber-500 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Collections
              </Link>
              <Link
                to="/men"
                className="text-gray-700 hover:text-amber-500 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                to="/women"
                className="text-gray-700 hover:text-amber-500 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                to="/kids"
                className="text-gray-700 hover:text-amber-500 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Kids
              </Link>
            </nav>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <div className="relative mb-4">
                <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <Link
                to="/cart"
                className="flex items-center text-gray-700 hover:text-amber-500 font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="relative mr-2">
                  <FiShoppingCart size={20} />
                  {count > 0 && (
                    <span className="absolute -top-1 -right-1 text-xs bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center">
                      {count}
                    </span>
                  )}
                </span>
                Shopping Cart
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}