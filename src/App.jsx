import { useEffect, useState } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Certifications } from './components/sections/Certifications'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/sections/Footer'
import './index.css'

const Home = lazy(() => import('./components/sections/Home'))
const About = lazy(() => import('./components/sections/About'))
const Certifications = lazy(() => import('./components/sections/Certifications'))
const Projects = lazy(() => import('./components/sections/Projects'))
const Contact = lazy(() => import('./components/sections/Contact'))
const Footer = lazy(() => import('./components/sections/Footer'))

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect (() => {
    const handleScroll = () => {
      if(window.scrollY > 300){
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  }

  return (
   <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "}
      <div className ={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? 'opacity-100' : 'opacity-0'} 
        bg-black text-gray-100 relative overflow-hidden snap-y snap-mandatory`}>

        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-180 h-180 bg-gradient-to-r from-yellow-500/20 to-fuchsia-500/20 rounded-full filter blur-3xl z-0'></div>
          <div className='relative z-10 h-screen overflow-y-auto snap-y snap-mandatory'>  
            <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
            <div className="snap-start"><Home /></div>
            <div className="snap-start"><About /></div>
            <div className="snap-start"><Certifications /></div>
            <div className="snap-start"><Projects /></div>
            <div className="snap-start"><Contact /></div>
            <div className="snap-start"><Footer /></div>
          </div>
          {showScrollTop && (
            <button 
              onClick={scrollToTop}
              className='bottom-16 right-16 fixed z-50 p-4 text-white border border-color-white rounded-lg hover:scale-110 transition-all'
              aria-label="Scroll to top"
            >
              ↑
            </button>
          )}
      </div>
   </>
  )
}


export default App
