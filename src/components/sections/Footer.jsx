import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="w-full py-6 border-t border-white/10 mt-6">
            <div className="max-w-7xl mx-auto px-4 mb-3 text-gray-400 text-sm flex flex-col justify-center items-center">
                <div>
                    <h3 className="font-medium mb-2 text-center">Connect with Me</h3>
                    <div className="grid grid-cols-2 md:flex md:flex-row gap-4 md:gap-8 justify-center items-center">
                        <a href="https://www.linkedin.com/in/christopherson-labios-967705254/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:text-white transition-colors p-2">
                            <FaLinkedin className="text-lg md:text-xl" />
                            <span className="text-xs md:text-sm">LinkedIn</span>
                        </a>
                        <a href="https://github.com/Reverenciaa/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:text-white transition-colors p-2">
                            <FaGithub className="text-lg md:text-xl" />
                            <span className="text-xs md:text-sm">Github</span>
                        </a>
                        <a href="https://www.facebook.com/itsmelabiossi" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:text-white transition-colors p-2">
                            <FaFacebook className="text-lg md:text-xl" />
                            <span className="text-xs md:text-sm">Facebook</span>
                        </a>
                        <a href="https://www.instagram.com/itsmelabiossi/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2 hover:text-white transition-colors p-2">
                            <FaInstagram className="text-lg md:text-xl" />
                            <span className="text-xs md:text-sm">Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-xs md:text-sm">
                &copy; {new Date().getFullYear()} Christopherson Labios. All rights reserved.
            </div>
        </footer>   
    )
}