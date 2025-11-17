import Hero from './components/Hero'
import Converter from './components/Converter'
import Services from './components/Services'
import Extras from './components/Extras'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Hero />
      <Converter />
      <Services />
      <Extras />
      <Footer />
    </div>
  )
}

export default App
