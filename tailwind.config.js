/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,svg}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,svg}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,svg}',
  ],
  theme: {
    extend: {
      screens: {
        movil: '320px',
        inter: '640px',
        tablet: '768px',
        laptop: '1024px',
        desktop: '1440px',
      },
      colors: {
        darkPrymaryColor: '#FBC02D',
        lightPrymaryColor: 'rgba(255, 235, 59, 0.4)',
        primaryColor: '#FFEB3B',
        textANDicons: '#212121',
        acentColor: '#FF5252',
        primaryText: '#212121',
        secondaryText: '#757575',
        dividerColor: '#BDBDBD',
        nav: 'rgba(23, 23, 23, 1)',
      },
      fontFamily: {
        montserrat: 'var(--font-montserrat)',
      },
      fontSize: {
        title: '2.5rem', // 40px
        subtitle: '1.5rem', // 24px
        paragraph: '1rem', // 16px
      },
      fontWeight: {
        title: '700',
        subtitle: '500',
        paragraph: '400',
      },
    },
  },
  plugins: [],
};



