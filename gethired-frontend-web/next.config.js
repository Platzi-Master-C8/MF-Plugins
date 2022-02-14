const path = require('path')
const Dotenv = require("dotenv-webpack")

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API: process.env.API,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new Dotenv()
    )
    return config
  },
}
