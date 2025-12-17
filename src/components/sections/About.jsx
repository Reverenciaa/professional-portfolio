import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";
import { getSkills, getWorkExperience } from "../../services/api";

export const About = () => {
    const [skills, setSkills] = useState({ frontend: [], backend: [] });
    const [workExperience, setWorkExperience] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const skillsData = await getSkills();
                const workData = await getWorkExperience();
                setSkills(skillsData);
                setWorkExperience(workData);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-xl">Loading...</div>
            </div>
        );
    }

    return (
        <>
            <section id="about" className="min-h-screen flex items-center justify-center py-16 md:py-20 px-4 snap-start">
                <RevealOnScroll>
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-2xl md:text-4xl font-bold mb-6 md:mb-8 bg-gradient-to-r from-yellow-500 to-fuchsia-600 bg-clip-text text-transparent text-center">
                            About Me
                        </h2>

                        <div className="glass rounded-xl p-4 md:p-8 border-white/10 border hover:-translate-y-1 transition-all mb-6 md:mb-8">
                            <p className="text-gray-300 mb-6 md:mb-8 text-center text-base md:text-lg">
                                An aspiring software engineer with a passion for back-end programming and web development to create scalable applications and innovative solutions.
                            </p>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-fuchsia-500 bg-clip-text text-transparent">
                                        Frontend
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.frontend?.map((tech, key) => (
                                            <span key={key} className="bg-yellow-500/10 text-yellow-500 py-2 px-4 rounded-full text-sm hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(234,179,8,0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-yellow-500 bg-clip-text text-transparent">
                                        Backend
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.backend?.map((tech, key) => (
                                            <span key={key} className="bg-fuchsia-500/10 text-fuchsia-500 py-2 px-4 rounded-full text-sm hover:bg-fuchsia-500/20 hover:shadow-[0_2px_8px_rgba(217,70,239,0.2)] transition">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>

            <section id="education" className="min-h-screen flex items-center justify-center pt-16 pb-8 md:py-16 lg:py-20 px-4 snap-start">
                <RevealOnScroll>
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold mt-8 mb-6 md:mb-8 lg:mb-10 bg-gradient-to-r from-yellow-500 to-purple-500 bg-clip-text text-transparent text-center flex items-center justify-center gap-2 md:gap-3">
                            <span className="text-xl sm:text-2xl md:text-4xl bg-none text-yellow-500">🎓</span>
                            Education
                        </h2>
                        
                        <div className="p-4 md:p-6 lg:p-5 rounded-xl border-white/10 border hover:-translate-y-1 transition-all glass">
                            <div className="space-y-4 md:space-y-5 text-gray-300">
                                <div className="bg-black/20 rounded-lg p-4 md:p-5 lg:p-4 border border-yellow-500/20">
                                    <div className="text-xl md:text-2xl lg:text-xl font-bold text-white mb-2 md:mb-3 lg:mb-2">
                                        {skills.education?.course}
                                    </div>
                                    <div className="text-lg md:text-xl lg:text-lg text-yellow-400 font-medium mb-2 lg:mb-2">
                                        {skills.education?.specialization}
                                    </div>
                                    <div className="text-lg md:text-xl lg:text-lg text-amber-300 font-medium mb-2 md:mb-3 lg:mb-2">
                                        {skills.education?.school}
                                    </div>
                                    <div className="text-base md:text-lg lg:text-base text-gray-400 flex items-center gap-2">
                                        <span className="text-lg md:text-xl lg:text-lg">📅</span>
                                        {skills.education?.date}
                                    </div>
                                </div>
                                
                                <div className="bg-gray-900/40 rounded-lg p-4 md:p-5 lg:p-4">
                                    <h4 className="text-fuchsia-400 font-semibold text-lg md:text-xl lg:text-lg mb-3 md:mb-4 lg:mb-3 flex items-center gap-2">
                                        <span>📚</span>
                                        Relevant Coursework:
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 lg:gap-3">
                                        {skills.education?.relevantCoursework?.map((course, index) => (
                                            <div key={index} className="bg-black/30 rounded-lg p-3 md:p-4 lg:p-3 border border-purple-500/20">
                                                <span className="text-gray-200 text-base md:text-lg lg:text-base">{course}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </RevealOnScroll>
            </section>

            <section id="work-experience" className="min-h-screen flex items-center justify-center pt-20 pb-8 md:py-8 lg:py-12 px-4 snap-start">
                <RevealOnScroll>
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold lg:mt-8 mb-6 md:mb-8 lg:mb-10 bg-gradient-to-r from-yellow-500 to-purple-500 bg-clip-text text-transparent text-center flex items-center justify-center gap-2 md:gap-3">
                            <span className="text-xl sm:text-2xl md:text-4xl bg-none text-yellow-500">💼</span>
                            Work Experience
                        </h2>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6 max-w-5xl mx-auto">
                            {workExperience?.map((job, index) => (
                                <div key={job.id} className="p-4 md:p-6 lg:p-5 rounded-xl border-white/10 border hover:-translate-y-1 transition-all glass flex flex-col min-h-[280px] md:min-h-[320px] lg:min-h-[340px]"> 
                                    <div className="bg-black/20 rounded-lg p-4 md:p-5 lg:p-4 border border-yellow-500/20 mb-4 md:mb-5 lg:mb-4 flex-shrink-0"> 
                                        <div className="text-lg md:text-xl lg:text-lg font-bold text-white mb-2 md:mb-3 lg:mb-2">
                                            {job.title}
                                        </div>
                                        <div className="text-base md:text-lg lg:text-base text-amber-300 font-medium mb-2 md:mb-3 lg:mb-2">
                                            {job.company}
                                        </div>
                                        <div className="text-gray-400 text-sm md:text-base lg:text-sm flex items-center gap-2">
                                            <span>📅</span>
                                            {job.date}
                                        </div>
                                    </div>
                                    
                                    <div className="bg-gray-900/40 rounded-lg p-4 md:p-5 lg:p-4 flex-grow flex flex-col">
                                        <h4 className="text-fuchsia-400 font-semibold text-base md:text-lg lg:text-base mb-3 md:mb-4 lg:mb-3 flex items-center gap-2 flex-shrink-0">
                                            <span>💻</span>
                                            Key Responsibilities:
                                        </h4>
                                        <div className="flex-grow">
                                            <p className="text-gray-200 leading-relaxed text-sm md:text-base lg:text-sm">
                                                {job.responsibilities}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </RevealOnScroll>
            </section>
        </>
    );
};