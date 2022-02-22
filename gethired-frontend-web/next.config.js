const path = require('path')
const Dotenv = require("dotenv-webpack")

module.exports = {
  images: {
    domains: ["media-exp1.licdn.com", "pbs.twimg.com"]
  },
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    API: process.env.API,
    USER_KEY: process.env.USER_KEY
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new Dotenv()
    )
    return config
  },
}
