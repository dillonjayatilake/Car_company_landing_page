import { useState } from 'react'
import { motion } from 'framer-motion'
import Hyundai from '../assets/hyundai.jpg'
import Audi from '../assets/audi.jpg'

const BestSelling = () => {
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [sortBy, setSortBy] = useState('popular')

    const products = [
        {
          id: 1,
          name: "Hyundai",
          category: "sedan",
          price: "$75,000",
          originalPrice: "$82,000",
          image: Hyundai,
          badge: "Best Seller",
          specs: ["0-60: 3.2s", "400mi Range", "AWD"],
          rating: 4.8,
          reviews: 124
        },
        {
          id: 2,
          name: "Velocity X Luxury",
          category: "suv",
          price: "$85,000",
          originalPrice: "$90,000",
          image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          badge: "Trending",
          specs: ["0-60: 3.8s", "380mi Range", "7 Seats"],
          rating: 4.7,
          reviews: 89
        },
        {
          id: 3,
          name: "Velocity GT Pro",
          category: "sports",
          price: "$120,000",
          image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          badge: "Limited",
          specs: ["0-60: 2.9s", "350mi Range", "200mph"],
          rating: 4.9,
          reviews: 67
        },
        {
          id: 4,
          name: "Velocity E Compact",
          category: "electric",
          price: "$45,000",
          originalPrice: "$50,000",
          image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          badge: "Eco Choice",
          specs: ["0-60: 5.1s", "300mi Range", "FWD"],
          rating: 4.6,
          reviews: 203
        },
        {
          id: 5,
          name: "Audi",
          category: "sedan",
          price: "$95,000",
          image: Audi,
          badge: "Premium",
          specs: ["0-60: 4.2s", "420mi Range", "Luxury"],
          rating: 4.8,
          reviews: 56
        },
        {
          id: 6,
          name: "Velocity Adventure 4x4",
          category: "suv",
          price: "$78,000",
          originalPrice: "$85,000",
          image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
          badge: "Off-Road",
          specs: ["0-60: 4.5s", "350mi Range", "4WD"],
          rating: 4.7,
          reviews: 142
        }
      ]

      const categories = [
        { id: 'all', name: 'All Models' },
        { id: 'sedan', name: 'Sedan' },
        { id: 'suv', name: 'SUV' },
        { id: 'sports', name: 'Sports' },
        { id: 'electric', name: 'Electric' }
      ]

      const filteredProducts = products.filter(product => 
        selectedCategory === 'all' || product.category === selectedCategory
      )
    
      const sortedProducts = [...filteredProducts].sort((a, b) => {
        if (sortBy === 'popular') return b.rating - a.rating
        if (sortBy === 'price-low') return parseFloat(a.price.replace('$', '').replace(',', '')) - parseFloat(b.price.replace('$', '').replace(',', ''))
        if (sortBy === 'price-high') return parseFloat(b.price.replace('$', '').replace(',', '')) - parseFloat(a.price.replace('$', '').replace(',', ''))
        return 0
      })

      return (
        <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Best Selling Models
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular vehicles loved by customers worldwide
            </p>
          </motion.div>
  
          {/* Filters and Sort */}
          <div className="flex flex-col lg:flex-row justify-between items-center mb-8 gap-4">
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? 'bg-accent text-red-600'
                      : 'bg-white text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
  
            {/* Sort Dropdown */}
            <div className="flex items-center gap-4">
              <span className="text-gray-600">Sort by:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-accent focus:border-transparent"
              >
                <option value="popular">Most Popular</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
  
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      product.badge === 'Best Seller' 
                        ? 'bg-red-500 text-white'
                        : product.badge === 'Trending'
                        ? 'bg-blue-500 text-white'
                        : product.badge === 'Limited'
                        ? 'bg-purple-500 text-white'
                        : product.badge === 'Eco Choice'
                        ? 'bg-green-500 text-white'
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
  
                  {/* Quick Actions */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors">
                      ❤️
                    </button>
                  </div>
                </div>
  
                {/* Product Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {product.name}
                  </h3>
  
                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex text-yellow-400">
                      {"★".repeat(Math.floor(product.rating))}
                      {"☆".repeat(5 - Math.floor(product.rating))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
  
                  {/* Specs */}
                  <div className="flex gap-3 mb-4">
                    {product.specs.map((spec, idx) => (
                      <span
                        key={idx}
                        className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
  
                  {/* Price */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl font-bold text-gray-900">
                      {product.price}
                    </span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">
                        {product.originalPrice}
                      </span>
                    )}
                  </div>
  
                  {/* CTA Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 bg-accent hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                      Book Test Drive
                    </button>
                    <button className="px-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg transition-all duration-300">
                      ⚡
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
  
          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-white rounded-2xl p-8 shadow-lg"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-accent mb-2">10,000+</div>
                <div className="text-gray-600">Vehicles Sold</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">4.8/5</div>
                <div className="text-gray-600">Customer Rating</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-gray-600">Countries Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">24/7</div>
                <div className="text-gray-600">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      );
    
}

export default BestSelling