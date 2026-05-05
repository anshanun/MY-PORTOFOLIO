import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Feedback from './components/Feedback'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Features />
        <Services />
        <About />
        <Portfolio />
        <Feedback />
      </main>
      <Footer />
    </div>
  )
}

export default App
