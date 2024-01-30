var plugins = [{
      plugin: require('C:/Users/vikra/Desktop/My-Portfolio/node_modules/gatsby-remark-autolink-headers/gatsby-ssr'),
      options: {"plugins":[],"className":"gatsby-remark-autolink","maintainCase":true,"removeAccents":true,"offsetY":0},
    },{
      plugin: require('C:/Users/vikra/Desktop/My-Portfolio/node_modules/gatsby-plugin-react-helmet/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('C:/Users/vikra/Desktop/My-Portfolio/node_modules/gatsby-plugin-manifest/gatsby-ssr'),
      options: {"plugins":[],"name":"Vikram Kumar","short_name":"Vikram Kumar","start_url":"/","background_color":"#6D83F2","theme_color":"#6D83F2","display":"standalone","icon":"src/static/logo.svg","legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"f93683ea0113c725f62a6cb7e2304d02"},
    },{
      plugin: require('C:/Users/vikra/Desktop/My-Portfolio/node_modules/gatsby-plugin-google-analytics/gatsby-ssr'),
      options: {"plugins":[],"trackingId":"G-FH7Y01CCF3","head":true,"anonymize":false,"respectDNT":false,"exclude":[],"pageTransitionDelay":0},
    },{
      plugin: require('C:/Users/vikra/Desktop/My-Portfolio/node_modules/gatsby-plugin-sitemap/gatsby-ssr'),
      options: {"plugins":[],"exclude":["/blog/tags/*","/goodies"],"output":"/sitemap.xml","createLinkInHead":true},
    },{
      plugin: require('C:/Users/vikra/Desktop/My-Portfolio/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[],"displayName":true,"fileName":true,"minify":true,"namespace":"","transpileTemplateLiterals":true,"pure":false},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
