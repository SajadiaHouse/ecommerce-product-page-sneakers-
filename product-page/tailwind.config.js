/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-900': "hsl(26, 100%, 55%)",
        'primary-100': "hsl(25, 100%, 94%)",
        'secondary-900': "hsl(220, 13%, 13%)",
        'secondary-800': "hsl(219, 9%, 45%)",
        'secondary-700': "hsl(220, 14%, 75%)",
        'secondary-600': "hsl(223, 64%, 98%)",
        'neutral-100': 'hsl(0, 0%, 100%)',
        'neutral-900': 'hsl(0, 0%, 0%)',
        
      },
    },
  },
  plugins: [],
}

