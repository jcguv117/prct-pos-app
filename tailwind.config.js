/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class', // Deshabilitar el modo oscuro.
  theme: {
    extend: {

      colors: {
        minsk: {
          '50': '#f3f2ff',
          '100': '#e9e8ff',
          '200': '#d6d4ff',
          '300': '#b8b2ff',
          '400': '#9486ff',
          '500': '#7255fd',
          '600': '#6032f5',
          '700': '#5120e1',
          '800': '#431abd',
          '900': '#3a179b',
          '950': '#1b0a57',
        },
        
      },
    
    },
  },
  plugins: [],
}

