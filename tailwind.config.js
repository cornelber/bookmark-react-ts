/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['"Rubik"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          'blue': 'hsl(231, 69%, 60%)',
          'red': 'hsl(0, 94%, 66%)',
        },
        secondary: {
          'gray': 'hsl(229, 8%, 60%)',
          'dark': 'hsl(229, 31%, 21%)',
        },
      },
      fontSize: {
        xs: ['13px', {
          lineHeight: '17px',
          letterSpacing: '1.5px',
        }],
        sm: '14px',
        base: '16px',
        xl: '20px',
        '2xl': '25.008px',
        '3xl': '31.248px',
        '4xl': '39.056px',
        '5xl': '48.832px',
      },


      // lineHeight: {
      //   '1': '1.0625rem',
      //   '2': '1.75rem',
      //   '3': '2rem',
      //   '4': '2.5rem',
      //   '5': '3.25rem',
      // },
      // letterSpacing: {
      //   'tight': '-0.0094rem',
      //   'normal': '0',
      //   'wide': '0.0156rem',
      //   'wider': '0.0938rem',
      // },
    },
  },
  plugins: [
    function ({ addComponents, theme }) {
      // Define buttons style
      const buttons = {
        '.btn': {
          display: 'inline-block',
          border: '0.125rem solid transparent',
          borderRadius: '0.3125rem',
          boxShadow: '0 0.5rem 0.5rem -0.25rem rgba(73, 93, 207, 0.2)',
          fontWeight: '500',
          transition: 'all 0.3s ease',
        },
        '.btn-accent': {
          padding: '0.75rem 2rem',
          backgroundColor: theme('colors.primary.red'),
          color: '#fff',
          '&:hover': {
            backgroundColor: '#fff',
            borderColor: theme('colors.primary.red'),
            color: theme('colors.primary.red'),
          },
        },
      };

      // Define links style
      const links = {
        '.link': {
          textDecoration: 'none',
          fontWeight: '400',
          color: theme('colors.secondary.dark'),
          transition: 'all 0.3s ease',
        
          '&:hover': {
            color: theme('colors.primary.red'),
          },
        }
      };

      addComponents(buttons);
      addComponents(links);
    },
  ],
}

