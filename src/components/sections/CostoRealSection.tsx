import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards, Mousewheel } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

/**
 * Costo Real Section
 * Sincroniza el scroll con el paso de las tarjetas (Sticky Scroll).
 */
export default function CostoRealSection() {
    const sectionContainerRef = useRef<HTMLElement>(null);
    const swiperRef = useRef<SwiperType | null>(null);
    const isInView = useInView(sectionContainerRef, { once: false, margin: "-100px" });

    const cardsData = [
        {
            image: "/images/section_costo_real_2.png",
            content: "Tu energía se divide y terminas avanzando a medias.\nVentas, campañas, mejoras, alianzas... haces \"un poquito de todo\" y nada termina de despegar.",
            footer: "hasta que ordenamos el caos y definimos qué va primero, qué espera y qué hoy no suma."
        },
        {
            image: "/images/section_costo_real_3.png",
            content: "• Sientes el potencial, pero no logras ordenar el \"cómo\".\n• Quieres crecer y vender más, pero sin norte terminas repitiendo lo mismo y viendo los mismos resultados.",
            footer: "en Haz La Tarea lo bajamos a una ruta accionable usando tus recursos actuales."
        },
        {
            image: "/images/section_costo_real_4.png",
            content: "• Resuelves todo el día, apagas incendios y respondes urgencias, y al final sientes que trabajaste muchísimo, pero no avanzaste en lo que realmente mueve el negocio.",
            footer: "Se resuelve con norte, estrategia y estructura."
        },
        {
            image: "/images/section_costo_real_5.png",
            content: "• Decidir solo/a, a veces, da una mezcla de duda y ansiedad.\n• Quieres alguien que te rete, te ordene ideas y te haga ver lo que no estás viendo.",
            footer: "en Haz La Tarea te acompaño para que confíes en tus decisiones."
        }
    ];

    // Sticky Scroll Logic
    const { scrollYProgress } = useScroll({
        target: sectionContainerRef,
        offset: ["start start", "end end"]
    });

    // Map scroll progress to slide index (0 to 3)
    const activeSlideIndex = useTransform(scrollYProgress, [0, 1], [0, cardsData.length - 1]);

    // Update Swiper when activeSlideIndex changes
    useMotionValueEvent(activeSlideIndex, "change", (latest) => {
        if (swiperRef.current) {
            const roundedIndex = Math.round(latest);
            if (swiperRef.current.activeIndex !== roundedIndex) {
                swiperRef.current.slideTo(roundedIndex);
            }
        }
    });

    return (
        <section
            id="costo-real"
            ref={sectionContainerRef}
            className="relative bg-[#48A57A] w-full"
            style={{ height: `${cardsData.length * 90}vh` }} // Altura para controlar la velocidad del scroll
        >
            <div className="sticky top-0 h-screen flex items-center overflow-hidden">
                <div className="container-custom relative z-10 w-full py-16 md:py-24">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

                        {/* Left Side: Title and Big Arrow */}
                        <div className="relative h-full flex flex-col justify-start pt-[4rem] lg:pr-12 ">
                            <motion.div
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                className="z-20 relative"
                            >
                                <h2 className="font-impact text-[2rem] sm:text-[4rem] md:text-[5rem] lg:text-[4rem] xl:text-[5rem] text-black leading-[0.95] uppercase max-w-2xl">
                                    El costo real de avanzar sin una estrategia clara
                                </h2>
                            </motion.div>

                            {/* Big White Arrow Illustration */}
                            <motion.div
                                className="relative lg:absolute top-[4rem] lg:top-[15rem] left-[-4rem] xl:top-auto lg:bottom-[-4rem] lg:left-[-8rem] z-10 w-[22rem] sm:w-[30rem] lg:w-[28rem] xl:w-[50rem] opacity-40 lg:opacity-90 pointer-events-none"
                                initial={{ opacity: 0, y: 100, rotate: -10 }}
                                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                                transition={{ duration: 1, delay: 0.2 }}
                            >
                                <img
                                    src="/images/section_costo_real_1.png"
                                    alt=""
                                    className="w-full h-auto drop-shadow-3xl"
                                />
                            </motion.div>
                        </div>

                        {/* Right Side: Stacked Cards Carousel */}
                        <div className="relative z-20 w-full flex justify-center lg:justify-end mt-12 lg:mt-0 mx-5">
                            <motion.div
                                className="w-full max-w-[34rem]"
                                initial={{ opacity: 0, scale: 0.9, x: 50 }}
                                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.4 }}
                            >
                                <Swiper
                                    onSwiper={(swiper) => { swiperRef.current = swiper; }}
                                    effect={'cards'}
                                    grabCursor={true}
                                    modules={[EffectCards, Mousewheel]}
                                    cardsEffect={{
                                        slideShadows: false,
                                        perSlideOffset: 12,
                                        perSlideRotate: 0
                                    }}
                                    loop={false}
                                    speed={600}
                                    allowTouchMove={true}
                                    className="costo-real-swiper w-full"
                                >
                                    {cardsData.map((card, index) => (
                                        <SwiperSlide key={index} className="min-h-[36rem] sm:min-h-[42rem] rounded-[2.5rem] bg-[#FFB84D] shadow-2xl overflow-hidden">
                                            <div className="p-8 md:p-12 flex flex-col h-full relative">
                                                {/* Illustration inside the card */}
                                                <div className="flex justify-center mb-8">
                                                    <motion.img
                                                        src={card.image}
                                                        alt=""
                                                        className="w-40 md:w-56 h-auto drop-shadow-xl"
                                                        animate={{
                                                            y: [0, -10, 0],
                                                            rotate: [0, 1, 0, -1, 0]
                                                        }}
                                                        transition={{
                                                            duration: 6,
                                                            repeat: Infinity,
                                                            ease: "easeInOut"
                                                        }}
                                                    />
                                                </div>

                                                {/* Content */}
                                                <div className="min-h-[3rem] sm:min-h-[6rem] flex-1 space-y-4">
                                                    <div className="text-black text-base md:text-lg leading-relaxed whitespace-pre-line font-medium opacity-90">
                                                        {card.content}
                                                    </div>
                                                </div>

                                                {/* Footer / Solution */}
                                                <div className="flex items-end justify-between mt-8 pt-6 border-t border-black/10 gap-4">
                                                    <div className="flex-1">
                                                        <p className="text-black font-bold italic text-sm md:text-lg ">
                                                            {card.footer}
                                                        </p>
                                                    </div>

                                                    {/* PNG Arrow Decoration */}
                                                    <div className="flex-shrink-0 mb-1">
                                                        <img
                                                            src="/images/section_costo_real_arrow_1.png"
                                                            alt="Flechas"
                                                            className="w-[8rem] md:w-[14rem] h-auto"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
