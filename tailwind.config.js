// See https://tailwindcss.com/docs/configuration for details
module.exports = {
  purge: [
    './src/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero': "url('../images/iosconfsg-header.jpg')"
      }),
      tableLayout: ['hover', 'focus']
    }
  },
  variants: {},
  // https://github.com/tailwindcss/custom-forms
  plugins: [
    require("@tailwindcss/ui")
  ],
};
