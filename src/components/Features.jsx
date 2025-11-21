import { motion } from 'framer-motion'

const Features = () => {
  const features = [
    {
      icon: "⚡",
      title: "Electric Power",
      description: "Instant torque and zero emissions with our advanced electric powertrains."
    },
    {
      icon: "🔧",
      title: "Smart Technology",
      description: "AI-powered features and seamless connectivity for the modern driver (Includes Car tracking system)."
    },
    {
      icon: "🛡️",
      title: "Safety First",
      description: "Advanced safety systems and autonomous driving capabilities."
    },
    {
      icon: "🌱",
      title: "Sustainable",
      description: "Eco-friendly materials and manufacturing processes."
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Innovation, performance, and sustainability combined in every vehicle we create.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-8 rounded-2xl shadow-lg text-center group hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features