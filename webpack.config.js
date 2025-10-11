const { sentryWebpackPlugin } = require('@sentry/webpack-plugin');

module.exports = {
  // ... other options
  devtool: 'source-map', // Source map generation must be turned on
  plugins: [
    // Put the Sentry Webpack plugin after all other plugins
    sentryWebpackPlugin({
      authToken: process.env.SENTRY_AUTH_TOKEN,
      org: 'lauqerm',
      project: 'ygo-carder',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              api: 'modern-compiler',
              sassOptions: {
                // Your sass options
              },
            },
          },
        ],
      },
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};