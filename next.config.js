const withSass = require('@zeit/next-sass');
const webpack = require('webpack');
const path = require('path');

module.exports = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]__[hash:base64:5]",
    },

    sassLoaderOptions: {
        includePaths: [
            './assets/styles',
            require('bourbon-neat').includePaths,

        ]
    },

    webpack(config, options) {
        config.resolve.alias['components'] = path.resolve(__dirname, 'components/');
        config.resolve.alias['img'] = path.resolve(__dirname, 'assets/img/');

        return config;
    },
});