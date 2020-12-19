//need this to merge common and prod
const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
//webpack to take care of shared modules for us
const packageJson = require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
    mode: 'production',
    output: {
        //when we build some files for production all the files built will use
        //this template in naming them
        //done for caching issues
        filename: '[name].[contenthash].js',
    }
};

module.exports = merge(commonConfig,prodConfig);
