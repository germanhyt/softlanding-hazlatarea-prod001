import { useState, useEffect } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';

/**
 * Header Component - Navegación principal con menú pill
 */
export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [isScrolled, setIsScrolled] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navigation = [
        { name: "El problema", href: "#familiar" },
        { name: "La metodología", href: "#metodologia" },
        { name: "Cómo te ayudamos", href: "#servicios" },
        { name: "Sobre nosotros", href: "#founder" },
        { name: "Casos de éxito", href: "#casos" },
    ];

    // Lógica de scroll
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            // Determinar si hemos scrolleado para el estilo compacto
            if (currentScrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Lógica de visibilidad (Show on scroll-up, Hide on scroll-down)
            if (currentScrollY <= 0) {
                // Estamos arriba del todo
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY) {
                // Scrolleando hacia abajo
                // Solo ocultar si ya bajamos un poco (evitar flickering al inicio)
                if (currentScrollY > 50) {
                    setIsVisible(false);
                }
            } else {
                // Scrolleando hacia arriba
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

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
            <motion.header
                className={`fixed top-0 left-0 w-full z-[100] ${isMobileMenuOpen ? 'z-[120]' : 'z-[100]'}`}
                initial={false}
                animate={{
                    y: isVisible ? 0 : -100,
                    backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'rgba(255, 255, 255, 0)',
                    paddingTop: isScrolled ? '10px' : '24px',
                    paddingBottom: isScrolled ? '10px' : '24px',
                    boxShadow: isScrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.1)' : '0 0px 0px 0px rgba(0, 0, 0, 0)',
                    backdropFilter: isScrolled ? 'blur(16px)' : 'blur(0px)',
                    borderBottomWidth: isScrolled ? '1px' : '0px',
                    borderBottomColor: 'rgba(0, 0, 0, 0.05)'
                }}
                transition={{
                    y: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                    paddingTop: { duration: 0.4, ease: "easeInOut" },
                    paddingBottom: { duration: 0.4, ease: "easeInOut" },
                    backgroundColor: { duration: 0.4 },
                    default: { duration: 0.4 }
                }}
            >
                <nav className="container-custom">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <a
                            href="/"
                            className="flex items-center gap-3 group relative pointer-events-auto"
                        >
                            <motion.img
                                src="/images/logo.png"
                                alt="Haz La Tarea"
                                animate={{
                                    height: isScrolled ? 42 : 72,
                                    filter: isScrolled ? 'brightness(0)' : 'brightness(1)'
                                }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                className="w-auto transition-transform duration-300 group-hover:scale-105"
                            />
                        </a>

                        {/* Desktop Navigation - Pill style */}
                        <div className="hidden lg:flex items-center gap-4">
                            <motion.div
                                className="flex items-center gap-1 px-2 py-1.5 rounded-full"
                                animate={{
                                    backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.05)' : 'rgba(255, 255, 255, 1)',
                                    boxShadow: isScrolled ? 'none' : '0 15px 25px -5px rgba(0, 0, 0, 0.1)'
                                }}
                                transition={{ duration: 0.4 }}
                            >
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className={`px-5 py-2 text-sm font-bold uppercase transition-all duration-300 rounded-full hover:bg-black hover:text-white ${isScrolled ? 'text-gray-900' : 'text-black'
                                            }`}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </motion.div>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="lg:hidden relative p-2 rounded-lg transition-all duration-300 z-[120]"
                            aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
                        >
                            <div className="w-6 h-5 relative flex items-center justify-center">
                                <motion.span
                                    className="w-full h-0.5 rounded-full absolute"
                                    animate={{
                                        rotate: isMobileMenuOpen ? 45 : 0,
                                        y: isMobileMenuOpen ? 0 : -7,
                                        backgroundColor: isMobileMenuOpen || isScrolled ? '#000' : '#fff'
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    className="w-full h-0.5 rounded-full absolute"
                                    animate={{
                                        opacity: isMobileMenuOpen ? 0 : 1,
                                        x: isMobileMenuOpen ? -10 : 0,
                                        backgroundColor: isMobileMenuOpen || isScrolled ? '#000' : '#fff'
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                                <motion.span
                                    className="w-full h-0.5 rounded-full absolute"
                                    animate={{
                                        rotate: isMobileMenuOpen ? -45 : 0,
                                        y: isMobileMenuOpen ? 0 : 7,
                                        backgroundColor: isMobileMenuOpen || isScrolled ? '#000' : '#fff'
                                    }}
                                    transition={{ duration: 0.2 }}
                                />
                            </div>
                        </button>
                    </div>
                </nav>
            </motion.header>

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
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Contáctanos"
                                    href="https://api.whatsapp.com/send?phone=+51999459707&text=Hola👋,%20me%20puede%20brindar%20más%20información..."
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
