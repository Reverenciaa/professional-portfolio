import { RevealOnScroll } from '../RevealOnScroll';
import ccna from '/certifications/ccna.jpg';
import devnet from '/certifications/devnet.jpg';
import java from  '/certifications/java.jpg';
import pmi from '/certifications/pmi.jpg';
import python from '/certifications/python.jpg';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const Certifications = () => {
    const [positionIndexes, setPositionIndexes] = useState([0, 1, 2, 3, 4]);

    const handleNext = () => {
        setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
            (prevIndex) => (prevIndex + 1) % 5
        );
        return updatedIndexes;
        });
    };

    const handleBack = () => {
        setPositionIndexes((prevIndexes) => {
        const updatedIndexes = prevIndexes.map(
            (prevIndex) => (prevIndex + 4) % 5
        );

        return updatedIndexes;
        });
    };

    const images = [ccna, devnet, java, pmi, python];

    const positions = ["center", "left1", "left", "right", "right1"];

    const imageVariants = {
        center: { x: "-50%", y: "-50%", left: "50%", top: "50%", scale: 1, zIndex: 5 },
        left1: { x: "-100%", y: "-50%", left: "50%", top: "50%", scale: 0.7, zIndex: 3 },
        left: { x: "-140%", y: "-50%", left: "50%", top: "50%", scale: 0.5, zIndex: 2 },
        right: { x: "40%", y: "-50%", left: "50%", top: "50%", scale: 0.5, zIndex: 1 },
        right1: { x: "0%", y: "-50%", left: "50%", top: "50%", scale: 0.7, zIndex: 3 },
    };

    return (
    <section id="certifications" className="min-h-screen flex flex-col items-center justify-center py-12">
        <RevealOnScroll>
            <h2 className="text-4xl font-bold mb-24 bg-gradient-to-r from-yellow-500 to-fuchsia-600 bg-clip-text text-transparent text-center">
                Certifications
            </h2>
            
            <div className="relative w-full max-w-6xl h-[500px] mb-16 flex items-center justify-center">
                {images.map((image, index) => (
                    <motion.img
                    key={index}
                    src={image}
                    alt={image}
                    className="rounded-[12px] absolute"
                    initial="center"
                    animate={positions[positionIndexes[index]]}
                    variants={imageVariants}
                    transition={{ duration: 0.5 }}
                    style={{ 
                        width: "800px", 
                        height: "550px",
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
