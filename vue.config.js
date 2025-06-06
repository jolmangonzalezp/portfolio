const webpack = require('webpack');

module.exports = {
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/jolmangonzalez/'
    : '/',
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        __VUE_PROD_DEVTOOLS__: "false",
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: "false",
      }),
    ],
  },
};
