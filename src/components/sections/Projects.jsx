import { RevealOnScroll } from '../RevealOnScroll';
import { useState, useEffect } from 'react';
import { getProjects } from '../../services/api';

export const Projects = () => {

    const [projects, setProjects] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProjects = async () => {
            try{
                const projectData = await getProjects();
                setProjects(projectData);
            }
            catch (error) {
                console.error("Error fetching projects:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchProjects();
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === projects.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? projects.length - 1 : prevIndex - 1
        );
    };

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    if(loading){
        return (
            <section id="projects" className="min-h-screen flex items-center justify-center">
                <div className='text-xl'>
                    Loading projects...
                </div>
            </section>
        );
    }

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 snap-start">
            <RevealOnScroll>
                <div className="w-full max-w-7xl mx-auto">
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-8 lg:mb-12 bg-gradient-to-r from-yellow-500 to-fuchsia-600 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    
                    <div className="relative max-w-6xl mx-auto">
                        <div className="overflow-hidden rounded-xl">
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {projects.map((project) => (
                                    <div key={project.id} className="w-full flex-shrink-0 px-2 sm:px-3 md:px-4">
                                        <div className="glass rounded-xl p-4 sm:p-6 md:p-8 border-white/10 border hover:border-white/20 transition-all duration-300 h-full">
                                            <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 items-center h-full">
                                                <div className="relative group order-2 lg:order-1 w-full">
                                                    <img 
                                                        src={project.image} 
                                                        alt={project.title}
                                                        className="w-full h-40 sm:h-48 md:h-56 lg:h-64 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                                <div className="space-y-3 sm:space-y-4 md:space-y-6 order-1 lg:order-2 w-full flex flex-col justify-center">
                                                    <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white text-center lg:text-left">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base md:text-lg text-center lg:text-left">
                                                        {project.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                                                        {project.technologies.map((tech, index) => (
                                                            <span 
                                                                key={index}
                                                                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gradient-to-r from-yellow-500/20 to-fuchsia-600/20 border border-yellow-500/30 rounded-full text-yellow-300 hover:-translate-y-1 transition-all duration-300"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="flex justify-center lg:justify-start pt-2 sm:pt-3 md:pt-4">
                                                        <a 
                                                            href={project.githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 bg-gradient-to-r from-yellow-500 to-fuchsia-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
                                                        >
                                                            View Project
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Navigation Buttons */}
                        <button 
                            onClick={prevSlide}
                            className="absolute left-1 sm:left-2 md:left-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="absolute right-1 sm:right-2 md:right-4 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
                        >
                            <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Pagination Dots */}
                        <div className="flex justify-center mt-4 sm:mt-6 md:mt-8 space-x-2 md:space-x-3">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'w-4 sm:w-6 md:w-8 h-2 sm:h-2.5 md:h-3 bg-gradient-to-r from-yellow-500 to-fuchsia-600 scale-110' 
                                            : 'w-2 sm:w-2.5 md:w-3 h-2 sm:h-2.5 md:h-3 bg-white/30 hover:bg-white/50 hover:scale-110'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
        </section>
    )
};