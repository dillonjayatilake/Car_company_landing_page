const Testimonials = () => {
    const testimonials = [
      {
        name: "Sarah Johnson",
        role: "Velocity S Owner",
        content: "The best car I've ever owned. The electric performance is incredible and the tech features are mind-blowing.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Michael Chen",
        role: "Velocity X Owner",
        content: "Perfect for my family. Spacious, safe, and the autonomous driving features make long trips a breeze.",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      },
      {
        name: "Emily Rodriguez",
        role: "Velocity GT Owner",
        content: "Pure driving pleasure. The acceleration is addictive and the design turns heads everywhere I go.",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
      }
    ]
  
    return (
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of satisfied Velocity Motors owners
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-2xl hover:bg-gray-750 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-accent text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex text-yellow-400 mt-4">
                  {"★".repeat(5)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  export default Testimonials