import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, FreeMode } from 'swiper/modules';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { siteConfig } from '../../config/site.config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';

interface ServiceCard {
    id: number;
    image: string;
    title: string;
    badge: string;
    badgeColor: string;
    description: string;
}

/**
 * Servicios Section - "¿Qué hacemos y cómo te ayudamos?"
 * Refactored to match Figma design with clean cards and concentric background
 */
export default function ServiciosSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const services: ServiceCard[] = [
        {
            id: 1,
            image: "/images/section_que-hacemos_1.webp",
            title: "Sesiones de claridad",
            badge: "Mentorías 1 a 1",
            badgeColor: "bg-[#28B463]",
            description: "Si estás en un punto de confusión, tienes mil ideas, sientes potencial, pero no sabes por dónde empezar, esta es la mejor puerta de entrada. En 50 minutos exploramos tu situación, identificamos el verdadero dolor y aterrizamos opciones para que salgas con más claridad."
        },
        {
            id: 2,
            image: "/images/section_que-hacemos_2.webp",
            title: "Ruta de crecimiento",
            badge: "Estrategia",
            badgeColor: "bg-[#8E44AD]",
            description: "Para empresas que tienen un objetivo claro para el 2025, pero quieren una ruta realista para lograrlo sin improvisar. En esta primera sesión revisamos tu meta, tu contexto y tus recursos actuales, y te ayudamos a visualizar el camino: qué priorizar primero y qué decisiones tomar."
        },
        {
            id: 3,
            image: "/images/section_que-hacemos_3.webp",
            title: "Exploración estratégica",
            badge: "Diagnóstico",
            badgeColor: "bg-[#F39C12]",
            description: "Ideal si ya sabes que \"algo no está funcionando\" (ventas, marketing, producto o márgenes), pero aún no tienes claro por qué. Esta primera sesión es para abrir el problema: hacemos preguntas incómodas, buscamos señales y armamos hipótesis de raíz."
        },
        {
            id: 4,
            image: "/images/section_que-hacemos_4.webp",
            title: "Talleres estratégicos",
            badge: "Workshops",
            badgeColor: "bg-[#1C1C1C]",
            description: "Si quieres trabajar un tema específico de manera dinámica (propuesta de valor, segmentación de clientes, product market fit, pitch comercial, indicadores, etc.), los workshops son una forma potente de alinear equipo y acelerar claridad. Diseñamos el enfoque y formato adecuado."
        }
    ];

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut" as const }
        }
    };

    return (
        <section
            id="servicios"
            ref={sectionRef}
            className="relative py-20 md:py-32 overflow-hidden bg-transparent"
        >
            {/* Background Concentric Circles */}
            {/* <div className="absolute inset-0 z-0 opacity-40 md:opacity-60 pointer-events-none">
                <img
                    src="/images/back_circulos_1.png"
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div> */}

            {/* Corner decoration image */}
            <div className="absolute bottom-0 right-0 w-[250px] md:w-[450px] pointer-events-none z-0">
                <img
                    src="/images/section_que-hacemos_esquina_recha_inferior_1.png"
                    alt=""
                    className="w-full h-auto"
                />
            </div>

            <div className="relative z-10">
                {/* Section Header - With container */}
                <div className="container-custom">
                    <motion.div
                        className="mb-16 md:mb-20"
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        variants={titleVariants}
                    >
                        <h2 className="font-impact text-[2.5rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] xl:text-[4.2rem] 2xl:text-[4.5rem] text-[#202020] uppercase leading-[1.1]">
                            ¿Qué hacemos y <br />
                            <span className="text-black">cómo te ayudamos?</span>
                        </h2>
                    </motion.div>
                </div>

                {/* Swiper Carousel */}
                <div className="relative group">
                    <div className="pl-4 sm:pl-6 md:pl-8 lg:pl-[max(2rem,calc((100vw-1280px)/2+2rem))]">
                        <Swiper
                            slidesPerView={'auto'}
                            freeMode={true}
                            grabCursor={true}
                            navigation={{
                                prevEl: '.servicios-prev',
                                nextEl: '.servicios-next',
                            }}
                            breakpoints={{
                                0: {
                                    spaceBetween: 20,
                                },
                                1280: {
                                    spaceBetween: 25,
                                },
                            }}
                            modules={[Navigation, FreeMode]}
                            className="!overflow-visible"
                        >
                            {services.map((service) => (
                                <SwiperSlide
                                    key={service.id}
                                    className="!w-[290px] sm:!w-[350px] md:!w-[380px] xl:!w-[360px] 2xl:!w-[450px] "
                                >
                                    <motion.div
                                        className="bg-white rounded-[2rem] overflow-hidden 
                                        shadow-xl shadow-black/5 flex flex-col h-full border border-gray-100
                                        min-h-[32.5rem] sm:min-h-[33rem] md:min-h-[34rem] lg:min-h-[37rem]
                                        "
                                        whileHover={{ y: -8 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {/* Card Image and Badge */}
                                        <div className="relative aspect-[16/10] overflow-hidden p-3 pb-0">
                                            <div className="w-full h-full rounded-t-[1.5rem] overflow-hidden relative">
                                                <img
                                                    src={service.image}
                                                    alt={service.title}
                                                    className="w-full h-full object-cover"
                                                    loading="lazy"
                                                />
                                                {/* Badge Overlay */}
                                                <div className={`absolute top-4 right-4 ${service.badgeColor} text-white text-[10px] md:text-xs font-bold uppercase py-1.5 px-4 rounded-full shadow-lg`}>
                                                    {service.badge}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Card Content */}
                                        <div className="p-8 md:p-10 flex flex-col flex-1">
                                            <h3 className="font-impact text-2xl md:text-3xl text-black uppercase mb-4 tracking-tight">
                                                {service.title}
                                            </h3>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed  mb-2">
                                                {service.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                </SwiperSlide>
                            ))}
                            {/* Extra padding slide for edge effect */}
                            <SwiperSlide className="!w-12 md:!w-24 lg:!w-48" />
                        </Swiper>
                    </div>

                    {/* Desktop Navigation Buttons */}
                    <button className="servicios-prev absolute left-2 lg:left-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-gray-200 bg-white items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 z-30 disabled:opacity-20 disabled:cursor-not-allowed hidden md:flex shadow-xl">
                        <HiChevronLeft className="text-3xl" />
                    </button>
                    <button className="servicios-next absolute right-2 lg:right-8 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-gray-200 bg-white items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 z-30 disabled:opacity-20 disabled:cursor-not-allowed hidden md:flex shadow-xl">
                        <HiChevronRight className="text-3xl" />
                    </button>
                </div>

                {/* Navigation Buttons for Mobile */}
                <div className="flex md:hidden items-center justify-center gap-8 mt-10">
                    <button className="servicios-prev w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center text-black shadow-lg">
                        <HiChevronLeft className="text-2xl" />
                    </button>
                    <button className="servicios-next w-14 h-14 rounded-full border border-gray-200 bg-white flex items-center justify-center text-black shadow-lg">
                        <HiChevronRight className="text-2xl" />
                    </button>
                </div>

                {/* Main CTA */}
                <motion.div
                    className="mt-16 text-center container-custom"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.5 }}
                >
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
            </div >
        </section >
    );
}
