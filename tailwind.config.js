module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        jakarta: ['Plus Jakarta Sans', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        cabin: ['Cabin', 'sans-serif'],
        quicksand: ['Quicksand', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { backgroundColor: '#377DFF' },
          '50%': { backgroundColor: '#F62424' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-13px)' },
        },
      },
      animation: {
        blink: 'blink 2s infinite ease-in-out',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
