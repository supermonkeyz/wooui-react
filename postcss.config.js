module.exports = {
  plugins: {
    'postcss-each': {
      plugins: {
        afterEach: [require('postcss-at-rules-variables')]
      }
    },
    'postcss-nested': {},
    'postcss-units': {
      size: 16,
      precision: 6
    },
    'postcss-pxtorem': {
      rootValue: 16,
      propWhiteList: [
        '*',
        '!border',
        '!border-top',
        '!border-right',
        '!border-bottom',
        '!border-left',
        '!border-width'
      ],
      selectorBlackList: ['html'],
      mediaQuery: false
    }
  }
};
