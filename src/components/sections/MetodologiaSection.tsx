import { useState, useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

interface MetodologiaSlide {
    id: number;
    image: string;
    title: string;
    description: string;
}

/**
 * Metodologia Section - "La intención existe, la metodología la vuelve realidad"
 * Features a special 3-slide Swiper where center slide is prominent
 */
export default function MetodologiaSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState(1);
    const swiperRef = useRef<SwiperType | null>(null);

    const slides: MetodologiaSlide[] = [
        {
            id: 1,
            image: "/images/section_metodologia_1.webp",
            title: "Estrategia Clara",
            description: "Definimos objetivos medibles y un plan de acción concreto para tu negocio."
        },
        {
            id: 2,
            image: "/images/section_metodologia_2.webp",
            title: "Ejecución Real",
            description: "Te acompañamos en cada paso para que pases de la idea a los resultados."
        },
        {
            id: 3,
            image: "/images/section_metodologia_3.webp",
            title: "Resultados Medibles",
            description: "Trazamos métricas claras para que veas el progreso de tu emprendimiento."
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
            id="metodologia"
            ref={sectionRef}
            className="section-padding relative overflow-hidden bg-background-dark"
        >
            {/* Background decorative elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <motion.div
                className="container-custom relative z-10"
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
            >
                {/* Section Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    variants={titleVariants}
                >
                    <h2 className="section-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                        La intención existe,
                        <span className="block gradient-text mt-2">la metodología la vuelve realidad</span>
                    </h2>
                    <p className="section-subtitle mx-auto">
                        Nuestra metodología probada te guía desde la idea hasta la ejecución
                        con resultados tangibles.
                    </p>
                </motion.div>

                {/* Swiper Carousel */}
                <div className="relative px-4 md:px-8 lg:px-16">
                    <Swiper
                        onSwiper={(swiper) => { swiperRef.current = swiper; }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        initialSlide={1}
                        loop={true}
                        autoplay={{
                            delay: 4000,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 100,
                            modifier: 2.5,
                            slideShadows: false,
                        }}
                        navigation={{
                            prevEl: '.swiper-button-prev-custom',
                            nextEl: '.swiper-button-next-custom',
                        }}
                        modules={[EffectCoverflow, Navigation, Autoplay]}
                        className="metodologia-swiper !overflow-visible"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide
                                key={slide.id}
                                className="!w-[280px] sm:!w-[340px] md:!w-[400px] lg:!w-[450px]"
                            >
                                {({ isActive }) => (
                                    <motion.div
                                        className={`relative rounded-3xl overflow-hidden transition-all duration-500 ${isActive
                                            ? 'scale-100 opacity-100'
                                            : 'scale-90 opacity-50 blur-[2px]'
                                            }`}
                                        whileHover={isActive ? { scale: 1.02 } : {}}
                                    >
                                        {/* Card Image */}
                                        <div className="relative aspect-[4/5] overflow-hidden">
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                                className="w-full h-full object-cover"
                                                loading="lazy"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                                        </div>

                                        {/* Card Content */}
                                        <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'
                                            }`}>
                                            <h3 className="text-white font-bold text-xl md:text-2xl mb-2">
                                                {slide.title}
                                            </h3>
                                            <p className="text-text-secondary text-sm md:text-base">
                                                {slide.description}
                                            </p>
                                        </div>

                                        {/* Active Indicator */}
                                        {isActive && (
                                            <motion.div
                                                className="absolute top-4 right-4 w-3 h-3 bg-primary rounded-full"
                                                animate={{ scale: [1, 1.3, 1] }}
                                                transition={{ duration: 1.5, repeat: Infinity }}
                                            />
                                        )}
                                    </motion.div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Custom Navigation */}
                    <button
                        className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-20 
                       w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20
                       flex items-center justify-center text-white
                       hover:bg-primary hover:border-primary transition-all duration-300
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label="Anterior slide"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-20 
                       w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20
                       flex items-center justify-center text-white
                       hover:bg-primary hover:border-primary transition-all duration-300
                       focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                        aria-label="Siguiente slide"
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>

                    {/* Pagination Dots */}
                    <div className="flex items-center justify-center gap-2 mt-8">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => swiperRef.current?.slideToLoop(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index
                                    ? 'w-8 bg-primary'
                                    : 'bg-white/30 hover:bg-white/50'
                                    }`}
                                aria-label={`Ir al slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}
