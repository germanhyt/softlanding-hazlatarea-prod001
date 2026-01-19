import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

/**
 * PhraseSection
 * Short section with three powerful phrases over a gradient background
 */
export default function PhraseSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const textVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    const phrases = [
        "CLARIDAD PARA DECIDIR",
        "ESTRUCTURA PARA AVANZAR",
        "SEGUIMIENTO PARA SOSTENER."
    ];

    return (
        <section
            ref={sectionRef}
            className="relative py-[6rem] md:py-[8rem] overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/images/section-bg-pharse_1.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    className="flex flex-col items-center justify-center space-y-2 md:space-y-4 text-center"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {phrases.map((phrase, index) => (
                        <motion.h3
                            key={index}
                            className="font-impact text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white uppercase leading-tight tracking-tight shadow-sm"
                            variants={textVariants}
                        >
                            {phrase}
                        </motion.h3>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
