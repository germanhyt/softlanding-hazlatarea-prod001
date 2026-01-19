import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

interface PainPoint {
    text: string;
    position: string; // Tailwind positioning classes for desktop
    mobilePosition: string; // Tailwind positioning classes for mobile
}

/**
 * Familiar Section - "Si esto te suena familiar, no estás solo/a"
 * Refactored to use corner images and specific animations
 */
export default function FamiliarSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const painPoints: PainPoint[] = [
        {
            text: "Tienes muchas ideas y no sabes cuál priorizar",
            position: "top-[25%] left-[2%]",
            mobilePosition: "top-[18%] left-[0%]"
        },
        {
            text: "Sabes lo que quieres lograr pero no cómo",
            position: "top-[20%] right-[2%]",
            mobilePosition: "top-[15%] right-[0%]"
        },
        {
            text: "Te sientes solo/a en la toma de decisiones",
            position: "top-[60%] left-[0%]",
            mobilePosition: "top-[78%] left-[0%]"
        },
        {
            text: "Dejas la planificación para después",
            position: "top-[55%] right-[0%]",
            mobilePosition: "top-[70%] right-[0%]"
        },
        {
            text: "Postergas decisiones por falta de claridad",
            position: "bottom-[5%] right-[10%]",
            mobilePosition: "bottom-[5%] right-[5%]"
        }
    ];

    const cornerLeftVariants: Variants = {
        hidden: { x: -200, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    const cornerRightVariants: Variants = {
        hidden: { x: 200, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.5
            }
        }
    };

    const bubbleVariants: Variants = {
        hidden: { opacity: 0, scale: 0.5, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100, damping: 15 }
        }
    };

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: -30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, delay: 0.3 }
        }
    };

    return (
        <section
            id="familiar"
            ref={sectionRef}
            className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white py-20"
        >
            {/* Corner Images */}
            <motion.div
                className="absolute left-0 top-0 h-full w-auto z-0 pointer-events-none"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cornerLeftVariants}
            >
                <img
                    src="/images/section_suena_familiar_esquina-izquierda.png"
                    alt=""
                    className="h-full object-contain object-left"
                />
            </motion.div>

            <motion.div
                className="absolute right-0 top-0 h-full w-auto z-0 pointer-events-none"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={cornerRightVariants}
            >
                <img
                    src="/images/section_suena_familiar_esquina-derecha.png"
                    alt=""
                    className="h-full object-contain object-right"
                />
            </motion.div>

            <div className="container-custom relative z-10 w-full h-full flex flex-col items-center">
                {/* Title */}
                <motion.h2
                    className="font-impact text-4xl sm:text-5xl md:text-6xl text-[#333] text-center uppercase tracking-tight mb-16 max-w-4xl"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={titleVariants}
                >
                    Si esto te suena familiar, <br className="hidden md:block" /> no estás solo/a
                </motion.h2>

                {/* Central Illustration Content Area */}
                <div className="relative w-full max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-center min-h-[400px]">

                    {/* The Girl Illustration */}
                    <motion.div
                        className="relative z-10 w-48 md:w-64 lg:w-80"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img
                            src="/images/section_suena_familiar_1.png"
                            alt="Emprendedora trabajando"
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Idea Clouds / Bubbles */}
                    <motion.div
                        className="absolute inset-0 z-20 pointer-events-none"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {painPoints.map((point, index) => (
                            <motion.div
                                key={index}
                                className={`absolute hidden md:block ${point.position} max-w-[200px]`}
                                variants={bubbleVariants}
                            >
                                <div className="bg-[#f0b033] text-white text-xs md:text-sm font-semibold px-5 py-4 rounded-[2rem] shadow-xl relative transform transition-transform hover:scale-105 pointer-events-auto">
                                    "{point.text}"
                                    {/* Tail */}
                                    <div className="absolute top-[90%] left-[20%] w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[15px] border-t-[#f0b033]" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Mobile Bubbles Layout (Stacked below image) */}
                    <div className="md:hidden flex flex-wrap justify-center gap-4 mt-8 px-4">
                        {painPoints.map((point, index) => (
                            <motion.div
                                key={`mobile-${index}`}
                                className="max-w-[180px]"
                                variants={bubbleVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ delay: 0.5 + (index * 0.1) }}
                            >
                                <div className="bg-[#f0b033] text-white text-[10px] leading-tight font-semibold px-4 py-3 rounded-[1.5rem] shadow-lg relative">
                                    "{point.text}"
                                    <div className="absolute top-[90%] left-[20%] w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[10px] border-t-[#f0b033]" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
