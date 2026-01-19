import { motion, type Variants } from 'framer-motion';

/**
 * Hero Section - "AMA TU NEGOCIO"
 * Main landing section with background image and CTA
 */
export default function HeroSection() {
    const fadeInUp: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3
            }
        }
    };

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center overflow-hidden bg-[#1a1a1a]"
        >
            {/* Background Image - Desktop */}
            <div className="absolute inset-0 hidden md:block">
                <img
                    src="/images/hero-banner_1-desktop.webp"
                    alt="Emprendedoras trabajando juntas"
                    className="w-full h-full object-cover object-center opacity-50"
                    loading="eager"
                />
            </div>

            {/* Background Image - Mobile */}
            <div className="absolute inset-0 md:hidden">
                <img
                    src="/images/hero-banner_1-mobile.webp"
                    alt="Emprendedora trabajando"
                    className="w-full h-full object-cover object-top opacity-50"
                    loading="eager"
                />
            </div>

            {/* Gradient Glow - Top Right */}
            <div className="absolute top-0 right-0 w-[60%] h-[50%] bg-gradient-to-bl from-purple-500/30 to-transparent blur-[120px] pointer-events-none" />

            {/* Content Overlay - Ensure dark bottom for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20" />

            {/* Content */}
            <div className="container-custom relative z-10 pt-28 pb-32 md:pt-36 md:pb-40">
                <motion.div
                    className="max-w-[80%] lg:max-w-[60%]"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {/* Main Headline */}
                    <motion.h1
                        className="font-impact text-5xl sm:text-7xl md:text-8xl lg:text-9xl 
                                   text-white uppercase tracking-tight mb-6 leading-[0.9]"
                        variants={fadeInUp}
                    >
                        Ama tu negocio
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="text-lg md:text-xl text-white/90 max-w-lg mb-8 leading-relaxed font-medium"
                        variants={fadeInUp}
                    >
                        Ayudamos a los emprendimientos y negocios a convertir sus ganas de crecer en una ruta clara y accionable
                    </motion.p>

                    {/* CTA Button */}
                    <motion.div variants={fadeInUp}>
                        <motion.a
                            href="#contacto"
                            className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-lg font-bold uppercase
                                       bg-gradient-to-r from-[#9d72e7] to-[#f5a623] text-white
                                       shadow-lg shadow-black/20
                                       hover:shadow-xl transition-all duration-300 tracking-wide"
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Conversemos
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
            >
                <motion.div
                    className="w-16 h-16 rounded-full border border-white/80 flex items-center justify-center cursor-pointer"
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    onClick={() => document.getElementById('familiar')?.scrollIntoView({ behavior: 'smooth' })}
                >
                    <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
