const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");


module.exports = {
    entry: './src/kod.js',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'public'),
        libraryTarget: "var",
        library: "Secim"
    },

    /*  devServer: {
          static: {
              directory: path.join(__dirname, "public/")
          },
          port: 3000,
          open: true
      }*/
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            extractComments: false,
        })]
    }

}