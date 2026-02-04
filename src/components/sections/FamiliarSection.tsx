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
            position: "top-[25%] left-[8%]",
            mobilePosition: "top-[18%] left-[0%]"
        },
        {
            text: "Sabes lo que quieres lograr pero no cómo",
            position: "top-[18%] right-[6%]",
            mobilePosition: "top-[15%] right-[0%]"
        },
        {
            text: "Te sientes solo/a en la toma de decisiones",
            position: "top-[60%] left-[0%]",
            mobilePosition: "top-[78%] left-[0%]"
        },
        {
            text: "Dejas la planificación para después",
            position: "top-[50%] right-[0%]",
            mobilePosition: "top-[50%] right-[0%]"
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
            className="relative h-[calc(100vh-6rem)] sm:min-h-screen flex items-center justify-center overflow-hidden bg-[#F9F7F2] sm:py-20 px-4"
        >
            {/* Corner Images - Purple Waves */}
            <motion.div
                className="absolute -left-10 lg:left-0 top-0 h-[35%] sm:h-[40%] lg:h-[60%] 3xl:h-[90%] w-auto z-0 pointer-events-none"
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
                className="absolute -right-10 lg:right-0 top-0 h-[35%] sm:h-[40%] lg:h-[60%] 3xl:h-[90%] w-auto z-0 pointer-events-none"
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

            <div className="container-custom relative z-10 w-full flex flex-col items-center">
                {/* Title */}
                <motion.h2
                    className="font-impact text-[2rem] sm:text-[2.5rem] md:text-[3rem] lg:text-[4rem] text-[#202020] text-center uppercase tracking-tight mb-5 sm:mb-10 md:mb-[4rem] max-w-4xl leading-[1.1]"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={titleVariants}
                >
                    Si esto te suena familiar, <br className="hidden md:block" /> no estás solo/a
                </motion.h2>

                {/* Central Illustration Area */}
                <div className="relative w-full max-w-3xl aspect-square md:aspect-video flex items-center justify-center">

                    {/* The Girl Illustration */}
                    <motion.div
                        className="relative z-10 w-[16rem] sm:w-[18rem] md:w-[20rem] lg:w-[32rem]"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <img
                            src="/images/section_suena_familiar_1.webp"
                            alt="Emprendedora trabajando"
                            className="w-full h-auto"
                            loading="lazy"
                        />
                    </motion.div>

                    {/* Idea Clouds / Bubbles - Responsive Positions */}
                    {painPoints.map((point, index) => (
                        <motion.div
                            key={index}
                            className={`absolute z-20 ${point.mobilePosition} ${point.position} w-[140px] sm:w-[160px] md:w-[180px] lg:w-[220px] pointer-events-none`}
                            variants={bubbleVariants}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            transition={{ delay: 0.5 + (index * 0.1) }}
                        >
                            <div className="bg-[#FFB84D] text-black text-[10px] sm:text-xs md:text-sm font-bold px-4 py-3 md:px-5 md:py-4 rounded-[1.5rem] md:rounded-[1.5rem] shadow-xl relative pointer-events-auto transform transition-transform hover:scale-105">
                                "{point.text}"
                                {/* Tail */}
                                <div className={`absolute w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-t-[12px] border-t-[#FFB84D]
                                    ${index % 2 === 0 ? 'left-[20%]' : 'right-[20%]'} top-[90%]`}
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
