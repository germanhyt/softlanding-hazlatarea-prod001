import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { siteConfig } from '../../config/site.config';

/**
 * Para Emprendedores Section
 * Section targeting entrepreneurs with visual and CTA
 */
export default function ParaEmprendedoresSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const benefits = [
        "Metodología probada con resultados reales",
        "Acompañamiento personalizado",
        "Comunidad de emprendedores",
        "Recursos y herramientas exclusivas"
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" as const }
        }
    };

    const imageVariants: Variants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section
            id="para-emprendedores"
            ref={sectionRef}
            className="section-padding relative overflow-hidden bg-background"
        >
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Content Side */}
                    <motion.div
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 
                         rounded-full mb-6"
                            variants={itemVariants}
                        >
                            <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-primary text-sm font-medium">Para emprendedores</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-6"
                            variants={itemVariants}
                        >
                            Deja de improvisar,
                            <span className="block gradient-text mt-2">empieza a ejecutar</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="text-text-secondary text-lg leading-relaxed mb-8"
                            variants={itemVariants}
                        >
                            Si tienes un negocio o idea y sientes que no avanzas, es momento de
                            cambiar el enfoque. Te damos las herramientas y la metodología para
                            pasar de la intención a los resultados.
                        </motion.p>

                        {/* Benefits List */}
                        <motion.ul
                            className="space-y-4 mb-10"
                            variants={containerVariants}
                        >
                            {benefits.map((benefit, index) => (
                                <motion.li
                                    key={index}
                                    className="flex items-center gap-3"
                                    variants={itemVariants}
                                >
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 
                                  flex items-center justify-center">
                                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <span className="text-white">{benefit}</span>
                                </motion.li>
                            ))}
                        </motion.ul>

                        {/* CTAs */}
                        <motion.div
                            className="flex flex-col sm:flex-row gap-4"
                            variants={itemVariants}
                        >
                            <motion.a
                                href={siteConfig.cta.primary.href}
                                className="btn-primary text-base px-8 py-4"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {siteConfig.cta.primary.text}
                            </motion.a>
                            <motion.a
                                href={siteConfig.cta.secondary.href}
                                className="btn-secondary text-base px-8 py-4"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                {siteConfig.cta.secondary.text}
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Image Side */}
                    <motion.div
                        className="relative"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={imageVariants}
                    >
                        {/* Desktop Image */}
                        <div className="hidden md:block relative z-10 rounded-3xl overflow-hidden">
                            <img
                                src="/images/section_para-emprendedores_1-desktop.webp"
                                alt="Emprendedores trabajando"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Mobile Image */}
                        <div className="md:hidden relative z-10 rounded-3xl overflow-hidden">
                            <img
                                src="/images/section_para-emprendedores_1-mobile.webp"
                                alt="Emprendedores trabajando"
                                className="w-full h-auto object-cover"
                                loading="lazy"
                            />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 rounded-3xl -z-10" />

                        {/* Floating card */}
                        <motion.div
                            className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-8 bg-background-card 
                         border border-primary/30 rounded-2xl px-5 py-4 shadow-xl shadow-primary/10 z-20"
                            animate={{ y: [0, -8, 0] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                                    <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-white font-bold">Resultados reales</p>
                                    <p className="text-text-muted text-sm">Desde el día 1</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
