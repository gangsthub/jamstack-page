const CleanCSS = require('clean-css')
module.exports = function (eleventyConfig) {
  let env = process.env.ELEVENTY_ENV
  eleventyConfig.addFilter('cssmin', function (code) {
    return new CleanCSS({}).minify(code).styles
  })

  eleventyConfig.addPassthroughCopy('src/css')

  return {
    passthroughFileCopy: true,
    templateFormats: ['md', 'html'],
    dir: {
      input: 'src',
      output: 'dist',
    },
  }
}
