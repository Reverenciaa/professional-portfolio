import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => { 
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }, [menuOpen]);

    // Smooth scroll function
    const smoothScrollTo = (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        setAboutDropdownOpen(false); // Close dropdown
    };

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-yellow/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-14">
                    <button 
                        onClick={() => smoothScrollTo('home')} 
                        className="font-mono text-xl font-bold text-white cursor-pointer"
                    >
                        christopherson<span className="text-yellow-500">.labios</span>
                    </button>

                    <div className="w-7 h-4 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(prev => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <button 
                            onClick={() => smoothScrollTo('home')}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Home
                        </button>
                        
                        {/* About Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setAboutDropdownOpen(true)}
                            onMouseLeave={() => setAboutDropdownOpen(false)}
                        >
                            <button 
                                onClick={() => smoothScrollTo('about')}
                                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 py-2 cursor-pointer"
                            >
                                About
                                <svg 
                                    className={`w-4 h-4 transition-transform ${aboutDropdownOpen ? 'rotate-180' : ''}`}
                                    fill="none" 
                                    stroke="currentColor" 
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            
                            {/* Dropdown Menu */}
                            {aboutDropdownOpen && (
                                <div className="absolute top-full left-0 pt-1 w-48">
                                    <div className="bg-black/90 backdrop-blur-lg border border-yellow-500/20 rounded-lg shadow-lg overflow-hidden">
                                        <button 
                                            onClick={() => smoothScrollTo('education')}
                                            className="w-full text-left block px-4 py-3 text-gray-300 hover:text-white hover:bg-yellow-500/10 transition-colors border-b border-yellow-500/10 cursor-pointer"
                                        >
                                            <span className="flex items-center gap-2">
                                                <span className="text-lg">🎓</span>
                                                Education
                                            </span>
                                        </button>
                                        <button 
                                            onClick={() => smoothScrollTo('work-experience')}
                                            className="w-full text-left block px-4 py-3 text-gray-300 hover:text-white hover:bg-yellow-500/10 transition-colors cursor-pointer"
                                        >
                                            <span className="flex items-center gap-2">
                                                <span className="text-lg">💼</span>
                                                Work Experience
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>

                        <button 
                            onClick={() => smoothScrollTo('certifications')}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Certifications
                        </button>
                        <button 
                            onClick={() => smoothScrollTo('projects')}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Projects
                        </button>
                        <button 
                            onClick={() => smoothScrollTo('contact')}
                            className="text-gray-300 hover:text-white transition-colors cursor-pointer"
                        >
                            Contact
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
}

