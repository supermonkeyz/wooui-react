const cssModuleConfig = require('./scripts/cssModuleConfig');
const loaderUtils = require('loader-utils');
const reactLibraryConfig = require('./scripts/reactLibraryConfig');
const rewirePostcss = require('react-app-rewire-postcss');

module.exports = {
  webpack: function(config, env) {
    config = cssModuleConfig(config, env, {
      modules: {
        getLocalIdent: (context, localIdentName, localName, options) => {
          const folderName = loaderUtils.interpolateName(context, '[folder]', options);
          const className =
            process.env.LIB_NAMESPACE + '-' + folderName + '-' + localName;
          return className.toLowerCase();
        }
      }
    });
    config = rewirePostcss(config, true);
    config = reactLibraryConfig(config, process.env.REACT_APP_NODE_ENV);
    return config;
  }
};
