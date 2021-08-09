module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-image': "url('/images/aleph_lecture.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
