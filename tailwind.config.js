/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'lg': '0px 10px 40px 0px rgba(0, 0, 0, 0.45)',
      },
      maxWidth: {
        'sm': '380px',
      },
      transitionProperty: {
        'height': 'height'
      },
      backdropBlur: {
        DEFAULT: '10px',
      },
      borderRadius: {
        DEFAULT: '5px',
        'lg': '10px',
      },
      fontSize: {
        // p - means plus
        smaller: '10px',
        s: '12px',
        sp: '14px',
        xlp: '22px',
        title: '34px',
      },
      text: {
        DEFAULT: '#fff'
      },
      spacing: {
        '1.25': '5px',
        '3.25': '15px',
        '4.5': '18px',
        '5.25': '21px',
        '6.5': '26px',
        '7.5': '30px',
        '11.5': '46px',
        '12.5': '50px',
        '22': '90px',
        '23': '93px',
      },
      colors: {
        'dark': {
          100: '#181818',
          200: '#151515',
          300: '#141414',
          500: '#101010',
          900: '#0F0F0F',
        },
        'light': {
          100: '#fff',
          300: '#A9A9A9',
          400: '#ffffff80',
          500: '#505050',
        },
        gray: '#1C1C1C',
        bloodRed: '#CC0001',
        cyan: '#20D691',
        link: '#0094FF',
        cyanDark: '#31CB9E', 
        cyanSuperDark: '#31cb9e33',
        cyanLight: '#7AE5B5', 
        primaryBorder: '#84befa1a',
      },
    },
    container: {
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1520px'
        // => @media (min-width: 1520px) { ... }
      },

      fontSize: {
        base: '20px'
      },

      center: true
    },
    fontFamily: {
      Ubuntu: ['Ubuntu', 'sans-serif'],
      OpenSans: ['Open Sans', 'sans-serif']
    }
  },
  plugins: []
};
