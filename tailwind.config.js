/** @type {import('tailwindcss').Config} */
module.exports = {
    safelist: [
        'dark'
    ],
    mode: 'jit',
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        fontFamily: {
            'montserrat': ['Montserrat', 'sans-serif'],
            'press-start': ['"Press Start 2P"', 'cursive'],
            'roboto': ['Roboto', 'sans-serif']
        },
        extend: {
            colors: {
                primary: '#E9C46A',
                secondary: '#33658A',
                background: '#264653',
                surface: '#F5F5F5'

            },
            animation: {
                'pulse-fast': 'pulse 1080ms ease-in-out infinite'
            }
        },
    },
    plugins: [
    ],
    variants: {
    }
}
