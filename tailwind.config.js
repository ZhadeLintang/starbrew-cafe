/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brew: {
          50: '#effcf5',
          100: '#d9f8e8',
          200: '#b6efd4',
          300: '#7ee1b5',
          400: '#41c98e',
          500: '#1faf72',
          600: '#128c5b',
          700: '#0f704b',
          800: '#10593f',
          900: '#0e4935',
          950: '#06291e'
        },
        crema: '#f6efe4',
        espresso: '#211712'
      },
      boxShadow: {
        glow: '0 24px 80px rgba(18, 140, 91, 0.22)',
        premium: '0 24px 60px rgba(15, 23, 42, 0.12)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif']
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(circle at top left, rgba(31,175,114,.18), transparent 34%), radial-gradient(circle at bottom right, rgba(246,239,228,.8), transparent 28%)',
        'mesh-dark':
          'radial-gradient(circle at top left, rgba(31,175,114,.22), transparent 34%), radial-gradient(circle at bottom right, rgba(16,89,63,.26), transparent 30%)'
      }
    }
  },
  plugins: []
};
