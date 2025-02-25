import type { Config } from 'tailwindcss'

export default {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Noto Sans', 'sans-serif'],
            },
            colors: {
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                primary: '#344054',
                secondary: '#1D2939',
                defaultYellow: '#FFC21F',
            },
        },
    },
    plugins: [],
} satisfies Config
