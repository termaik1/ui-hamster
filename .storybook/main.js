const path = require('path')

module.exports = {
  "stories": [
    path.join(__dirname, "./../src/**/*.stories.mdx"),
    path.join(__dirname, "./../src/**/*.stories.@(js|jsx|ts|tsx)")

  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
  ],

  webpackFinal: (config) => ({
    ...config,
    resolve: {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        '@': path.join(__dirname, '../src'),
      },
    },
  }),
}