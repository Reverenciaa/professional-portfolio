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
        <section id="projects" className="min-h-screen flex items-center justify-center py-16 md:py-20 px-4">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-yellow-500 to-fuchsia-600 bg-clip-text text-transparent text-center">
                        Featured Projects
                    </h2>
                    
                    <div className="relative">
                        <div className="overflow-hidden rounded-xl">
                            <div 
                                className="flex transition-transform duration-500 ease-in-out"
                                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                            >
                                {projects.map((project) => (
                                    <div key={project.id} className="w-full flex-shrink-0">
                                        <div className="glass rounded-xl p-4 md:p-8 border-white/10 border hover:border-white/20 transition-all mx-1 md:mx-2">
                                            <div className="flex flex-col md:grid md:grid-cols-2 gap-4 md:gap-8 items-center">
                                                <div className="relative group order-2 md:order-1">
                                                    <img 
                                                        src={project.image} 
                                                        alt={project.title}
                                                        className="w-full h-48 md:h-64 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>
                                                <div className="space-y-3 md:space-y-4 order-1 md:order-2">
                                                    <h3 className="text-xl md:text-2xl font-bold text-white text-center md:text-left">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-gray-300 leading-relaxed text-sm md:text-base text-center md:text-left">
                                                        {project.description}
                                                    </p>
                                                    <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                                                        {project.technologies.map((tech, index) => (
                                                            <span 
                                                                key={index}
                                                                className="px-2 md:px-3 py-1 text-xs md:text-sm bg-gradient-to-r from-yellow-500/20 to-fuchsia-600/20 border border-yellow-500/30 rounded-full text-yellow-300 hover:-translate-y-1 transition-all"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>
                                                    <div className="flex justify-center md:justify-start pt-3 md:pt-4">
                                                        <a 
                                                            href={project.githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="px-4 md:px-6 py-2 bg-gradient-to-r from-yellow-500 to-fuchsia-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300 hover:-translate-y-1 text-sm md:text-base"
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

                        <button 
                            onClick={prevSlide}
                            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
                        >
                            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="flex justify-center mt-6 md:mt-8 space-x-2 md:space-x-3">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'w-6 md:w-8 h-2 md:h-3 bg-gradient-to-r from-yellow-500 to-fuchsia-600 scale-110' 
                                            : 'w-2 md:w-3 h-2 md:h-3 bg-white/30 hover:bg-white/50 hover:scale-110'
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