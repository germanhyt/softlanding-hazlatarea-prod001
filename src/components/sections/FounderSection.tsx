import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { siteConfig } from '../../config/site.config';

/**
 * Founder Section - "Conoce a la founder"
 * Refactored to match Figma design with cream background and social icon overlay
 */
export default function FounderSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.7, ease: "easeOut" as const }
        }
    };

    return (
        <section
            id="founder"
            ref={sectionRef}
            className="py-20 md:py-32 relative overflow-hidden bg-[#F9F7F2]"
        >
            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                    {/* Image Side */}
                    <motion.div
                        className="relative"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={imageVariants}
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                            <img
                                src="/images/section_founder_1.webp"
                                alt="Naddia Schiaffino - Founder de Haz La Tarea"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />

                            {/* LinkedIn Icon Overlay */}
                            <motion.a
                                href={siteConfig.social.linkedinPersonal}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute bottom-6 left-6 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full 
                                           flex items-center justify-center text-[#000] shadow-lg
                                           hover:scale-110 transition-transform duration-300"
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {/* icon color negro */}
                                <svg fill="currentColor" className="w-6 h-6 md:w-7 md:h-7" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" /></svg>
                            </motion.a>
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {/* Title */}
                        <motion.h2
                            className="font-impact text-4xl sm:text-5xl md:text-6xl text-black mb-8 uppercase tracking-tight"
                            variants={itemVariants}
                        >
                            Conoce a la founder
                        </motion.h2>

                        {/* Bio Content */}
                        <motion.div
                            className="space-y-6 text-[#202020] text-lg md:text-xl leading-relaxed font-medium mb-10"
                            variants={itemVariants}
                        >
                            <p>
                                Naddia Schiaffino es estratega de negocios y emprendedora, con más de una década de experiencia en banca, fintech y edtech, liderando áreas comerciales, proyectos y operaciones. Desde muy joven emprendió, creó más de 10 proyectos y en 2025 logró su primer exit con una rentabilidad de 100X, combinando estrategia y ejecución real.
                            </p>
                            <p>
                                Creó esta consultora para acompañar a emprendimientos y PYMES a crecer con dirección y volverse sostenibles en el largo plazo. Eligió enfocarse en este segmento por una razón personal: sus abuelos y bisabuelos también tuvieron negocios, y está convencida de que con una mirada estratégica hubieran llegado mucho más lejos.
                            </p>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div variants={itemVariants}>
                            <motion.a
                                href={siteConfig.contact.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-lg font-medium text-center uppercase
                                           bg-gradient-to-r from-[#9d72e7] to-[#f5a623] text-white
                                           shadow-xl shadow-black/10 transition-all duration-300 tracking-wide"
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Solicita tu asesoría gratis
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
