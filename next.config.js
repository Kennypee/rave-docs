const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const path = require('path');
const neat = require('bourbon-neat');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]__[hash:base64:5]",
    },

    sassLoaderOptions: {
        includePaths: [
            './assets/styles',
            neat.includePaths,

        ],
    },

    webpack(config, { buildId, dev, isServer, defaultLoaders }) {
        pagesExtensions: ['js', 'jsx', 'md']
        config.resolve.alias['components'] = path.resolve(__dirname, 'components/')
        config.resolve.alias['img'] = path.resolve(__dirname, 'assets/img/')
        config.module.rules.push({
            test: /\.md$/,
            use: [defaultLoaders.babel, '@mdx-js/loader']
        })
        return config;
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config

        // Important: return the modified config
        return config;
    }
});
  