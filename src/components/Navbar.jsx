import { useEffect, useState } from "react";

export const Navbar = ({ menuOpen, setMenuOpen }) => { 
    const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
    }, [menuOpen]);

    return (
        <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-yellow/10 shadow-lg">
            <div className="max-w-5xl mx-auto px-4">
                <div className="flex justify-between items-center h-14">
                    <a href="#home" className="font-mono text-xl font-bold text-white">
                        christopherson<span className="text-yellow-500">.labios</span>
                    </a>

                    <div className="w-7 h-4 relative cursor-pointer z-40 md:hidden" onClick={() => setMenuOpen(prev => !prev)}>
                        &#9776;
                    </div>

                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-300 hover:text-white transition-colors">Home</a>
                        
                        {/* About Dropdown */}
                        <div 
                            className="relative"
                            onMouseEnter={() => setAboutDropdownOpen(true)}
                            onMouseLeave={() => setAboutDropdownOpen(false)}
                        >
                            <a 
                                href="#about" 
                                className="text-gray-300 hover:text-white transition-colors flex items-center gap-1 py-2"
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
                            </a>
                            
                            {/* Dropdown Menu - No gap */}
                            {aboutDropdownOpen && (
                                <div className="absolute top-full left-0 pt-1 w-48"> {/* Added pt-1 for seamless hover */}
                                    <div className="bg-black/90 backdrop-blur-lg border border-yellow-500/20 rounded-lg shadow-lg overflow-hidden">
                                        <a 
                                            href="#education" 
                                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-yellow-500/10 transition-colors border-b border-yellow-500/10"
                                            onClick={() => setAboutDropdownOpen(false)} // Close on click
                                        >
                                            <span className="flex items-center gap-2">
                                                <span className="text-lg">🎓</span>
                                                Education
                                            </span>
                                        </a>
                                        <a 
                                            href="#work-experience" 
                                            className="block px-4 py-3 text-gray-300 hover:text-white hover:bg-yellow-500/10 transition-colors"
                                            onClick={() => setAboutDropdownOpen(false)} // Close on click
                                        >
                                            <span className="flex items-center gap-2">
                                                <span className="text-lg">💼</span>
                                                Work Experience
                                            </span>
                                        </a>
                                    </div>
                                </div>
                            )}
                        </div>

                        <a href="#certifications" className="text-gray-300 hover:text-white transition-colors">Certifications</a>
                        <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
                        <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

