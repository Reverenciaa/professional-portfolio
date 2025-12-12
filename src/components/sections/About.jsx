import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = ["React", "Django", "HTML", "CSS", "JavaScript", "Tailwind CSS"];
    const backendSkills = ["Python", "Java", "C++", "Node.js", "SQL", "MongoDB"];
    
    return (
        <section id = "about" className="min-h-screen flex items-center justify-center py-20">
            <RevealOnScroll>
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-fuchsia-600 bg-clip-text text-transparent text-center">{" "}About Me</h2>

                    <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                        <p className="text-gray-300 mb-6 text-center">
                            An aspiring software engineer with a passion for back-end programming and web development to create scalable applications and innovative solutions.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-yellow-500 to-fuchsia-500 bg-clip-text text-transparent">Frontend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {frontendSkills.map((tech, key) => (
                                        <span key={key} className="bg-yellow-500/10 text-yellow-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0,2)] transition">
                                                            {tech} {/* reminder to replace this with integration to database*/}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                                <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-fuchsia-500 to-yellow-500 bg-clip-text text-transparent">Backend</h3>
                                <div className="flex flex-wrap gap-2">
                                    {backendSkills.map((tech, key) => (
                                        <span key={key} className="bg-fuchsia-500/10 text-fuchsia-500 py-1 px-3 rounded-full text-sm hover:bg-yellow-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0,2)] transition">
                                                            {tech} {/* reminder to replace this with integration to database*/}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"> 
                                <span className="text-2xl">🎓</span>
                                <span className="bg-gradient-to-r from-yellow-500 to-purple-500 bg-clip-text text-transparent">Education</span>
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div className="bg-black/20 rounded-lg p-4 border border-yellow-500/20">
                                    <div className="text-lg font-bold text-white mb-2">
                                        B.S. in Computer Science
                                    </div>
                                    <div className="text-base text-yellow-400 font-medium mb-1">
                                        Specialization in Software Engineering
                                    </div>
                                    <div className="text-amber-300 font-medium mb-2">
                                        Far Eastern University - Institute of Technology
                                    </div>
                                    <div className="text-gray-400 text-sm flex items-center gap-1">
                                        <span>📅</span>
                                        2022 - Present
                                    </div>
                                </div>
                                <div className="relative">
                                    <div className="bg-gray-900/40 rounded-lg p-4">
                                        <p className="text-gray-300 leading-relaxed">
                                            <span className="text-fuchsia-400 font-semibold">📚 Relevant Coursework:</span>
                                            <br />
                                            <span className="text-sm mt-2 block">
                                                Data Structures and Algorithms • Web Development • Database Management • Software Engineering • Object-Oriented Programming
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-6 flex items-center gap-2"> 
                                <span className="text-2xl">💼</span> 
                                <span className="bg-gradient-to-r from-yellow-500 to-purple-500 bg-clip-text text-transparent">Work Experience</span>
                            </h3>
                            <div className="space-y-4 text-gray-300">
                                <div className="bg-black/20 rounded-lg p-4 border border-yellow-500/20">
                                    <div className="text-lg font-bold text-white mb-2">
                                        Software Engineer Intern
                                    </div>
                                    <div className="text-amber-300 font-medium mb-2">
                                        FourPoint.Zero
                                    </div>
                                    <div className="text-gray-400 text-sm flex items-center gap-1">
                                        <span>📅</span>
                                        December 2025 - Present
                                    </div>
                                </div>
                                <div className="ml-6 relative">
                                    <div className="absolute -left-3 top-0 w-0.5 h-full bg-gradient-to-b from-yellow-500 to-transparent opacity-50"></div>
                                    <div className="bg-gray-900/40 rounded-lg p-4">
                                        <p className="text-gray-300 leading-relaxed">
                                            <span className="text-fuchsia-400 font-semibold">💻 Key Responsibilities:</span>
                                            <br />
                                            <span className="text-sm mt-2 block">
                                                TBA
                                            </span>
                                        </p>
                                    </div>
                                </div>
                                <div className="bg-black/20 rounded-lg p-4 border border-yellow-500/20">
                                    <div className="text-lg font-bold text-white mb-2">
                                        Junior Officer - Programs Committee
                                    </div>
                                    <div className="text-amber-300 font-medium mb-2">
                                        ACM - FEU Tech Student Chapter
                                    </div>
                                    <div className="text-gray-400 text-sm flex items-center gap-1">
                                        <span>📅</span>
                                        2023 - 2024
                                    </div>
                                </div>
                                <div className="ml-6 relative">
                                    <div className="absolute -left-3 top-0 w-0.5 h-full bg-gradient-to-b from-yellow-500 to-transparent opacity-50"></div>
                                    <div className="bg-gray-900/40 rounded-lg p-4">
                                        <p className="text-gray-300 leading-relaxed">
                                            <span className="text-fuchsia-400 font-semibold">💻 Key Responsibilities:</span>
                                            <br />
                                            <span className="text-sm mt-2 block">
                                                Event planning and coordination • Workshop facilitation • Member engagement 
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </RevealOnScroll>
            
        </section>
    )
};