import type { Config } from 'tailwindcss';

export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        extend: {
            screens: {
                xs: "375px",
                sm: "640px",
                md: "768px",
                lg: "1024px",
                xl: "1280px",
                "2xl": "1536px",
                "3xl": "1920px",
                "4xl": "2560px",
            },
            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "1.2rem",
                    md: "1.5rem",
                    lg: "2rem",
                    xl: "3rem",
                    "2xl": "6rem",
                },
            },
            fontFamily: {
                impact: ['Impact', 'Haettenschweiler', 'Arial Narrow Bold', 'sans-serif'],
                amsi: ['AmsiPro', 'sans-serif'],
                sans: ['AmsiPro', 'system-ui', 'sans-serif'],
            },
            colors: {
                primary: {
                    DEFAULT: '#13F66F',
                    light: '#4AFF8E',
                    dark: '#0BC85A',
                    50: '#E6FFF0',
                    100: '#CCFFE1',
                    200: '#99FFC3',
                    300: '#66FFA5',
                    400: '#33FF87',
                    500: '#13F66F',
                    600: '#0FC55A',
                    700: '#0B9444',
                    800: '#07622E',
                    900: '#043117',
                },
                secondary: {
                    DEFAULT: '#1A1A2E',
                    light: '#2D2D44',
                    dark: '#0F0F1A',
                },
                accent: {
                    lime: '#D4FF00',
                    cyan: '#00E5FF',
                    purple: '#8B5CF6',
                },
                background: {
                    DEFAULT: '#000000',
                    dark: '#0A0A0A',
                    card: '#121212',
                    elevated: '#1A1A1A',
                },
                text: {
                    primary: '#FFFFFF',
                    secondary: '#A1A1AA',
                    muted: '#6B7280',
                },
                border: {
                    DEFAULT: 'rgba(255, 255, 255, 0.1)',
                    light: 'rgba(255, 255, 255, 0.2)',
                },
            },
            backgroundImage: {
                'gradient-primary': 'linear-gradient(135deg, #13F66F 0%, #0BC85A 100%)',
                'gradient-dark': 'linear-gradient(180deg, #000000 0%, #0A0A0A 100%)',
                'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out',
                'fade-up': 'fadeUp 0.6s ease-out',
                'slide-in-left': 'slideInLeft 0.5s ease-out',
                'slide-in-right': 'slideInRight 0.5s ease-out',
                'scale-in': 'scaleIn 0.3s ease-out',
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'float': 'float 3s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                slideInLeft: {
                    '0%': { opacity: '0', transform: 'translateX(-30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                slideInRight: {
                    '0%': { opacity: '0', transform: 'translateX(30px)' },
                    '100%': { opacity: '1', transform: 'translateX(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-10px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 20px rgba(19, 246, 111, 0.3)' },
                    '100%': { boxShadow: '0 0 40px rgba(19, 246, 111, 0.6)' },
                },
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '100': '25rem',
                '112': '28rem',
                '128': '32rem',
            },
            zIndex: {
                '60': '60',
                '70': '70',
                '80': '80',
                '90': '90',
                '100': '100',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
} satisfies Config;
