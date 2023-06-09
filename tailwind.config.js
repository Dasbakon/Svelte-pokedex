/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'pokemon': ['pokemon']
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

