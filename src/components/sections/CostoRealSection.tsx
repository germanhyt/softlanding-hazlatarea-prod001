import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { siteConfig } from '../../config/site.config';

/**
 * Costo Real Section
 * Section explaining the real cost of not taking action
 */
export default function CostoRealSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const costs = [
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Tiempo perdido",
            description: "Cada mes sin ejecución es un mes de oportunidades desperdiciadas."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Dinero invertido sin retorno",
            description: "Gastas en prueba y error cuando podrías invertir en resultados."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: "Frustración creciente",
            description: "La falta de avance genera agotamiento y dudas sobre tu proyecto."
        },
        {
            icon: (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
            ),
            title: "Competencia adelantándose",
            description: "Mientras dudas, otros están tomando acción y ganando mercado."
        }
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

    return (
        <section
            id="costo-real"
            ref={sectionRef}
            className="section-padding relative overflow-hidden bg-background-card"
        >
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
                    backgroundSize: '40px 40px'
                }} />
            </div>

            <div className="container-custom relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Visual Side */}
                    <motion.div
                        className="relative order-2 lg:order-1"
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="relative">
                            {/* Main Image */}
                            <div className="relative z-10 rounded-3xl overflow-hidden">
                                <img
                                    src="/images/section_costo_real_2.png"
                                    alt="El costo de no actuar"
                                    className="w-full h-auto object-cover"
                                    loading="lazy"
                                />
                            </div>

                            {/* Icon decoration */}
                            <motion.div
                                className="absolute -top-4 -right-4 md:-top-8 md:-right-8 z-20"
                                animate={{ rotate: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <img
                                    src="/images/section_costo_real_1.png"
                                    alt=""
                                    className="w-20 h-20 md:w-28 md:h-28"
                                    aria-hidden="true"
                                />
                            </motion.div>

                            {/* Decorative glow */}
                            <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 via-transparent to-orange-500/10 rounded-3xl -z-10 blur-xl" />
                        </div>
                    </motion.div>

                    {/* Content Side */}
                    <motion.div
                        className="order-1 lg:order-2"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {/* Badge */}
                        <motion.div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/30 
                         rounded-full mb-6"
                            variants={itemVariants}
                        >
                            <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                            </svg>
                            <span className="text-red-400 text-sm font-medium">El costo real</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            className="section-title text-3xl sm:text-4xl md:text-5xl text-white mb-6"
                            variants={itemVariants}
                        >
                            ¿Cuál es el costo de
                            <span className="block text-red-400 mt-2">no tomar acción?</span>
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            className="text-text-secondary text-lg leading-relaxed mb-8"
                            variants={itemVariants}
                        >
                            Cada día que pasa sin una estrategia clara es un día que te aleja
                            de tus objetivos. El verdadero costo no es solo financiero...
                        </motion.p>

                        {/* Costs Grid */}
                        <motion.div
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
                            variants={containerVariants}
                        >
                            {costs.map((cost, index) => (
                                <motion.div
                                    key={index}
                                    className="p-5 bg-background border border-border rounded-2xl
                             hover:border-red-500/30 transition-colors group"
                                    variants={itemVariants}
                                    whileHover={{ y: -3 }}
                                >
                                    <div className="w-10 h-10 rounded-xl bg-red-500/10 flex items-center justify-center 
                                  text-red-400 mb-3 group-hover:bg-red-500/20 transition-colors">
                                        {cost.icon}
                                    </div>
                                    <h3 className="text-white font-semibold mb-1">{cost.title}</h3>
                                    <p className="text-text-muted text-sm">{cost.description}</p>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA */}
                        <motion.div variants={itemVariants}>
                            <motion.a
                                href={siteConfig.cta.primary.href}
                                className="btn-primary inline-flex text-base px-8 py-4"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Toma acción hoy
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
