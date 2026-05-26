/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],  
      },
      keyframes: {
        'dseu-float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        'dseu-bounce': {
          '0%, 80%, 100%': { transform: 'scale(0.6)', opacity: '0.5' },
          '40%': { transform: 'scale(1)', opacity: '1' },
        },
        'dseu-msg-in': {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'dseu-ping': {
          '0%': { transform: 'scale(1)', opacity: '0.6' },
          '75%, 100%': { transform: 'scale(1.4)', opacity: '0' },
        },
      },
      animation: {
        'dseu-float': 'dseu-float 3s ease-in-out infinite',
        'dseu-bounce': 'dseu-bounce 1.2s ease-in-out infinite',
        'dseu-msg-in': 'dseu-msg-in 0.25s ease-out forwards',
        'dseu-ping': 'dseu-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
