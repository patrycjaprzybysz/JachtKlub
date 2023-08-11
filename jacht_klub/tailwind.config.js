/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './index.css', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            blue_header: '#1C5F88',
            blue_background: '#3F82AC',
            text: '#154360',
            blue_background_2: '#C2E0ED',
            grey: '#D9D9D9',
            white: '#F3F3F3',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            jaldi: ['Jaldi', 'sans-serif'],
            josefinsans: ['josefin-sans', 'sans-serif'],
        },
        extend: {
            backgroundImage: {
                logo: 'url(src/assets/media/logo.png)',
                background: 'url(src/assets/media/background.webp)',
            },
            boxShadow: {
                left: '-20px -20px rgb(63,130,172)',
                right: '20px -20px rgb(63,130,172)',
            },
        },
    },
    plugins: [],
};
