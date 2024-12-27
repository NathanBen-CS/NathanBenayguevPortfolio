// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
      },
      colors: {
        'gray': {
          800: '#1F2937',
          900: '#111827',
        },
        'blue': {
          300: '#93C5FD',
          400: '#60A5FA',
          600: '#2563EB',
        },
      },
    },
  },
  plugins: [],
}