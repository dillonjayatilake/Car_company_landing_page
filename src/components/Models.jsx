import { useState } from 'react'

const Models = () => {
  const [activeModel, setActiveModel] = useState(0)
  
  const models = [
    {
      name: "BMW",
      type: "Sports Sedan",
      price: "$75,000",
      image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      specs: ["0-60: 3.2s", "Range: 400mi", "Top Speed: 155mph"]
    },
    {
      name: "Buggati",
      type: "SUV",
      price: "$85,000",
      image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      specs: ["0-60: 3.8s", "Range: 380mi", "7 Seats"]
    },
    {
      name: "Lamborghini",
      type: "Sports Coupe",
      price: "$120,000",
      image: "https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
      specs: ["0-60: 2.9s", "Range: 350mi", "Top Speed: 200mph"]
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Models
          </h2>
          <p className="text-xl text-gray-600">
            Discover the perfect vehicle for your lifestyle
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <img
                src={models[activeModel].image}
                alt={models[activeModel].name}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 text-white p-4 rounded-lg">
                <h3 className="text-2xl font-bold">{models[activeModel].name}</h3>
                <p className="text-accent">{models[activeModel].type}</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">
                {models[activeModel].name}
              </h3>
              <p className="text-2xl text-accent font-semibold">
                {models[activeModel].price}
              </p>
              
              <div className="space-y-3">
                {models[activeModel].specs.map((spec, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-gray-700">{spec}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 pt-6">
                <button className="bg-accent hover:bg-red-700 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Book Test Drive
                </button>
                <button className="border-2 border-gray-900 hover:bg-gray-900 text-gray-900 hover:text-white px-8 py-3 rounded-full font-semibold transition-all duration-300">
                  Learn More
                </button>
              </div>
            </div>

            <div className="flex space-x-4 mt-8">
              {models.map((model, index) => (
                <button
                  key={index}
                  onClick={() => setActiveModel(index)}
                  className={`text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    activeModel === index
                      ? 'border-accent bg-red-50'
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <h4 className="font-semibold">{model.name}</h4>
                  <p className="text-sm text-gray-600">{model.type}</p>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Models