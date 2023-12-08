/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './index.css', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        colors: {
            blue_header: '#2E425D',
            blue_background: '#3F82AC',
            text: '#154360',
            blue_background_2: '#C2E0ED',
            grey: '#F8F8F8',
            white: '#FFFFFF',
            grey2: '#666666',
            black: '#000000',
            beige: '#D0CBC7',
            greyblue: '#5B84AA',
            darknavy: "#022239",
            navy:'#30415D',
            darkgrey:"#474848",
            yellow:"#E5CE00",
            blue3:"#78A0C7"
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            jaldi: 'Jaldi',
            josefinsans: 'Josefin-sans',
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
    plugins: [ ],
};
