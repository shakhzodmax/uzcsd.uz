/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{vue,js,ts,jsx,tsx}",
      "node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        flexBasis: {
            'navbar': '56px',
            'footer': '265px',
        }
    },
  },
  plugins: [
      require('flowbite/plugin')
  ],
}
