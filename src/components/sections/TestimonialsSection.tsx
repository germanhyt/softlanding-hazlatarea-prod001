import { useRef, useState } from 'react';
import { motion, useInView, type Variants, AnimatePresence } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { HiChevronLeft, HiChevronRight, HiX } from 'react-icons/hi';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { siteConfig } from '../../config/site.config';

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
    const [selectedTestimonial, setSelectedTestimonial] = useState<Testimonial | null>(null);

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

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" as const }
        }
    };


    const truncateText = (text: string, maxLength: number = 180) => {
        if (text.length <= maxLength) return text;
        return text.substring(0, maxLength).trim() + "...";
    };

    return (
        <section
            id="casos"
            ref={sectionRef}
            className="py-20 md:pt-32 bg-[#48A57A] overflow-hidden"
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
                    <button className="testimonials-prev absolute left-0 top-1/2 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 rounded-full bg-white flex items-center justify-center text-black shadow-lg z-20 transition-all hover:bg-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed">
                        <HiChevronLeft className="text-2xl md:text-3xl" />
                    </button>
                    <button className="testimonials-next absolute right-0 top-1/2 -translate-y-1/2 w-10 md:w-12 h-10 md:h-12 rounded-full bg-white flex items-center justify-center text-black shadow-lg z-20 transition-all hover:bg-white hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed">
                        <HiChevronRight className="text-2xl md:text-3xl" />
                    </button>

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                            prevEl: '.testimonials-prev',
                            nextEl: '.testimonials-next',
                        }}
                        speed={1500}
                        grabCursor={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            640: { slidesPerView: 2, spaceBetween: 20 },
                            1024: { slidesPerView: 3, spaceBetween: 20 },
                        }}
                        className="testimonials-swiper !overflow-visible"
                    >
                        {testimonials.map((testimonial) => (
                            <SwiperSlide key={testimonial.id}>
                                <div className="bg-white rounded-[2rem] p-8 md:p-10 h-ful min-h-[32rem] xs:min-h-[28rem] lg:min-h-[34rem] xl:min-h-[28rem] flex flex-col shadow-xl">
                                    {/* Company Logo */}
                                    <div className="h-16 mb-8 flex items-center justify-start">
                                        <img
                                            src={testimonial.avatar}
                                            alt={testimonial.company}
                                            className="max-h-full max-w-[150px] object-contain"
                                        />
                                    </div>

                                    {/* Quote Text */}
                                    <div className="flex-1 flex flex-col">
                                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed italic mb-4">
                                            "{truncateText(testimonial.content)}"
                                        </p>
                                        {testimonial.content.length > 180 && (
                                            <button
                                                onClick={() => setSelectedTestimonial(testimonial)}
                                                className="text-[#48A57A] font-bold text-sm hover:underline text-left w-fit mb-6"
                                            >
                                                Ver más
                                            </button>
                                        )}
                                    </div>

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

                {/* CTA Button */}
                <motion.div
                    variants={itemVariants}
                    className='pt-16 w-full flex justify-center'
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

            {/* Modal Detail */}
            <AnimatePresence>
                {selectedTestimonial && (
                    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedTestimonial(null)}
                            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-2xl bg-white rounded-[2.5rem] p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto"
                        >
                            <button
                                onClick={() => setSelectedTestimonial(null)}
                                className="absolute top-6 right-6 p-2 rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"
                            >
                                <HiX className="text-2xl" />
                            </button>

                            {/* Header: Name and Role */}
                            <div className="mb-8 border-b border-gray-100 pb-6 pr-10">
                                <h3 className="font-impact text-3xl md:text-4xl text-black uppercase leading-tight">
                                    {selectedTestimonial.name}
                                </h3>
                                <p className="text-black font-bold text-lg mt-1">
                                    {selectedTestimonial.role} de {selectedTestimonial.company}
                                </p>
                            </div>

                            {/* Body: Full Story */}
                            <div className="prose prose-sm md:prose-base max-w-none">
                                <p className="text-gray-700 leading-relaxed italic text-lg">
                                    "{selectedTestimonial.content}"
                                </p>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
}
