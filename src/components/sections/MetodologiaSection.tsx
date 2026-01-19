import { useState, useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { siteConfig } from '../../config/site.config';

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
 * Refactored to match Figma design with concentric background and specific slide behavior
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
            title: "TRAZAMOS LA ESTRATEGIA",
            description: "Analizamos tu negocio, validamos tu idea y trazamos un plan de acción sostenible en el tiempo."
        },
        {
            id: 2,
            image: "/images/section_metodologia_2.webp",
            title: "DEFINIMOS EL NORTE",
            description: "Alineamos visión, propósito, expectativas y definimos metas SMART del negocio."
        },
        {
            id: 3,
            image: "/images/section_metodologia_3.webp",
            title: "SOSTENEMOS LA EJECUCIÓN",
            description: "Te acompañamos en el proceso para asegurar que los planes no se queden solo en papel."
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
            id="metodologia"
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

            <div className="container-custom relative z-10">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 md:mb-24"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={titleVariants}
                >
                    <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black leading-[1.1] uppercase tracking-tight">
                        La intención existe, <br />
                        <span className="text-[#202020]">la metodología la vuelve realidad</span>
                    </h2>
                </motion.div>

                {/* Swiper Carousel */}
                <div className="relative px-4 md:px-0">
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
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        coverflowEffect={{
                            rotate: 0,
                            stretch: 0,
                            depth: 150,
                            modifier: 2,
                            slideShadows: false,
                        }}
                        modules={[EffectCoverflow, Navigation, Autoplay]}
                        className="metodologia-swiper !overflow-visible"
                    >
                        {slides.map((slide, index) => (
                            <SwiperSlide
                                key={slide.id}
                                className="!w-[280px] sm:!w-[350px] md:!w-[420px] lg:!w-[500px]"
                            >
                                {({ isActive }) => (
                                    <div
                                        className={`relative rounded-[2.5rem] overflow-hidden transition-all duration-700 aspect-[4/5] shadow-2xl ${isActive
                                            ? 'scale-100 opacity-100 blur-0 z-20'
                                            : 'scale-[0.85] opacity-40 blur-[4px] z-10'
                                            }`}
                                    >
                                        {/* Card Image */}
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="absolute inset-0 w-full h-full object-cover"
                                            loading="lazy"
                                        />

                                        {/* Bottom Overlay and Content */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-center text-white">
                                            <h3 className="font-impact text-2xl md:text-3xl lg:text-4xl mb-3 tracking-wide uppercase">
                                                {slide.title}
                                            </h3>
                                            <p className="text-sm md:text-base text-white/80 font-medium leading-relaxed max-w-[90%] mx-auto">
                                                {slide.description}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Main CTA */}
                <motion.div
                    className="mt-16 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 }}
                >
                    <motion.a
                        href={siteConfig.contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary inline-flex items-center gap-2 px-10 py-5 rounded-full text-lg font-bold uppercase
                                   bg-gradient-to-r from-[#9d72e7] to-[#f5a623] text-white
                                   shadow-xl shadow-black/10 transition-all duration-300 tracking-wide"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        Solicita tu asesoría gratis
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
}
