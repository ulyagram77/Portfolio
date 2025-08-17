/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{js,jsx}'],
    mode: 'jit',
    theme: {
        extend: {
            colors: {
                dark: {
                    50: '#f6f6f6',
                    100: '#e7e7e7',
                    200: '#d1d1d1',
                    300: '#b0b0b0',
                    400: '#888888',
                    500: '#6d6d6d',
                    600: '#5d5d5d',
                    700: '#4f4f4f',
                    800: '#454545',
                    900: '#3d3d3d',
                    950: '#272727', //initial
                },
                accent: {
                    50: '#fefbe8',
                    100: '#fff8c2',
                    200: '#ffec89',
                    300: '#ffde59', //initial
                    400: '#fdc512',
                    500: '#ecab06',
                    600: '#cc8302',
                    700: '#a35c05',
                    800: '#86480d',
                    900: '#723b11',
                    950: '#431e05',
                },

                // accent: '#915eff',
                text: '#ffffff',
                primary: '#050816',
                secondary: '#aaa6c3',
                tertiary: '#151030',
                'black-100': '#100d25',
                'black-200': '#090325',
                'white-100': '#f3f3f3',
            },
            boxShadow: {
                card: '0px 35px 120px -15px #211e35',
            },
            screens: {
                xs: '450px',
            },
            backgroundImage: {
                'hero-pattern': "url('/src/assets/herobg.png')",
            },
        },
    },
    plugins: [],
};
