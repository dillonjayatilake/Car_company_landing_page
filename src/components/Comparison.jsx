import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const ComparisonTool = () => {
  const [selectedCars, setSelectedCars] = useState([0, 1])
  const [activeCategory, setActiveCategory] = useState('performance')

  const carModels = [
    {
      id: 1,
      name: "Velocity S Performance",
      price: "$75,000",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "sedan",
      badge: "Best Seller",
      specs: {
        performance: {
          acceleration: "3.2s",
          topSpeed: "155 mph",
          horsepower: "450 HP",
          torque: "487 lb-ft",
          drivingRange: "400 mi"
        },
        battery: {
          capacity: "85 kWh",
          chargeTime: "30 min",
          efficiency: "4.2 mi/kWh",
          warranty: "8 years"
        },
        features: {
          seating: "5 seats",
          cargo: "15 cu ft",
          display: "15\" Touchscreen",
          audio: "Premium 3D Sound",
          autonomy: "Level 2+"
        },
        dimensions: {
          length: "195 in",
          width: "77 in", 
          height: "56 in",
          wheelbase: "116 in",
          weight: "4,250 lbs"
        }
      },
      highlights: ["Perfect for Families", "Tech Leader", "Great Value"]
    },
    {
      id: 2,
      name: "Velocity X Luxury",
      price: "$85,000",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "suv",
      badge: "Family Choice",
      specs: {
        performance: {
          acceleration: "3.8s",
          topSpeed: "145 mph",
          horsepower: "420 HP",
          torque: "510 lb-ft",
          drivingRange: "380 mi"
        },
        battery: {
          capacity: "90 kWh",
          chargeTime: "35 min",
          efficiency: "3.8 mi/kWh",
          warranty: "8 years"
        },
        features: {
          seating: "7 seats",
          cargo: "18 cu ft",
          display: "17\" Touchscreen",
          audio: "3D Premium Plus",
          autonomy: "Level 3"
        },
        dimensions: {
          length: "198 in",
          width: "79 in",
          height: "68 in",
          wheelbase: "121 in",
          weight: "5,100 lbs"
        }
      },
      highlights: ["Spacious Interior", "Premium Comfort", "7 Seats"]
    },
    {
      id: 3,
      name: "Velocity GT Pro",
      price: "$120,000",
      image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "sports",
      badge: "Performance",
      specs: {
        performance: {
          acceleration: "2.9s",
          topSpeed: "200 mph",
          horsepower: "620 HP",
          torque: "650 lb-ft",
          drivingRange: "350 mi"
        },
        battery: {
          capacity: "95 kWh",
          chargeTime: "25 min",
          efficiency: "3.5 mi/kWh",
          warranty: "10 years"
        },
        features: {
          seating: "4 seats",
          cargo: "12 cu ft",
          display: "12\" Digital Cluster",
          audio: "Racing Sound System",
          autonomy: "Level 2+"
        },
        dimensions: {
          length: "185 in",
          width: "76 in",
          height: "51 in",
          wheelbase: "108 in",
          weight: "4,000 lbs"
        }
      },
      highlights: ["Track Ready", "Exclusive Design", "Ultimate Speed"]
    },
    {
      id: 4,
      name: "Velocity E Compact",
      price: "$45,000",
      image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      category: "electric",
      badge: "Eco Friendly",
      specs: {
        performance: {
          acceleration: "5.1s",
          topSpeed: "130 mph",
          horsepower: "320 HP",
          torque: "360 lb-ft",
          drivingRange: "300 mi"
        },
        battery: {
          capacity: "65 kWh",
          chargeTime: "40 min",
          efficiency: "4.5 mi/kWh",
          warranty: "8 years"
        },
        features: {
          seating: "5 seats",
          cargo: "14 cu ft",
          display: "13\" Touchscreen",
          audio: "Premium Audio",
          autonomy: "Level 2"
        },
        dimensions: {
          length: "175 in",
          width: "72 in",
          height: "58 in",
          wheelbase: "108 in",
          weight: "3,800 lbs"
        }
      },
      highlights: ["Urban Perfect", "Budget Smart", "Easy Parking"]
    }
  ]

  const categories = [
    { id: 'performance', name: 'Performance', icon: '⚡' },
    { id: 'battery', name: 'Battery', icon: '🔋' },
    { id: 'features', name: 'Features', icon: '🎮' },
    { id: 'dimensions', name: 'Dimensions', icon: '📐' }
  ]

  const selectCar = (carIndex, side) => {
    const newSelectedCars = [...selectedCars]
    newSelectedCars[side] = carIndex
    setSelectedCars(newSelectedCars)
  }

  const getWinningSpec = (specKey) => {
    const leftCar = carModels[selectedCars[0]]
    const rightCar = carModels[selectedCars[1]]
    
    const leftValue = leftCar.specs[activeCategory][specKey]
    const rightValue = rightCar.specs[activeCategory][specKey]
    
    // Convert to numbers for comparison
    const leftNum = parseFloat(leftValue)
    const rightNum = parseFloat(rightValue)
    
    if (isNaN(leftNum) || isNaN(rightNum)) return null

    // Determine if higher or lower is better
    const higherIsBetter = ['horsepower', 'torque', 'topSpeed', 'drivingRange', 'capacity', 'efficiency', 'seating', 'cargo', 'warranty'].includes(specKey)
    const lowerIsBetter = ['acceleration', 'chargeTime', 'weight'].includes(specKey)

    if (higherIsBetter) {
      return leftNum > rightNum ? 'left' : leftNum < rightNum ? 'right' : null
    } else if (lowerIsBetter) {
      return leftNum < rightNum ? 'left' : leftNum > rightNum ? 'right' : null
    }

    return null
  }

  const CarCard = ({ car, side, isSelected }) => (
    <motion.div
      initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
      animate={{ opacity: 1, x: 0 }}
      className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 transition-all duration-300 ${
        isSelected ? 'border-accent' : 'border-transparent'
      }`}
    >
      {/* Car Image and Basic Info */}
      <div className="relative">
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
            {car.badge}
          </span>
        </div>
      </div>

      {/* Car Details */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{car.name}</h3>
        <p className="text-2xl font-bold text-accent mb-4">{car.price}</p>
        
        {/* Highlights */}
        <div className="flex flex-wrap gap-2 mb-6">
          {car.highlights.map((highlight, idx) => (
            <span
              key={idx}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
            >
              {highlight}
            </span>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">
              {car.specs.performance.acceleration}
            </div>
            <div className="text-sm text-gray-600">0-60 mph</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-bold text-gray-900">
              {car.specs.performance.drivingRange}
            </div>
            <div className="text-sm text-gray-600">Range</div>
          </div>
        </div>

        {/* Select Button */}
        <select
          value={selectedCars[side]}
          onChange={(e) => selectCar(parseInt(e.target.value), side)}
          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent focus:border-transparent"
        >
          {carModels.map((model, index) => (
            <option key={model.id} value={index}>
              {model.name} - {model.price}
            </option>
          ))}
        </select>
      </div>
    </motion.div>
  )

  const SpecRow = ({ label, leftValue, rightValue, specKey }) => {
    const winner = getWinningSpec(specKey)
    
    return (
      <div className="grid grid-cols-12 gap-4 py-4 border-b border-gray-100 hover:bg-gray-50">
        <div className="col-span-4 font-medium text-gray-700 capitalize">
          {label.replace(/([A-Z])/g, ' $1').trim()}
        </div>
        <div className={`col-span-4 text-center font-semibold rounded-lg py-2 transition-all duration-300 ${
          winner === 'left' ? 'bg-green-100 text-green-800 ring-2 ring-green-200' : 'text-gray-900'
        }`}>
          {leftValue}
          {winner === 'left' && <span className="ml-2">🏆</span>}
        </div>
        <div className={`col-span-4 text-center font-semibold rounded-lg py-2 transition-all duration-300 ${
          winner === 'right' ? 'bg-green-100 text-green-800 ring-2 ring-green-200' : 'text-gray-900'
        }`}>
          {rightValue}
          {winner === 'right' && <span className="ml-2">🏆</span>}
        </div>
      </div>
    )
  }

  return (
    <section className="py-20 bg-blue-950">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Compare Models
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Side-by-side comparison to help you choose the perfect vehicle
          </p>
        </motion.div>

        {/* Main Comparison Layout */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
          {/* Left Car Card */}
          <div className="xl:col-span-5">
            <CarCard 
              car={carModels[selectedCars[0]]} 
              side={0}
              isSelected={true}
            />
          </div>

          {/* VS Separator - Only on large screens */}
          <div className="hidden xl:flex xl:col-span-2 items-center justify-center">
            
          </div>

          {/* Right Car Card */}
          <div className="xl:col-span-5">
            <CarCard 
              car={carModels[selectedCars[1]]} 
              side={1}
              isSelected={true}
            />
          </div>
        </div>

        {/* Comparison Details */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          {/* Category Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex overflow-x-auto">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-8 py-4 font-medium transition-all duration-300 whitespace-nowrap ${
                    activeCategory === category.id
                      ? 'text-accent border-b-2 border-accent'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <span className="text-lg mr-3">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>

          {/* Specs Comparison */}
          <div className="p-6">
            {/* Header Row */}
            <div className="grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 font-semibold text-gray-900">
              <div className="col-span-4">Specification</div>
              <div className="col-span-4 text-center">{carModels[selectedCars[0]].name}</div>
              <div className="col-span-4 text-center">{carModels[selectedCars[1]].name}</div>
            </div>

            {/* Spec Rows */}
            <div className="divide-y divide-gray-100">
              {Object.entries(carModels[0].specs[activeCategory]).map(([specKey, specValue]) => (
                <SpecRow
                  key={specKey}
                  label={specKey}
                  leftValue={carModels[selectedCars[0]].specs[activeCategory][specKey]}
                  rightValue={carModels[selectedCars[1]].specs[activeCategory][specKey]}
                  specKey={specKey}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="px-8 py-4 bg-accent hover:bg-red-700 text-white rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
            Book Test Drives
          </button>
          <button className="px-8 py-4 border-2 border-gray-300 hover:border-gray-400 text-gray-700 rounded-lg font-semibold text-lg transition-all duration-300">
            Download Comparison
          </button>
          <button className="px-8 py-4 border-2 border-blue-300 hover:border-blue-400 text-blue-600 rounded-lg font-semibold text-lg transition-all duration-300">
            Contact Sales
          </button>
        </motion.div>

        {/* Quick Tip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-center"
        >
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <span className="text-green-600">🏆</span>
            Green highlighted specs indicate better performance
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ComparisonTool