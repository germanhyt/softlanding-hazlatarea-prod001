/**
 * Formatea un número con separadores de miles
 */
export const formatNumber = (num: number): string => {
    return new Intl.NumberFormat('es-PE').format(num);
};

/**
 * Formatea un precio en soles peruanos
 */
export const formatPrice = (amount: number): string => {
    return new Intl.NumberFormat('es-PE', {
        style: 'currency',
        currency: 'PEN',
    }).format(amount);
};

/**
 * Trunca un texto a una longitud específica
 */
export const truncateText = (text: string, maxLength: number): string => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength).trim() + '...';
};

/**
 * Genera un slug a partir de un texto
 */
export const slugify = (text: string): string => {
    return text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '');
};

/**
 * Valida un email
 */
export const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
};

/**
 * Valida un número de teléfono peruano
 */
export const isValidPhone = (phone: string): boolean => {
    const phoneRegex = /^(\+51)?9\d{8}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
};

/**
 * Debounce para optimizar rendimiento
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
): ((...args: Parameters<T>) => void) => {
    let timeout: NodeJS.Timeout;
    return (...args: Parameters<T>) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => func(...args), wait);
    };
};

/**
 * Throttle para limitar llamadas de función
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
    func: T,
    limit: number
): ((...args: Parameters<T>) => void) => {
    let inThrottle: boolean;
    return (...args: Parameters<T>) => {
        if (!inThrottle) {
            func(...args);
            inThrottle = true;
            setTimeout(() => (inThrottle = false), limit);
        }
    };
};

/**
 * Clasifica clases condicionales
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
    return classes.filter(Boolean).join(' ');
};

/**
 * Genera un ID único
 */
export const generateId = (): string => {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
};

/**
 * Formatea una fecha en español
 */
export const formatDate = (date: Date): string => {
    return new Intl.DateTimeFormat('es-PE', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    }).format(date);
};

/**
 * Scroll suave a un elemento
 */
export const scrollToElement = (elementId: string, offset: number = 80): void => {
    const element = document.getElementById(elementId);
    if (element) {
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth',
        });
    }
};

/**
 * Detecta si es dispositivo móvil
 */
export const isMobile = (): boolean => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < 768;
};

/**
 * Obtiene el ancho de la ventana de forma segura
 */
export const getWindowWidth = (): number => {
    if (typeof window === 'undefined') return 1024;
    return window.innerWidth;
};
