export interface SEOConfig {
    title: string;
    description: string;
    keywords: string[];
    openGraph: {
        title: string;
        description: string;
        image: string;
        url: string;
        type: string;
    };
    twitter: {
        card: string;
        site: string;
        creator: string;
    };
}

export const defaultSEO: SEOConfig = {
    title: "Haz La Tarea | Estrategia de Negocios y Emprendimiento",
    description: "Transforma tu emprendimiento con metodología probada. Naddia Schiaffino te guía para pasar de la intención a la ejecución real con estrategias que generan resultados.",
    keywords: [
        "emprendimiento",
        "estrategia de negocios",
        "Naddia Schiaffino",
        "haz la tarea",
        "mentoría empresarial",
        "fintech",
        "edtech",
        "startups",
        "coaching empresarial",
        "metodología de negocios"
    ],
    openGraph: {
        title: "Haz La Tarea | Estrategia de Negocios y Emprendimiento",
        description: "Transforma tu emprendimiento con metodología probada. De la intención a la ejecución real.",
        image: "/og-image.jpg",
        url: "https://www.hazlatarea.pe",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        site: "@hazlatarea",
        creator: "@naddiaschiaffino",
    },
};

export const pageSEO = {
    home: {
        title: "Haz La Tarea | Inicio",
        description: "La intención existe, la metodología la vuelve realidad. Descubre cómo transformar tu emprendimiento con estrategias probadas.",
    },
    about: {
        title: "Conoce a la Founder | Haz La Tarea",
        description: "Conoce a Naddia Schiaffino, estratega de negocios con más de una década de experiencia en banca, fintech y edtech.",
    },
    services: {
        title: "¿Qué hacemos? | Haz La Tarea",
        description: "Descubre nuestros servicios de consultoría, mentoría y estrategia para emprendedores que buscan resultados reales.",
    },
    contact: {
        title: "Contáctanos | Haz La Tarea",
        description: "¿Listo para dar el siguiente paso? Contáctanos y comienza tu transformación empresarial.",
    },
};
