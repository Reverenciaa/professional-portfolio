import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4 ">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-fuchsia-600 bg-clip-text text-transparent leading-right">
                    Hi, I'm Christopherson Labios {/* reminder to replace this with integration to database*/}
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    I am a Computer Science student specializing in back-end programming and web development with 
                    experience in Python, Java, C++, and JavaScript. I aspire to become a developer who solves real-world
                    problems using my programming skills. {/* reminder to replace this with integration to database*/}
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-yellow-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        View Projects</a>
                    <a href="/professional-portfolio/Labios_Resume.pdf" target="_blank" rel="noopener noreferrer" className="border border-yellow-600/50 text-yellow-500 py-3 px-6 rounded font-medium transition-all duration-200  
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-yellow-500/10">
                        My Resume</a>                  
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}