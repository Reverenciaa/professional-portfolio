import { RevealOnScroll } from "../RevealOnScroll";
import { useState, useEffect } from "react";
import { getProfile } from "../../services/api";

export const Home = () => {
    const [profile, setProfile] = useState([]);
    const [loading, setLoading] = useState(true);

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
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-yellow-500 to-fuchsia-600 bg-clip-text text-transparent leading-right">
                    Hi, I'm {profile?.name}!
                </h1>
                <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                    {profile?.description}
                </p>
                <div className="flex justify-center space-x-4">
                    <a href="#projects" className="bg-yellow-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                    hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">
                        View Projects</a>
                    <a href={profile?.resume} target="_blank" rel="noopener noreferrer" className="border border-yellow-600/50 text-yellow-500 py-3 px-6 rounded font-medium transition-all duration-200  
                    hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-yellow-500/10">
                        My Resume</a>                  
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
}