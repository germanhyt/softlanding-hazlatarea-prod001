import { motion, type Variants } from 'framer-motion';
import { siteConfig } from '../../config/site.config';

/**
 * Hero Section - "Si esto te suena familiar, no estás solo/a"
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

    const painPoints = [
        "¿Tienes la idea pero no sabes cómo ejecutarla?",
        "¿Empezaste un negocio pero sientes que no avanza?",
        "¿Te falta una metodología clara para crecer?"
    ];

    return (
        <section
            id="hero"
            className="relative min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background Image - Desktop */}
            <div className="absolute inset-0 hidden md:block">
                <img
                    src="/images/hero-banner_1-desktop.webp"
                    alt="Hero Background"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
            </div>

            {/* Background Image - Mobile */}
            <div className="absolute inset-0 md:hidden">
                <img
                    src="/images/hero-banner_1-mobile.webp"
                    alt="Hero Background"
                    className="w-full h-full object-cover object-center"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
            </div>

            {/* Decorative Circles */}
            <motion.div
                className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] opacity-20 pointer-events-none"
                animate={{
                    y: [0, -20, 0],
                    rotate: [0, 2, 0]
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            >
                <img
                    src="/images/back_circulos_1.png"
                    alt=""
                    className="w-full h-full object-contain"
                    aria-hidden="true"
                />
            </motion.div>

            <motion.div
                className="absolute bottom-[-100px] right-[-150px] w-[500px] h-[500px] opacity-15 pointer-events-none"
                animate={{
                    y: [0, 15, 0],
                    rotate: [0, -2, 0]
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1
                }}
            >
                <img
                    src="/images/back_circulos_1.png"
                    alt=""
                    className="w-full h-full object-contain"
                    aria-hidden="true"
                />
            </motion.div>

            {/* Glow Effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

            {/* Content */}
            <div className="container-custom relative z-10 pt-24 pb-16 md:pt-32 md:pb-24">
                <motion.div
                    className="max-w-4xl mx-auto text-center"
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                >
                    {/* Logo */}
                    <motion.div
                        className="mb-8 md:mb-10 flex justify-center"
                        variants={fadeInUp}
                    >
                        <img
                            src="/images/logo.png"
                            alt="Haz La Tarea"
                            className="h-16 md:h-20 lg:h-24 w-auto"
                            width={200}
                            height={80}
                        />
                    </motion.div>

                    {/* Main Headline */}
                    <motion.h1
                        className="section-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 md:mb-8"
                        variants={fadeInUp}
                    >
                        Si esto te suena familiar,
                        <span className="block mt-2">
                            <span className="gradient-text">no estás solo/a</span>
                        </span>
                    </motion.h1>

                    {/* Subtitle / Pain Points */}
                    <motion.div
                        className="space-y-4 mb-10 md:mb-12"
                        variants={staggerContainer}
                    >
                        {painPoints.map((point, index) => (
                            <motion.p
                                key={index}
                                className="text-lg md:text-xl lg:text-2xl text-text-secondary max-w-2xl mx-auto"
                                variants={fadeInUp}
                            >
                                {point}
                            </motion.p>
                        ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        variants={fadeInUp}
                    >
                        <motion.a
                            href={siteConfig.cta.primary.href}
                            className="btn-primary text-lg px-10 py-5 w-full sm:w-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {siteConfig.cta.primary.text}
                        </motion.a>
                        <motion.a
                            href={siteConfig.cta.secondary.href}
                            className="btn-secondary text-lg px-10 py-5 w-full sm:w-auto"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            {siteConfig.cta.secondary.text}
                        </motion.a>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <span className="text-text-muted text-xs uppercase tracking-widest">Descubre más</span>
                    <img
                        src="/images/icon_scroll_down.png"
                        alt="Scroll down"
                        className="w-6 h-auto opacity-60"
                        width={24}
                        height={24}
                    />
                </motion.div>
            </div>
        </section>
    );
}
