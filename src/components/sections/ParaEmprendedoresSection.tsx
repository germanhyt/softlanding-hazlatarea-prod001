import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';

/**
 * Para Emprendedores Section
 * Refactored to match the full-screen background image design with text overlay and logo
 */
export default function ParaEmprendedoresSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3
            }
        }
    };

    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    return (
        <section
            id="para-emprendedores"
            ref={sectionRef}
            className="relative min-h-screen flex items-start md:items-end overflow-hidden bg-black"
        >
            {/* Background Image - Desktop */}
            <div className="absolute inset-0 hidden md:block">
                <img
                    src="/images/section_para-emprendedores_1-desktop.webp"
                    alt="Equipo Haz La Tarea"
                    className="w-full h-full object-cover opacity-90"
                    loading="lazy"
                />
            </div>

            {/* Background Image - Mobile */}
            <div className="absolute inset-0 md:hidden">
                <img
                    src="/images/section_para-emprendedores_1-mobile.webp"
                    alt="Equipo Haz La Tarea"
                    className="w-full h-full object-cover opacity-60"
                    loading="lazy"
                />
            </div>

            {/* Content Overlay - Vignette/Gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent md:from-black/70" />

            {/* Content */}
            <div className="container-custom relative z-10 py-24">
                <motion.div
                    className="max-w-2xl"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={containerVariants}
                >
                    {/* Main Headline */}
                    <motion.h2
                        className="font-impact text-4xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight leading-[0.95] mb-8"
                        variants={fadeInUp}
                    >
                        Para emprendedores <br />
                        que hacen y crecen
                    </motion.h2>

                    {/* Description Paragraphs */}
                    <motion.div
                        className="space-y-6 text-white/90"
                        variants={fadeInUp}
                    >
                        <p className="text-lg md:text-xl leading-relaxed font-medium">
                            Haz La Tarea es una consultora boutique que ayuda a dueños/as de emprendimientos
                            y pequeñas/medianas empresas a avanzar con claridad y foco. Ordenamos ideas,
                            definimos prioridades y convertimos el día a día en un camino claro para que
                            cada empresa crezca con dirección y sostenibilidad.
                        </p>

                        <p className="text-lg md:text-xl leading-relaxed font-medium">
                            Trabajamos desde la acción, con método. <span className="font-bold text-white">Combinamos análisis, criterio
                                y acompañamiento cercano para que cada negocio establezca un norte claro y ejecute
                                los pasos necesarios para alcanzarlo.</span> Nuestro enfoque práctico y de "hacer las tareas"
                            facilita la toma de decisiones y genera mejoras reales en la gestión y en los resultados del negocio.
                        </p>
                    </motion.div>
                </motion.div>
            </div>

            {/* Logo in bottom right corner */}
            <motion.div
                className="absolute bottom-12 right-12 z-20 hidden md:block"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <img
                    src="/images/logo.png"
                    alt="Haz La Tarea Logo"
                    className="h-[4rem] md:h-[5rem] lg:h-[8rem] w-auto brightness-0 invert"
                />
            </motion.div>

            {/* Mobile Logo position */}
            <motion.div
                className="absolute bottom-8 right-8 z-20 md:hidden"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 1 }}
            >
                <img
                    src="/images/logo.png"
                    alt="Haz La Tarea Logo"
                    className="h-[5rem] w-auto brightness-0 invert"
                />
            </motion.div>
        </section>
    );
}
