import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';

interface PainPoint {
    icon: React.ReactNode;
    title: string;
    description: string;
}

/**
 * Familiar Section - "Si esto te suena familiar"
 * Section showing common pain points with visual element
 */
export default function FamiliarSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const painPoints: PainPoint[] = [
        {
            icon: (
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
            ),
            title: "Tienes la idea",
            description: "Pero no sabes por dónde empezar ni cómo estructurarla para que funcione."
        },
        {
            icon: (
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Sientes que no avanzas",
            description: "Trabajas mucho pero los resultados no llegan como esperabas."
        },
        {
            icon: (
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
            ),
            title: "Te falta metodología",
            description: "Necesitas una guía clara y probada para escalar tu negocio."
        },
        {
            icon: (
                <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "No sabes qué decisiones tomar",
            description: "La incertidumbre te paraliza y no tienes a quién consultar."
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: "easeOut" as const }
        }
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section
            id="familiar"
            ref={sectionRef}
            className="section-padding relative overflow-hidden bg-background"
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Content Side */}
                    <motion.div
                        className="order-2 lg:order-1"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.h2
                            className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-8"
                            variants={itemVariants}
                        >
                            Si esto te suena familiar,
                            <span className="block gradient-text mt-2">no estás solo/a</span>
                        </motion.h2>

                        {/* Pain Points List */}
                        <div className="space-y-6">
                            {painPoints.map((point, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start gap-4 group"
                                    variants={itemVariants}
                                >
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 border border-primary/30 
                                  flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                        {point.icon}
                                    </div>
                                    <div>
                                        <h3 className="text-white font-semibold text-lg mb-1">{point.title}</h3>
                                        <p className="text-text-secondary">{point.description}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Visual Side */}
                    <motion.div
                        className="order-1 lg:order-2 relative"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={imageVariants}
                    >
                        <div className="relative z-10">
                            <img
                                src="/images/section_suena_familiar_1.png"
                                alt="Emprendedor pensativo"
                                className="w-full max-w-lg mx-auto rounded-3xl"
                                loading="lazy"
                            />
                        </div>

                        {/* Decorative frame */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl -z-10 blur-xl" />

                        {/* Floating badge */}
                        <motion.div
                            className="absolute -bottom-4 -right-4 md:bottom-8 md:right-0 bg-background-card border border-primary/30 
                          rounded-2xl px-6 py-4 shadow-xl shadow-primary/10"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <p className="text-primary font-bold text-2xl md:text-3xl">+1000</p>
                            <p className="text-text-secondary text-sm">Emprendedores ayudados</p>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
