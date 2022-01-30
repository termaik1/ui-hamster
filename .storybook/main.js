const path = require('path')

module.exports = {
  "stories": [
    path.join(__dirname, "./../src/**/*.stories.mdx"),
    path.join(__dirname, "./../src/**/*.stories.@(ts|tsx)")

  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}