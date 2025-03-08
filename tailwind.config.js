/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      container: {
        center: true,
        padding: '2rem',
      },
      colors: {
        dark: {
          DEFAULT: '#0F172A',
          lighter: '#1E293B',
          accent: '#2563EB',
        },
        accent: {
          primary: '#3B82F6',
          secondary: '#60A5FA',
          hover: '#2563EB',
        },
      },
      backgroundColor: {
        'dark-gradient': 'linear-gradient(to right, #0F172A, #1E293B)',
      },
    },
  },
  plugins: [],
};