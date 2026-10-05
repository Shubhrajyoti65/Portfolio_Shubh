import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Projects from './sections/Projects'
import { Experiences } from './sections/Experiences'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

function App() {
  const location = useLocation();

  // Handle hash-based scroll when navigating homepage sections
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        // Small delay lets the DOM settle after route transition
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className='container mx-auto max-w-7xl w-full overflow-x-hidden min-h-screen'>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Experiences />
      <Contact />
      <Footer />
    </div>
  )
}

export default App