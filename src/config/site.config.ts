export const siteConfig = {
    name: "Haz La Tarea",
    tagline: "La intención existe, la metodología la vuelve realidad",
    author: "Naddia Schiaffino",
    url: "https://www.hazlatarea.pe",
    email: "contacto@hazlatarea.pe",
    logo: "/images/logo.png",

    // Colores de marca
    colors: {
        primary: "#13F66F",
        secondary: "#1A1A2E",
        accent: "#D4FF00",
        background: "#000000",
        text: "#FFFFFF",
    },

    // Redes sociales
    social: {
        instagram: "https://instagram.com/hazlatarea",
        linkedin: "https://linkedin.com/company/hazlatarea",
        tiktok: "https://tiktok.com/@hazlatarea",
        youtube: "https://youtube.com/@hazlatarea",
    },

    // Navegación principal
    navigation: [
        { name: "Inicio", href: "/" },
        { name: "Servicios", href: "#servicios" },
        { name: "Metodología", href: "#metodologia" },
        { name: "Sobre Nosotros", href: "#founder" },
        { name: "Contacto", href: "#contacto" },
    ],

    // Información de contacto
    contact: {
        phone: "+51 999 999 999",
        email: "contacto@hazlatarea.pe",
        whatsapp: "https://wa.me/51999999999",
    },

    // CTA principal
    cta: {
        primary: {
            text: "Unirme a la comunidad",
            href: "#comunidad",
        },
        secondary: {
            text: "Conocer más",
            href: "#servicios",
        },
    },
};

export type SiteConfig = typeof siteConfig;
