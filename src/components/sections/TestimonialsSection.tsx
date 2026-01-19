import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    company: string;
    content: string;
    avatar: string;
}

export default function TestimonialsSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    const testimonials: Testimonial[] = [
        {
            id: 1,
            name: "Felipe Quinto",
            role: "Coca Cola.",
            company: "Coca Cola.",
            content: "Conoce la experiencia de nuestros clientes Conoce la experiencia de nuestros clientes Conoce la experiencia de nuestros clientes Conoce la experiencia de nuestros clientes Conoce la experiencia de nuestros clientes Conoce la experiencia de nuestros clientes",
            avatar: "https://i.pravatar.cc/150?u=felipe"
        },
        {
            id: 2,
            name: "Naddia Schiaffino",
            role: "Founder",
            company: "Haz La Tarea",
            content: "Trabajar con método y estrategia cambia drásticamente los resultados. No se trata solo de hacer las tareas, sino de hacer las tareas correctas en el orden correcto.",
            avatar: "https://i.pravatar.cc/150?u=felipe"
        },
        {
            id: 3,
            name: "Juan Perez",
            role: "Director",
            company: "Tech Start",
            content: "La claridad que obtuvimos en las primeras sesiones nos permitió pivotar a tiempo y salvar el semestre. Altamente recomendado para quienes se sienten estancados.",
            avatar: "https://i.pravatar.cc/150?u=felipe"
        },
        {
            id: 4,
            name: "Maria Garcia",
            role: "CEO",
            company: "Moda Sostenible",
            content: "Haz La Tarea nos ayudó a estructurar nuestro crecimiento comercial de forma orgánica y sostenible. Ahora tenemos un norte claro y sabemos qué pasos dar.",
            avatar: "https://i.pravatar.cc/150?u=felipe"
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
            id="testimonios"
            ref={sectionRef}
            className="py-20 md:py-32 bg-[#48A57A] overflow-hidden"
        >
            <div className="container-custom">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    variants={titleVariants}
                >
                    <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl text-white uppercase leading-[1.1] max-w-4xl mx-auto">
                        Historias reales de quienes <br />
                        confiaron en el proceso
                    </h2>
                </motion.div>

                {/* Swiper Carousel */}
                <div className="px-4">
                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 24 },
                            1024: { slidesPerView: 3, spaceBetween: 30 },
                            1280: { slidesPerView: 4, spaceBetween: 30 }
                        }}
                        className="testimonials-swiper !overflow-visible"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="min-h-[22rem] bg-white rounded-[1rem] p-8 h-full flex flex-col shadow-xl">
                                    {/* User Info */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-[#48A57A]/20">
                                            <img
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-black text-lg leading-tight">
                                                {testimonial.name}
                                            </h4>
                                            <p className="text-gray-500 text-sm">
                                                {testimonial.role}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Quote Text */}
                                    <p className="text-gray-700 text-sm md:text-base leading-relaxed flex-1 italic">
                                        {testimonial.content}
                                    </p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
