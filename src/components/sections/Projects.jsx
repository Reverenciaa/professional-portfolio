import { useState } from 'react';
import { RevealOnScroll } from '../RevealOnScroll';
import sentishopLogo from '/project-logo/sentishop-logo.png';
import geometryDashLogo from '/project-logo/geometry-dash.png';
import stockScraperLogo from '/project-logo/stock_scraper-demo.png';
export const Projects = () => {
    const projects = [
        {
            id: 1,
            title: "SentiShop: Multilingual Sentiment Analysis and Extractive Summarization of Lazada Product Reviews",
            description: "A web app that analyzes Lazada product reviews in English, Tagalog, and Taglish. It uses a fine-tuned XLM-RoBERTa for sentiment analysis and TextRank for summarization, helping users quickly grasp key insights.",
            image: sentishopLogo,
            technologies: ["Python", "Django", "XLM-RoBERTa", "NLP"],
            githubUrl: "https://github.com/The-Thesis-Gods/SentiShop"
        },
        {
            id: 2,
            title: "Geometry Dash Imitation Game",
            description: "An imitation of geometry dash developed in C++ using the freeglut library",
            image: geometryDashLogo,
            technologies: ["C++", "OpenGL", "FreeGLUT"],
            githubUrl: "https://github.com/Reverenciaa/geometry-dash-imitation"
        },
        {
            id: 3,
            title: "Stock Scraper",
            description: "A python script that automatically scrapes stock and crypto data using yfinance and BeautifulSoup",
            image: stockScraperLogo,
            technologies: ["Python", "yfinance", "BeautifulSoup"],
            githubUrl: "https://github.com/Reverenciaa/stock-data-scraper"
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

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

    return (
        <section id="projects" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-6xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-yellow-500 to-fuchsia-600 bg-clip-text text-transparent text-center">
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
                                        <div className="glass rounded-xl p-8 border-white/10 border hover:border-white/20 transition-all mx-2">
                                            <div className="grid md:grid-cols-2 gap-8 items-center">
                                                {/* Project Image */}
                                                <div className="relative group">
                                                    <img 
                                                        src={project.image} 
                                                        alt={project.title}
                                                        className="w-full h-64 object-contain rounded-lg transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                </div>

                                                {/* Project Details */}
                                                <div className="space-y-4">
                                                    <h3 className="text-2xl font-bold text-white">
                                                        {project.title}
                                                    </h3>
                                                    <p className="text-gray-300 leading-relaxed">
                                                        {project.description}
                                                    </p>

                                                    {/* Technologies */}
                                                    <div className="flex flex-wrap gap-2">
                                                        {project.technologies.map((tech, index) => (
                                                            <span 
                                                                key={index}
                                                                className="px-3 py-1 text-sm bg-gradient-to-r from-yellow-500/20 to-fuchsia-600/20 border border-yellow-500/30 rounded-full text-yellow-300 hover:-translate-y-1 transition-all"
                                                            >
                                                                {tech}
                                                            </span>
                                                        ))}
                                                    </div>

                                                    {/* Action Buttons */}
                                                    <div className="flex gap-4 pt-4">
                                                        <a 
                                                            href={project.githubUrl}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="px-6 py-2 bg-gradient-to-r from-yellow-500 to-fuchsia-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-fuchsia-500/25 transition-all duration-300 hover:-translate-y-1 transition-all"
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

                        {/* Navigation Arrows */}
                        <button 
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300 z-10"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-8 space-x-3">
                            {projects.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`rounded-full transition-all duration-300 ${
                                        index === currentIndex 
                                            ? 'w-8 h-3 bg-gradient-to-r from-yellow-500 to-fuchsia-600 scale-110' 
                                            : 'w-3 h-3 bg-white/30 hover:bg-white/50 hover:scale-110'
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