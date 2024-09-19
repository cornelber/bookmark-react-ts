/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  screens: {
    // Min-width breakpoints (default)
    'sm': '640px',
    'md': '768px',
    'lg': '1024px',
    'xl': '1280px',
    '2xl': '1536px',

    // Max-width breakpoints (you can define here max-width breakpoints)
    'max-sm': {'max': '639px'},
    'max-md': {'max': '767px'},
    'max-lg': {'max': '1023px'},
    'max-xl': {'max': '1279px'},
    'max-2xl': {'max': '1535px'},
  },
  theme: {
    fontFamily: {
      sans: ['"Rubik"', "sans-serif"],
      icomoon: ['icomoon', 'sans-serif'],
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
        icon: {
          'white': 'hsl(0, 0%, 100%)',
          'red': 'hsl(0, 94%, 66%)',
        }
      },
      fontSize: {
        icon: '24px',
        btn: ['14px', {
          lineHeight: '28px',
          letterSpacing: '0.25px',
        }],
        xs: ['13px', {
          lineHeight: '17px',
          letterSpacing: '1.5px',
        }],
        sm: '15px',
        base: '16px',
        xl: ['18px', {
          lineHeight: '28px',
        }],
        '2xl': ['20px', {
          letterSpacing: '0.25px',
        }],
        '3xl': ['32px', {
          lineHeight: '52px',
          letterSpacing: '-0.1px',
        }],
        '4xl': ['48px', {
          lineHeight: '52px',
          letterSpacing: '-0.15px',
        }],
      },
      lineHeight: {
        '1': '17px',
        '2': '28px',
        '3': '32px',
        '4': '40px',
        '5': '52px',
      },
      letterSpacing: {
        'tight': '-0.15px',
        'normal': '0',
        'wide': '0.25px',
        'wider': '1.5px',
        'widest': '2.3px',
      },
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
          textWrap: 'nowrap',
        },
        '.btn-primary': {
          padding: '0.625rem 1.5rem',
          backgroundColor: theme('colors.primary.blue'),
          color: '#fff',
          '&:hover': {
            backgroundColor: '#fff',
            borderColor: theme('colors.primary.blue'),
            color: theme('colors.primary.blue'),
          },
        },
        '.btn-secondary': {
          padding: '0.625rem 1.5rem',
          backgroundColor: '#F7F7F7',
          color: 'rgba(36, 42, 69, 0.75)',
          '&:hover': {
            backgroundColor: '#fff',
            borderColor: "#5B6074",
          },
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

