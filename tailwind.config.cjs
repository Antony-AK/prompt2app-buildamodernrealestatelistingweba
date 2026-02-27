/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx}'
  ],
  theme: {
    extend: {
      colors: {
        'estate-beige': {
          50: '#f5f3f0',
          100: '#e8e4dc',
          200: '#d6cdc2',
          300: '#c2b4a3',
          400: '#a9957b'
        }
      },
      backgroundImage: {
        'gradient-luxury': 'linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(0,0,0,0.05) 100%)'
      }
    }
  },
  plugins: []
}