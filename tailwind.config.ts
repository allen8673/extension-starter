import type { Config, } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

const config: Config = {
  mode: "jit",
  darkMode: "class",
  content: ["./**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'turbo-gradient': 'conic-gradient(from -160deg at 50% 50%, #e92a67 0deg, #a853ba 120deg, #2a8af6 240deg, #e92a67 360deg)',
        'turbo-gradient-shadow': '10px 0 15px rgba(42, 138, 246, 0.3), -10px 0 15px rgba(233, 42, 103, 0.3)',
        'turbo-gradient-selected': '0px 0 40px rgba(42, 138, 246, 0.7), -0px 0 40px rgba(233, 42, 103, 0.3)',
        'turbo-gradient-running': 'conic-gradient(from -160deg at 50% 50%, #e92a67 0deg, #a853ba 120deg, #2a8af6 240deg, rgba(42, 138, 246, 0) 360deg)',
      },
      textShadow: {
        sm: '0 1px 2px var(--tw-shadow-color)',
        DEFAULT: '0 2px 4px var(--tw-shadow-color)',
        lg: '0px 4px 8px var(--tw-shadow-color)',
        center: '0px 0px 10px var(--tw-shadow-color)',
      },
      keyframes: {
        spinner: {
          '100%': {
            transform: 'translate(-50%, -50%) rotate(-360deg);',
          }
        },
      },
      animation: {
        mySpinner: 'bbb 4s linear infinite',
      },
      borderRadius: {
        'std': '10px',
        'std-sm': '4px'
      },
      colors: {
        light: {
          DEFAULT: '#ffffff',
          weak: '#8f8f8f'
        },
        deep: {
          DEFAULT: '#1c1c1c',
          weak: '#3c3c3c',
          strong: '#0c0c0c'
        },
        turbo: {
          deep: {
            DEFAULT: '#BA4AFF',
            strong: '#A226EF',
            weak: '#95679e'
          },
          light: {
            DEFAULT: '#2a8af6',
            weak: '#0a3e76'
          },
        },
        success: {
          light: 'rgba(16, 185, 129)',
          DEFAULT: 'rgba(4, 119, 86, 1)',
          deep: 'rgba(6, 78, 59)',
        },
        failure: {
          light: 'rgba(239, 68, 68)',
          DEFAULT: 'rgba(185, 28, 28, 1)',
          deep: 'rgba(127, 29, 29)',
        },
        warning: {
          light: 'rgba(234, 179, 8)',
          DEFAULT: 'rgba(161, 98, 7, 1)',
          deep: 'rgba(113, 63, 18)',
        },
        nics: {
          light: '#c3cb04',
          deep: '#069493',
        }
      },
      spacing: {
        std: '20px',
        'std-sm': '12px',
        'std-min': '7px'
      }
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),
  ],
};
export default config;
