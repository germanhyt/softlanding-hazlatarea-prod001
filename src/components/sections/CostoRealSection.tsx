import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

/**
 * Costo Real Section
 * Refactored to match the design with green background, orange card and specific animations
 */
export default function CostoRealSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // Variants for the content entering from the left
    const leftContentVariants: Variants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    // Variants for the big arrow entering from below
    const arrowVariants: Variants = {
        hidden: { opacity: 0, y: 200, rotate: -10, scale: 0.8 },
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            scale: 1,
            transition: {
                duration: 1,
                ease: "easeOut" as const,
                delay: 0.2
            }
        }
    };

    // Variants for the card on the right
    const cardVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9, x: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" as const, delay: 0.4 }
        }
    };

    return (
        <section
            id="costo-real"
            ref={sectionRef}
            className="relative min-h-[80vh] flex items-center bg-[#48A57A] py-16 md:py-24 overflow-hidden"
        >
            <div className="container-custom relative z-10 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

                    {/* Left Side: Title and Big Arrow */}
                    <div className="relative h-full flex flex-col justify-between py-8">
                        <motion.div
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={leftContentVariants}
                            className="z-20"
                        >
                            <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-[1.1] uppercase max-w-xl">
                                El costo real de avanzar sin una estrategia clara
                            </h2>
                        </motion.div>

                        {/* Big White Arrow Illustration */}
                        <motion.div
                            className="mt-12 md:mt-24 lg:absolute lg:bottom-[-20%] lg:left-[-10%] z-10 w-[300px] md:w-[450px] lg:w-[600px]"
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={arrowVariants}
                        >
                            <img
                                src="/images/section_costo_real_1.png"
                                alt=""
                                className="w-full h-auto drop-shadow-2xl"
                            />
                        </motion.div>
                    </div>

                    {/* Right Side: Orange Card */}
                    <motion.div
                        className="relative z-20"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={cardVariants}
                    >
                        <div className="bg-[#FFB84D] rounded-[3rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
                            {/* Illustration inside the card */}
                            <div className="flex justify-center mb-8">
                                <motion.img
                                    src="/images/section_costo_real_2.png"
                                    alt="Persona con caos de documentos"
                                    className="w-48 md:w-64 h-auto"
                                    animate={{ y: [0, -10, 0] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                />
                            </div>

                            {/* Text Content */}
                            <div className="space-y-6 text-black/80">
                                <p className="text-lg md:text-xl font-medium leading-relaxed">
                                    Tu energía se divide y terminas avanzando a medias.
                                    Ventas, campañas, mejoras, alianzas... haces "un poquito de todo" y nada termina de despegar.
                                </p>

                                <div className="pt-6 border-t border-black/10">
                                    <p className="text-sm font-bold text-[#1a5d3f] mb-2 uppercase tracking-wide">
                                        Con HazLaTarea
                                    </p>
                                    <p className="text-lg md:text-xl font-bold italic text-black leading-tight">
                                        Ordenamos el caos y definimos qué va primero, qué espera y qué hoy no suma.
                                    </p>
                                </div>
                            </div>

                            {/* Triple arrow icon decoration */}
                            <div className="absolute bottom-10 right-10 flex gap-2">
                                <motion.div
                                    className="flex gap-1"
                                    animate={{ x: [0, 10, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                >
                                    {[1, 2, 3].map((i) => (
                                        <svg key={i} className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                                        </svg>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
