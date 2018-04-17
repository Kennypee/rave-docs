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

    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
        // Perform customizations to webpack config

        // Important: return the modified config
        config.module.rules.push({
          test: /\.md$/,
          use: [defaultLoaders.babel, '@mdx-js/loader']
        });
        return config;
    },
    webpackDevMiddleware: config => {
        // Perform customizations to webpack dev middleware config

        // Important: return the modified config
        return config;
    }
});
