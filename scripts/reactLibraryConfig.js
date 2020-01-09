const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = function(config, env, options) {
  if (env === 'library') {
    const srcFile = process.env.npm_package_module || options.module;
    const libName = process.env.npm_package_name || options.name;
    config.entry = srcFile;
    config.output = {
      path: path.resolve('./', 'build'),
      filename: libName + '.js',
      library: libName,
      libraryTarget: 'umd'
    };
    delete config.optimization.splitChunks;
    delete config.optimization.runtimeChunk;
    config.plugins = [];
    config.plugins.push(
      new MiniCssExtractPlugin({
        filename: libName + '.css'
      })
    );

    let externals = {};
    Object.keys(process.env).forEach(key => {
      if (key.includes('npm_package_dependencies_')) {
        let pkgName = key.replace('npm_package_dependencies_', '');
        pkgName = pkgName.replace(/_/g, '-');
        // below if condition addresses scoped packages : eg: @storybook/react
        if (pkgName.startsWith('-')) {
          const scopeName = pkgName.substr(1, pkgName.indexOf('-', 1) - 1);
          const remainingPackageName = pkgName.substr(
            pkgName.indexOf('-', 1) + 1,
            pkgName.length
          );
          pkgName = `@${scopeName}/${remainingPackageName}`;
        }
        externals[pkgName] = `${pkgName}`;
      }
    });
    config.externals = externals;
  }
  return config;
};
