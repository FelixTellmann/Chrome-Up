import path from 'path';
// This helper function is not strictly necessary.
// I just don't like repeating the path.join a dozen times.

module.exports = {
  webpack(config, { defaultLoaders }) {
    config.module.rules.push({
      test: /\.(png|svg|eot|otf|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
      },
    });
    config.resolve.alias['components'] = path.join(__dirname, 'components');
    config.resolve.alias['pages'] = path.join(__dirname, 'pages');
    return config;
  },
};
