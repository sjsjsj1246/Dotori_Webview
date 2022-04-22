const withPlugins = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['antd-mobile']);

module.exports = withPlugins([withTM], {});
