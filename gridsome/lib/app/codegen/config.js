function genConfig ({ config }) {
  const { version } = require('../../../package.json')
  const { permalinks, titleTemplate, _pathPrefix, assetUrl, siteUrl, catchLinks } = config

  return `export default ${JSON.stringify({
    trailingSlash: permalinks.trailingSlash,
    pathPrefix: _pathPrefix,
    assetUrl,
    titleTemplate,
    siteUrl,
    version,
    catchLinks
  }, null, 2)}`
}

module.exports = genConfig
