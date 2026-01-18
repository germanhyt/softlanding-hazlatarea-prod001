import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

interface ServiceCard {
    id: number;
    image: string;
    title: string;
    description: string;
    features: string[];
}

/**
 * Servicios Section - "¿Qué hacemos y cómo te ayudamos?"
 * Features a Swiper carousel that extends to the edge of the screen on the right
 */
export default function ServiciosSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const services: ServiceCard[] = [
        {
            id: 1,
            image: "/images/section_que-hacemos_1.webp",
            title: "Consultoría Estratégica",
            description: "Analizamos tu negocio y creamos un plan de acción personalizado.",
            features: ["Análisis de mercado", "Plan de negocios", "Estrategia comercial"]
        },
        {
            id: 2,
            image: "/images/section_que-hacemos_2.webp",
            title: "Mentoría 1 a 1",
            description: "Acompañamiento personalizado para escalar tu emprendimiento.",
            features: ["Sesiones semanales", "Seguimiento continuo", "Recursos exclusivos"]
        },
        {
            id: 3,
            image: "/images/section_que-hacemos_3.webp",
            title: "Programas Grupales",
            description: "Aprende junto a otros emprendedores en nuestras cohortes.",
            features: ["Comunidad activa", "Networking", "Talleres prácticos"]
        },
        {
            id: 4,
            image: "/images/section_que-hacemos_4.webp",
            title: "Recursos y Herramientas",
            description: "Accede a plantillas, guías y herramientas para tu negocio.",
            features: ["Templates", "Guías paso a paso", "Videos exclusivos"]
        }
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { duration: 0.6 }
        }
    };

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };

    return (
        <section
            id="servicios"
            ref={sectionRef}
            className="section-padding relative overflow-hidden bg-background"
        >
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <motion.div
                className="relative z-10"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {/* Section Header - With container */}
                <div className="container-custom">
                    <motion.div
                        className="text-left mb-12 md:mb-16 max-w-2xl"
                        variants={titleVariants}
                    >
                        <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                            ¿Qué hacemos y
                            <span className="block gradient-text mt-2">cómo te ayudamos?</span>
                        </h2>
                        <p className="section-subtitle">
                            Descubre nuestros servicios diseñados para llevar tu emprendimiento
                            al siguiente nivel con metodología probada.
                        </p>
                    </motion.div>
                </div>

                {/* Swiper Carousel - Edge to edge on right */}
                <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]">
                    <Swiper
                        slidesPerView={'auto'}
                        spaceBetween={24}
                        freeMode={true}
                        grabCursor={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: '.servicios-prev',
                            nextEl: '.servicios-next',
                        }}
                        modules={[Navigation, Autoplay, FreeMode]}
                        className="!overflow-visible"
                    >
                        {services.map((service) => (
                            <SwiperSlide
                                key={service.id}
                                className="!w-[300px] sm:!w-[340px] md:!w-[380px] lg:!w-[420px]"
                            >
                                <motion.div
                                    className="group relative bg-background-card border border-border rounded-3xl 
                             overflow-hidden h-full transition-all duration-300
                             hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10"
                                    whileHover={{ y: -5 }}
                                >
                                    {/* Card Image */}
                                    <div className="relative aspect-[4/3] overflow-hidden">
                                        <img
                                            src={service.image}
                                            alt={service.title}
                                            className="w-full h-full object-cover transition-transform duration-500 
                                 group-hover:scale-105"
                                            loading="lazy"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background-card via-transparent to-transparent" />
                                    </div>

                                    {/* Card Content */}
                                    <div className="p-6 md:p-8">
                                        <h3 className="text-white font-bold text-xl md:text-2xl mb-3 
                                   group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-text-secondary text-sm md:text-base mb-4">
                                            {service.description}
                                        </p>

                                        {/* Features List */}
                                        <ul className="space-y-2">
                                            {service.features.map((feature, index) => (
                                                <li
                                                    key={index}
                                                    className="flex items-center gap-2 text-text-muted text-sm"
                                                >
                                                    <svg
                                                        className="w-4 h-4 text-primary flex-shrink-0"
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA */}
                                        <motion.button
                                            className="mt-6 w-full py-3 px-6 bg-transparent border border-primary/30 
                                 text-primary rounded-full font-medium text-sm
                                 hover:bg-primary hover:text-background transition-all duration-300"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Conocer más
                                        </motion.button>
                                    </div>
                                </motion.div>
                            </SwiperSlide>
                        ))}

                        {/* Extra padding slide for edge effect */}
                        <SwiperSlide className="!w-4 md:!w-8" />
                    </Swiper>

                    {/* Navigation Buttons */}
                    <div className="container-custom mt-8 flex items-center gap-4">
                        <button
                            className="servicios-prev w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm 
                         border border-white/20 flex items-center justify-center text-white
                         hover:bg-primary hover:border-primary transition-all duration-300
                         disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Anterior servicio"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            className="servicios-next w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm 
                         border border-white/20 flex items-center justify-center text-white
                         hover:bg-primary hover:border-primary transition-all duration-300
                         disabled:opacity-30 disabled:cursor-not-allowed"
                            aria-label="Siguiente servicio"
                        >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
