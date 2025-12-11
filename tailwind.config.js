/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ec1313',
        'background-light': '#ffffff',
        'background-dark': '#221010',
        'text-light': '#6b7280',
        'text-dark': '#1f2937',
        'border-light': '#e5e7eb',
        'surface-light': '#f9fafb',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}

