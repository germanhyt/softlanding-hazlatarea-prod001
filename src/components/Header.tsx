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
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? 'py-2  bg-black/50 backdrop-blur-md shadow-lg'
                : 'py-4 md:py-6 bg-transparent'
                }`}
        >
            <nav className="container-custom">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <a
                        href="/"
                        className="flex items-center gap-3 group relative z-10"
                    >
                        <img
                            src="/images/logo.png"
                            alt="Haz La Tarea"
                            className="h-[4rem] md:h-[6rem] w-auto transition-transform duration-300 group-hover:scale-105"
                        />
                    </a>

                    {/* Desktop Navigation - Pill style + Hamburger */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className={`flex items-center gap-1 px-2 py-2 rounded-full transition-all duration-300 ${isScrolled
                            ? 'bg-white/95 shadow-lg shadow-black/10 backdrop-blur-sm'
                            : 'bg-white/90 backdrop-blur-sm'
                            }`}>
                            {navigation.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary 
                                               transition-colors duration-200 whitespace-nowrap
                                               border-b-2 border-transparent hover:border-primary/50"
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>

                        {/* Hamburger icon next to pill in desktop */}
                        {/* <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 text-white/80 hover:text-white transition-colors"
                        >
                            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button> */}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="lg:hidden relative z-10 p-2 rounded-lg hover:bg-white/10 transition-colors"
                        aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                    >
                        <div className="w-6 h-5 flex flex-col justify-between">
                            <motion.span
                                className="w-full h-0.5 bg-white rounded-full origin-left"
                                animate={isMobileMenuOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-white rounded-full"
                                animate={isMobileMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                            <motion.span
                                className="w-full h-0.5 bg-white rounded-full origin-left"
                                animate={isMobileMenuOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 0 }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        className="lg:hidden fixed inset-0 bg-background/98 backdrop-blur-xl z-40 pt-24"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <motion.div
                            className="container-custom h-full flex flex-col"
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
                                        className="text-3xl md:text-4xl font-impact uppercase text-white 
                                                   hover:text-primary transition-colors duration-300"
                                        variants={itemVariants}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item.name}
                                    </motion.a>
                                ))}
                            </nav>

                            {/* Mobile Menu Footer */}
                            <motion.div
                                className="py-8 border-t border-white/10"
                                variants={itemVariants}
                            >
                                <a
                                    href="#contacto"
                                    className="btn-primary w-full justify-center text-lg"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    Conversemos
                                </a>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
