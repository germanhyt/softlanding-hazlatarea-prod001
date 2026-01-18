import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { siteConfig } from '../../config/site.config';

/**
 * Contact Section
 * Final call to action with contact information
 */
export default function ContactSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

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
            id="contacto"
            ref={sectionRef}
            className="section-padding relative overflow-hidden bg-background-dark"
        >
            {/* Background Decorations */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

            <div className="container-custom relative z-10">
                <div className="max-w-5xl mx-auto rounded-[3rem] p-10 md:p-16 lg:p-20 border border-white/10 bg-background-card/50 backdrop-blur-xl relative overflow-hidden">
                    {/* Inner glow */}
                    <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/10 blur-[80px] rounded-full pointer-events-none" />

                    <motion.div
                        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        {/* Text Content */}
                        <div>
                            <motion.h2
                                className="text-4xl md:text-5xl lg:text-6xl font-impact text-white mb-6 uppercase tracking-tight"
                                variants={itemVariants}
                            >
                                ¿Listo para <span className="gradient-text">hacer la tarea?</span>
                            </motion.h2>
                            <motion.p
                                className="text-text-secondary text-lg mb-8"
                                variants={itemVariants}
                            >
                                No dejes para mañana el crecimiento que tu negocio necesita hoy.
                                Agenda una llamada estratégica o únete a nuestra comunidad.
                            </motion.p>

                            <motion.div className="flex flex-wrap gap-4" variants={itemVariants}>
                                <motion.a
                                    href={siteConfig.contact.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary inline-flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                    Hablar por WhatsApp
                                </motion.a>
                                <motion.a
                                    href={`mailto:${siteConfig.email}`}
                                    className="btn-secondary inline-flex items-center gap-2"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    Enviar Email
                                </motion.a>
                            </motion.div>
                        </div>

                        {/* Info / Links Side */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:bg-white/5 lg:p-10 lg:rounded-[2rem] border border-white/5">
                            <motion.div variants={itemVariants}>
                                <h4 className="text-white font-impact uppercase text-xl mb-4">¿En dónde estamos?</h4>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    Trabajamos de forma remota para todo el Perú y Latinoamérica,
                                    siempre conectados con el crecimiento de tu negocio.
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <h4 className="text-white font-impact uppercase text-xl mb-4">Horario</h4>
                                <p className="text-text-secondary text-sm leading-relaxed">
                                    Lunes a Viernes<br />
                                    9:00 AM - 6:00 PM
                                </p>
                            </motion.div>
                            <motion.div variants={itemVariants} className="sm:col-span-2">
                                <h4 className="text-white font-impact uppercase text-xl mb-4">Newsletter</h4>
                                <p className="text-text-secondary text-sm mb-4">
                                    Únete a más de 500 emprendedores recibiendo consejos de ejecución semanal.
                                </p>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="tu@email.com"
                                        className="flex-1 bg-white/5 border border-white/10 rounded-full px-4 text-white text-sm focus:outline-none focus:border-primary transition-colors"
                                    />
                                    <button className="bg-primary hover:bg-primary-hover text-background px-6 py-2 rounded-full text-sm font-bold transition-colors">
                                        Unirme
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Community anchor for the CTA */}
            <div id="comunidad" className="absolute bottom-0 h-0 w-0" />
        </section>
    );
}
