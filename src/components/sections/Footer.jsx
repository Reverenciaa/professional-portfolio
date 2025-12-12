import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
    return (
        <footer className="w-full py-6 border-t border-white/10 mt-12">
            <div className="max-w-7xl mx-auto px-4 mb-6 text-gray-400 text-sm flex flex-col md:flex-row justify-center items-center">
                <div>
                    <h3 className="font-medium mb-2 text-center">Connect with Me</h3>
                    <div className="space-y-1 flex flex-row gap-8 justify-center items-center md:items-start mt-4">
                        <a href="https://www.linkedin.com/in/christopherson-labios-967705254/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                            <FaLinkedin className="inline mr-2 items-center justify-center" />
                            <span>LinkedIn</span>
                        </a>
                        <a href="https://github.com/Reverenciaa/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                            <FaGithub className="inline mr-2 items-center justify-center" />
                            <span>Github</span>
                        </a>
                        <a href="https://www.linkedin.com/in/christopherson-labios-967705254/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                            <FaFacebook className="inline mr-2 items-center justify-center" />
                            <span>Facebook</span>
                        </a>
                        <a href="https://www.linkedin.com/in/christopherson-labios-967705254/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 hover:text-white transition-colors">
                            <FaInstagram className="inline mr-2 items-center justify-center" />
                            <span>Instagram</span>
                        </a>
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-4 text-center text-gray-400 text-sm">
                &copy; {new Date().getFullYear()} Christopherson Labios. All rights reserved.
            </div>
        </footer>   
    )
}