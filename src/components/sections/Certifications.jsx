import { RevealOnScroll } from '../RevealOnScroll';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { getCertifications } from '../../services/api';

export const Certifications = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);
    const [certifications, setCertifications] = useState([]);
    const [loading, setLoading] = useState(true);


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
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + 1) % certifications.length 
            );
            return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
            const updatedIndexes = prevIndexes.map(
                (prevIndex) => (prevIndex + certifications.length - 1) % certifications.length 
            );

            return updatedIndexes;
        });
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
    <section id="certifications" className="min-h-screen flex flex-col items-center justify-center py-12">
        <RevealOnScroll>
            <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-yellow-500 to-fuchsia-600 bg-clip-text text-transparent text-center">
                Certifications
            </h2>
            
            <div className="relative w-full max-w-6xl h-[500px] mb-6 flex items-center justify-center">
                {certifications.map((cert, index) => (
                    <motion.img
                        key={cert.id}
                        src={cert.image}
                        alt={`Certification ${index + 1}`}
                        className="rounded-[12px] absolute"
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

            <div className="flex flex-row gap-6 mt-12">
                <button
                className="text-white bg-yellow-400 rounded-lg py-4 px-8 text-lg font-medium hover:bg-fuchsia-500 transition-colors"
                onClick={handleBack}
                >
                Back
                </button>
                <button
                className="text-white bg-yellow-400 rounded-lg py-4 px-8 text-lg font-medium hover:bg-fuchsia-500 transition-colors"
                onClick={handleNext}
                >
                Next
                </button>
            </div>
        </RevealOnScroll>
    </section>
  );
};
