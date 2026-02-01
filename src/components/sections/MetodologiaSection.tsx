import { useState, useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCreative, Navigation, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import { siteConfig } from '../../config/site.config';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-creative';
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
            description: "Priorizamos entre 1 y 3 frentes, diseñamos el modelo comercial, propuesta de valor, segmentación, pipeline, indicadores y, sobre todo, lo que no haremos."
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
            description: "Implementación con seguimiento semanal, en donde “haces las tareas”, ves avances medibles para sostener hábitos nuevos y evitar caer en el “modo anterior."
        }
    ];

    const titleVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.2, ease: "easeOut" as const }
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
                        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex % slides.length)}
                        effect={'creative'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        initialSlide={slides.length}
                        loop={true}
                        speed={1000}
                        watchSlidesProgress={true}
                        creativeEffect={{
                            limitProgress: 3,
                            prev: {
                                shadow: false,
                                translate: ['-115%', 0, -350],
                                rotate: [0, -30, 0],
                                opacity: 0.5,
                            },
                            next: {
                                shadow: false,
                                translate: ['115%', 0, -350],
                                rotate: [0, 30, 0],
                                opacity: 0.5,
                            },
                        }}
                        autoplay={{
                            delay: 4500,
                            disableOnInteraction: false,
                        }}
                        navigation={{
                            prevEl: '.metodologia-prev',
                            nextEl: '.metodologia-next',
                        }}
                        modules={[EffectCreative, Navigation, Autoplay]}
                        className="swiper-metodologia !overflow-visible"
                    >
                        {[...slides, ...slides, ...slides].map((slide, index) => (
                            <SwiperSlide
                                key={`metod-slide-${slide.id}-${index}`}
                                className="!w-[280px] sm:!w-[350px] md:!w-[420px] lg:!w-[500px]"
                            >
                                {({ isActive }) => (
                                    <motion.div
                                        animate={{
                                            // scale: isActive ? 1 : 0.85,
                                            filter: isActive ? 'blur(0px)' : 'blur(4px)',
                                        }}
                                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                                        className={`relative rounded-[2.5rem] overflow-hidden aspect-[4/5] shadow-2xl transition-all duration-700 ${isActive ? 'z-20' : 'z-10'}`}
                                        style={{
                                            perspective: "2000px",
                                            isolation: 'isolate',
                                            backfaceVisibility: 'hidden',
                                            transformStyle: 'preserve-3d'
                                        }}
                                    >
                                        {/* Card Image */}
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem]"
                                            style={{ borderRadius: '2.5rem' }}
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
                                    </motion.div>
                                )}
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Desktop Navigation Buttons - Absolutely positioned at sides */}
                    <button className="metodologia-prev absolute -left-4 lg:-left-2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-black/50 bg-white items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 z-30 disabled:opacity-20 disabled:cursor-not-allowed hidden md:flex shadow-xl">
                        <HiChevronLeft className="text-3xl" />
                    </button>
                    <button className="metodologia-next absolute -right-4 lg:-right-2 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-black/50 bg-white items-center justify-center text-black hover:bg-black hover:text-white transition-all duration-300 z-30 disabled:opacity-20 disabled:cursor-not-allowed hidden md:flex shadow-xl">
                        <HiChevronRight className="text-3xl" />
                    </button>

                    {/* Mobile Navigation Buttons - Positioned below */}
                    <div className="flex justify-center items-center gap-8 mt-10 md:hidden relative z-20">
                        <button className="metodologia-prev w-14 h-14 rounded-full border border-black/50 flex items-center justify-center text-black bg-white active:bg-black active:text-white transition-colors">
                            <HiChevronLeft className="text-2xl" />
                        </button>
                        <button className="metodologia-next w-14 h-14 rounded-full border border-black/50 flex items-center justify-center text-black bg-white active:bg-black active:text-white transition-colors">
                            <HiChevronRight className="text-2xl" />
                        </button>
                    </div>
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
                        className="inline-flex items-center gap-2 px-10 py-4 rounded-full text-lg font-medium text-center uppercase
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
