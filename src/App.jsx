import { useEffect, useState, lazy } from 'react'
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import './index.css'

const Home = lazy(() => import('./components/sections/Home').then(module => ({ default: module.Home })))
const About = lazy(() => import('./components/sections/About').then(module => ({ default: module.About })))
const Certifications = lazy(() => import('./components/sections/Certifications').then(module => ({ default: module.Certifications })))
const Projects = lazy(() => import('./components/sections/Projects').then(module => ({ default: module.Projects })))
const Contact = lazy(() => import('./components/sections/Contact').then(module => ({ default: module.Contact })))
const Footer = lazy(() => import('./components/sections/Footer').then(module => ({ default: module.Footer })))

function App() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect (() => {
    const handleScroll = (event) => {
      const scrollTop = event.target.scrollTop;
      if(scrollTop > 300){
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }
    
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, [isLoaded])

  const scrollToTop = () => {
    const scrollContainer = document.querySelector('.scroll-container');
    if (scrollContainer) {
      scrollContainer.scrollTo({top: 0, behavior: 'smooth'});
    }
  }

  return (
   <>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)}/>}{" "}
      <div className ={`min-h-screen transition-opacity duration-700 ${
        isLoaded ? 'opacity-100' : 'opacity-0'} 
        bg-black text-gray-100 relative overflow-hidden snap-y snap-mandatory`}>

        <div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-180 h-180 bg-gradient-to-r from-yellow-500/20 to-fuchsia-500/20 rounded-full filter blur-3xl z-0'></div>
          <div className='scroll-container relative z-10 h-screen overflow-y-auto snap-y snap-mandatory'>  
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
              className='bottom-16 right-16 fixed z-50 p-4 text-white border border-white rounded-lg hover:scale-110 transition-all'
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
