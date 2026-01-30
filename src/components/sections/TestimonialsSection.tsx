import { useRef } from 'react';
import { motion, useInView, type Variants } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

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
            name: "Josué Alfaro",
            role: "CEO y Fundador",
            company: "Dinoplanet",
            content: "En el mundo del comercio electrónico estaba perdido. Necesitaba entender este mundo y no solo viendo tutoriales, sino trabajando con gente que sabe y que es experta en temas de estrategia. Haz La Tarea me lo hizo más claro, más ordenado y hoy por hoy tengo una hoja de ruta con la que estoy encantado. Me gustó mucho el seguimiento; el acompañamiento de Naddia fue A1. La recomendaría porque saben mucho de estrategia y, si no sabes muy bien cómo arranca el proceso, tienes que ir con expertos.",
            avatar: "/images/logo_dinoplanet.webp"
        },
        {
            id: 2,
            name: "Carlos Esboña",
            role: "CEO y CoFundador",
            company: "Top Gift Brands",
            content: "Conocí a Naddia en un taller que dictó llamado 'Arma tu estrategia comercial', y la forma tan clara de abordar los temas comerciales y presupuestales no solo me dejó satisfecho, sino que superó ampliamente mis expectativas. Luego de eso la contacté y así conocí a la consultora Haz La Tarea. Después de llevar las primeras sesiones y del acompañamiento posterior constante, la recomiendo definitivamente porque no solo nos ayudó a establecer el norte estratégico del negocio, sino que también nos ayudó a plasmar ese norte en acciones y metas concretas. Los resultados se vieron desde el inicio. Además, siempre nos acompaña y nos sigue ayudando a no perder el norte para poder llegar a los objetivos planteados.",
            avatar: "/images/logo_topgift.webp"
        },
        {
            id: 3,
            name: "Daphy Cavero",
            role: "CoFundadora",
            company: "Awake",
            content: "La sesión de claridad, tal cual su nombre lo indica, nos trajo claridad primero sobre la segmentación, la investigación y la personalización para hacer el approach a los clientes potenciales, a las personas con las que queremos conectar en las empresas. Eso me pareció muy valioso, porque era algo que no teníamos contemplado, así que fue un gran insight. Por otro lado, también nos ayudó a calcular la cantidad de contactos comerciales que tenemos que hacer, a nivel anual, mensual e incluso diario. Todo eso llevado a pequeñas acciones diarias y a entender todo lo que se puede lograr, y cómo cada mensaje diario nos va a ayudar a llegar a los objetivos planteados. Me pareció muy interesante esa parte de desagregar nuestro objetivo de ventas en números y, a partir de ahí, definir cuáles son las acciones diarias, qué enfoque darles y cómo hacerlo con estrategia.",
            avatar: "/images/logo_awake.webp"
        },
        {
            id: 4,
            name: "Andrea Lenz",
            role: "CEO y Fundadora",
            company: "BTL Lenz",
            content: "En BLT Lenz, teníamos un reto importante: nuestras ventas llegaban principalmente por referidos y estaban muy concentradas en pocos clientes. Eso nos daba resultados pero, también, mucha incertidumbre. Con \"Haz La Tarea\" trabajamos cómo diseñar una estrategia comercial más proactiva, que nos permitiera dejar de reaccionar y empezar a predecir el ingreso de ventas, además de reducir la dependencia de algunos clientes. Nos dio mucha claridad y apertura de perspectiva más estratégica, no solo sobre ventas, sino sobre el negocio en general. Salimos con un norte claro y con una forma distinta de pensar y gestionar nuestro crecimiento.",
            avatar: "/images/logo_lenz.webp"
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
            id="casos"
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
                <div className="relative group px-10 md:px-14">
                    {/* Navigation Buttons */}
                    <button className="testimonials-prev absolute left-0 top-1/2 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 rounded-full bg-white flex items-center justify-center text-[#48A57A] shadow-lg z-20 transition-all hover:bg-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed">
                        <HiChevronLeft className="text-2xl md:text-3xl" />
                    </button>
                    <button className="testimonials-next absolute right-0 top-1/2 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 rounded-full bg-white flex items-center justify-center text-[#48A57A] shadow-lg z-20 transition-all hover:bg-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed">
                        <HiChevronRight className="text-2xl md:text-3xl" />
                    </button>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={false}
                        navigation={{
                            prevEl: '.testimonials-prev',
                            nextEl: '.testimonials-next',
                        }}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 24 },
                            1024: { slidesPerView: 3, spaceBetween: 30 }
                        }}
                        className="testimonials-swiper !overflow-visible"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="min-h-[38rem] md:min-h-[42rem] lg:min-h-[44rem] bg-white rounded-[2rem] p-8 md:p-10 h-full flex flex-col shadow-xl">
                                    {/* Company Logo */}
                                    <div className="h-16 mb-8 flex items-center justify-start">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.company}
                                            className="max-h-full max-w-[150px] object-contain"
                                        />
                                    </div>

                                    {/* Quote Text */}
                                    <p className="text-gray-700 text-sm leading-relaxed flex-1 italic mb-8">
                                        "{testimonial.content}"
                                    </p>

                                    {/* Author Info */}
                                    <div className="mt-auto border-t border-gray-100 pt-6">
                                        <h4 className="font-bold text-black text-lg leading-tight uppercase">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-black font-medium text-sm mt-1">
                                            {testimonial.role} - {testimonial.company}
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
}
