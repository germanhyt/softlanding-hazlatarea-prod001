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
        instagram: "https://www.instagram.com/hazlatarea.la/",
        linkedin: "https://www.linkedin.com/company/haz-la-tarea",
        tiktok: "https://www.tiktok.com/@hazlatarea.la",
        // youtube: "https://youtube.com/@hazlatarea",
        linkedinPersonal: "https://www.linkedin.com/in/naddia-schiaffino",
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
        // href="https://api.whatsapp.com/send?phone=+51999459707&text=Hola👋,.."
        // ref de whats con mensaje de "Hola 👋, requiero la asesoría gratuita..."
        whatsapp: "https://api.whatsapp.com/send?phone=+51999459707&text=Hola👋,%20me%20puede%20brindar%20la%20asesoría%20gratuita..."
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
