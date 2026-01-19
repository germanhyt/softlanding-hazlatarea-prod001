import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

/**
 * Header Component - Navegación principal con menú pill
 */
export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navigation = [
        { name: "El problema", href: "#familiar" },
        { name: "La metodología", href: "#metodologia" },
        { name: "Cómo te ayudamos", href: "#servicios" },
        { name: "Sobre nosotros", href: "#founder" },
        { name: "Casos de éxito", href: "#casos" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Bloquear scroll cuando el menú está abierto
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.touchAction = 'none'; // Extra safety for mobile
        } else {
            document.body.style.overflow = 'unset';
            document.body.style.touchAction = 'auto';
        }
        return () => {
            document.body.style.overflow = 'unset';
            document.body.style.touchAction = 'auto';
        };
    }, [isMobileMenuOpen]);

    const menuVariants: Variants = {
        closed: { opacity: 0, y: -20 },
        open: {
            opacity: 1,
            y: 0,
            transition: { staggerChildren: 0.05, delayChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        closed: { opacity: 0, y: -10 },
        open: { opacity: 1, y: 0 }
    };


    return (
        <>
            <header
                className={`fixed top-0 left-0 right-0 transition-all duration-300 ${isMobileMenuOpen ? 'z-[120]' : 'z-[100]'} ${isScrolled
                    ? 'py-2 bg-black/60 backdrop-blur-md shadow-lg shadow-black/20'
                    : 'py-4 md:py-6 bg-transparent'
                    }`}
            >
                <nav className="container-custom">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="/"
                            className="flex items-center gap-3 group relative pointer-events-auto"
                        >
                            <img
                                src="/images/logo.png"
                                alt="Haz La Tarea"
                                className="h-14 md:h-18 lg:h-20 w-auto transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>

                        {/* Desktop Navigation - Pill style */}
                        <div className="hidden lg:flex items-center gap-4">
                            <div className={`flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300 ${isScrolled
                                ? 'bg-white/10 shadow-lg backdrop-blur-md border border-white/20'
                                : 'bg-white shadow-xl'
                                }`}>
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`px-5 py-2 text-sm font-bold uppercase transition-all duration-300 rounded-full
                                               ${isScrolled
                                                ? 'text-white hover:bg-white hover:text-black'
                                                : 'text-black hover:bg-black/80 hover:text-white'
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden relative p-2 rounded-lg transition-all duration-300"
                            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            <div className="w-6 h-5 relative flex items-center justify-center">
                                <motion.span
                                    className="w-full h-0.5 bg-white rounded-full absolute"
                                    animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -7 }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    className="w-full h-0.5 bg-white rounded-full absolute"
                                    animate={isMobileMenuOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    className="w-full h-0.5 bg-white rounded-full absolute"
                                    animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 7 }}
                                    transition={{ duration: 0.2 }}
                                />
                            </div>
                        </button>
                    </div>
                </nav>
            </header>

            {/* Mobile Menu Overlay - Outside header to avoid transition issues */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="lg:hidden fixed inset-0 bg-black/80 backdrop-blur-xl z-[110] flex flex-col pt-32 touch-none px-6"
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.div
                            className="container-custom flex-1 flex flex-col"
                            variants={menuVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                        >
                            <nav className="flex-1 flex flex-col justify-center gap-6">
                                {navigation.map((item, index) => (
                                    <motion.a
                                        key={item.name}
                                        href={item.href}
                                        className="text-4xl sm:text-5xl font-impact uppercase text-white 
                                                   hover:text-[#13F66F] transition-colors duration-300"
                                        variants={itemVariants}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Mobile Menu Footer */}
                            <motion.div
                                className="py-12 border-t border-white/10"
                                variants={itemVariants}
                            >
                                <a
                                    href="#contacto"
                                    className="btn-primary w-full justify-center text-xl py-6 rounded-2xl"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Conversemos
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
