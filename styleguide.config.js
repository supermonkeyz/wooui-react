const { paths } = require('react-app-rewired');
const overrides = require('react-app-rewired/config-overrides');
const config = require(paths.scriptVersion + '/config/webpack.config');

module.exports = {
  webpackConfig: overrides.webpack(config(process.env.NODE_ENV), process.env.NODE_ENV)
};
