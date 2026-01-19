import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView, type Variants } from 'framer-motion';

interface FAQItem {
    question: string;
    answer: string;
}

export default function FAQSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    const faqs: FAQItem[] = [
        {
            question: "¿Qué puedo esperar concretamente de una sesión gratuita de 45 minutos?",
            answer: "Una conversación estratégica donde me cuentas tu situación y tus principales dolores en el negocio. Te vas con claridad y con ideas o tareas concretas que te ayudarán a avanzar."
        },
        {
            question: "¿Necesito tener claros mis números o mi estrategia antes de agendar?",
            answer: "No. La sesión está pensada justamente para quienes sienten que tienen información suelta, intuición o dudas. No necesitas llegar con todo resuelto, solo con apertura para conversar."
        },
        {
            question: "¿En qué se diferencia esta sesión de una asesoría o consultoría tradicional?",
            answer: "Entendemos la realidad de emprendedores y PYMES. Es una sesión práctica, con tareas y recomendaciones que aportan valor desde el primer encuentro. No es teoría: es acción con estructura, pensada para dueños de negocio que valoran resultados y una mirada de largo plazo."
        },
        {
            question: "¿Qué pasa si al final de la sesión decido no avanzar con ningún servicio?",
            answer: "No pasa nada. La sesión es un espacio independiente, sin compromiso. Muchas personas la usan solo para inspirarse, ordenar ideas y tomar mejores decisiones por su cuenta."
        },
        {
            question: "¿Puedo agendar la sesión si estoy en una etapa temprana de mi negocio?",
            answer: "Sí. Es especialmente útil si estás empezando y quieres evitar errores comunes, ganar foco y tomar decisiones con mayor intención desde el inicio."
        }
    ];

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            ref={sectionRef}
            className="py-20 md:py-32 bg-[#F9F7F2] relative overflow-hidden"
        >
            {/* Corner decoration - Wavy Purple */}
            <div className="absolute top-0 right-0 w-[200px] md:w-[400px] pointer-events-none z-0">
                <img
                    src="/images/section_faq_esquinero_superior-derecha.png"
                    alt=""
                    className="w-full h-auto"
                />
            </div>

            <div className="container-custom relative z-10 px-4">
                {/* Title */}
                <motion.div
                    className="text-center mb-16 md:mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="font-impact text-4xl sm:text-5xl md:text-6xl text-black uppercase tracking-tight">
                        Preguntas Frecuentes
                    </h2>
                </motion.div>

                {/* FAQ Accordion container */}
                <div className="max-w-4xl mx-auto divide-y divide-gray-300">
                    {faqs.map((faq, index) => (
                        <div key={index} className="py-6">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex items-center justify-between text-left group transition-all"
                            >
                                <span className="text-lg md:text-xl font-medium text-black pr-8">
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="pt-4 text-gray-600 text-base md:text-lg leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                    {/* Bottom border for the last item */}
                    <div className="border-t border-gray-300"></div>
                </div>
            </div>
        </section>
    );
}
