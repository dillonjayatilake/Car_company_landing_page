import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import Models from './components/Models'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import BestSelling from './components/BestSelling'
import Comparison from './components/Comparison'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => setIsLoading(false), 2000)
  }, [])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="animate-pulse text-white text-2xl font-bold">
          DILLON MOTORS
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Features />
      <Models />
      <BestSelling/>
      <Testimonials />
      <Contact />
      <Footer />

    </div>
  )
}

export default App