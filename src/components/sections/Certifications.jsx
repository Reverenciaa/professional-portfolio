import { RevealOnScroll } from '../RevealOnScroll';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getCertifications } from '../../services/api';

export const Certifications = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [certifications, setCertifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        const fetchCertifications = async () => {
            try{
                const certificationData = await getCertifications();
                setCertifications(certificationData);
            } catch (error) {
                console.error("Error fetching certifications:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCertifications();
    }, []);

    const handleNext = () => {
        if (isMobile) {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % certifications.length);
        } else {
            setPositionIndexes((prevIndexes) => {
                const updatedIndexes = prevIndexes.map(
                    (prevIndex) => (prevIndex + 1) % certifications.length 
                );
                return updatedIndexes;
            });
        }
    };

    const handleBack = () => {
        if (isMobile) {
            setCurrentIndex((prevIndex) => 
                prevIndex === 0 ? certifications.length - 1 : prevIndex - 1
            );
        } else {
            setPositionIndexes((prevIndexes) => {
                const updatedIndexes = prevIndexes.map(
                    (prevIndex) => (prevIndex + certifications.length - 1) % certifications.length 
                );
                return updatedIndexes;
            });
        }
    };

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "-50%", y: "-50%", left: "50%", top: "50%", scale: 1, zIndex: 5 },
        left1: { x: "-100%", y: "-50%", left: "50%", top: "50%", scale: 0.7, zIndex: 3 },
        left: { x: "-140%", y: "-50%", left: "50%", top: "50%", scale: 0.5, zIndex: 2 },
        right: { x: "40%", y: "-50%", left: "50%", top: "50%", scale: 0.5, zIndex: 1 },
        right1: { x: "0%", y: "-50%", left: "50%", top: "50%", scale: 0.7, zIndex: 3 },
    };

    if(loading){
        return (
            <section id="certifications" className="min-h-screen flex items-center justify-center">
                <div className='text-xl'>
                    Loading certifications...
                </div>
            </section>
        )
    }

    return (
        <section id="certifications" className="min-h-screen flex flex-col items-center justify-center py-12 px-4">
            <RevealOnScroll>
                <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 bg-gradient-to-r from-yellow-500 to-fuchsia-600 bg-clip-text text-transparent text-center">
                    Certifications
                </h2>
                
                {isMobile ? (
                    <div className="relative w-full max-w-sm h-[280px] mb-6 flex items-center justify-center">
                        <motion.img
                            key={currentIndex}
                            src={certifications[currentIndex]?.image}
                            alt={`Certification ${currentIndex + 1}`}
                            className="rounded-lg shadow-2xl w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                        />
                        
                        <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {certifications.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${
                                        index === currentIndex 
                                            ? 'bg-yellow-400' 
                                            : 'bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                ) : (
                    <div className="relative w-full max-w-6xl h-[500px] mb-6 flex items-center justify-center">
                        {certifications.map((cert, index) => (
                            <motion.img
                                key={cert.id}
                                src={cert.image}
                                alt={`Certification ${index + 1}`}
                                className="rounded-[12px] absolute shadow-2xl"
                                initial="center"
                                animate={positions[positionIndexes[index]]}
                                variants={imageVariants}
                                transition={{ duration: 0.5 }}
                                style={{ 
                                    width: "600px", 
                                    height: "400px",
                                    objectFit: "cover"
                                }}
                            />
                        ))}
                    </div>
                )}

                <div className="flex flex-row gap-4 md:gap-6 mt-8 md:mt-12">
                    <button
                        className="text-white bg-yellow-400 rounded-lg py-3 px-6 md:py-4 md:px-8 text-base md:text-lg font-medium hover:bg-fuchsia-500 transition-colors shadow-lg"
                        onClick={handleBack}
                    >
                        {isMobile ? '← Prev' : 'Back'}
                    </button>
                    <button
                        className="text-white bg-yellow-400 rounded-lg py-3 px-6 md:py-4 md:px-8 text-base md:text-lg font-medium hover:bg-fuchsia-500 transition-colors shadow-lg"
                        onClick={handleNext}
                    >
                        {isMobile ? 'Next →' : 'Next'}
                    </button>
                </div>

                {isMobile && (
                    <div className="text-center mt-6 px-4">
                        <p className="text-gray-300 text-sm">
                            {currentIndex + 1} of {certifications.length}
                        </p>
                    </div>
                )}
            </RevealOnScroll>
        </section>
    );
};
