import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";
import { getProfile } from "../../services/api";

export const Home = ({ isAppLoaded }) => {
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try{
                const profileData = await getProfile();
                setProfile(profileData);
            } catch (error) {
                console.error("Error fetching profile:", error);
            } finally {
                setLoading(false);
            }
    };
    fetchProfile();
    }, []);

    useEffect(() => {
        if (isAppLoaded && !loading && profile?.name) {
            setTimeout(() => setStartTyping(true), 500);
        }
    }, [isAppLoaded, loading, profile]);

    useEffect(() => {
        if(!profile?.name || !Array.isArray(profile.name) || !startTyping) return;

        const typingSpeed = 50;
        const deletingSpeed = 50;
        const pauseTime = 1500;

        const timeout = setTimeout(() => {
            const current = profile.name[textIndex];
            
            if (!isDeleting) {
                if (currentText.length < current.length) {
                    setCurrentText(current.substring(0, currentText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), pauseTime);
                }
            } else {
                if (currentText.length > 0) {
                    setCurrentText(current.substring(0, currentText.length - 1));
                } else {
                    setIsDeleting(false);
                    setTextIndex((prevIndex) => (prevIndex + 1) % profile.name.length);
                }
            }
        }, isDeleting ? deletingSpeed : typingSpeed);
        return () => clearTimeout(timeout);
    }, [currentText, isDeleting, textIndex, profile, startTyping]);

    if(loading){
        return (
            <section id="home" className="min-h-screen flex items-center justify-center">
                <div className='text-xl'>
                    Loading profile...
                </div>
            </section>
        );
    };

    return (
        <section id="home" className="min-h-screen flex flex-col items-center justify-center relative">
            <RevealOnScroll>
                <div className="text-center z-10 px-4 ">
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-fuchsia-600 bg-clip-text text-transparent leading-tight min-h-[1.2em]">
                    Hi, I'm {currentText}
                    {startTyping && <span className="animate-blink text-fuchsia-500">|</span>}
                </h1>
                <p className="text-gray-400 text-base md:text-lg mb-8 max-w-lg mx-auto px-4">
                    {profile?.description}
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-4 px-4">
                    <a href="#projects" className="bg-yellow-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] text-center text-sm md:text-base">
                        View Projects</a>
                    <a href={profile?.resumeUrl} target="_blank" rel="noopener noreferrer" className="border border-yellow-600/50 text-yellow-500 py-3 px-6 rounded font-medium transition-all duration-200  
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-yellow-500/10 text-center text-sm md:text-base">
                        My Resume
                        </a>                  
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}