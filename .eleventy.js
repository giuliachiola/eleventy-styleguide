const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight")

module.exports = (eleventyConfig) => {

  // Read file folders (atoms, molecules, organisms)
  const { readdirSync, statSync } = require('fs')
  const { join } = require('path')
  const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
  const dirsArr = dirs('src/_includes/components') // [ 'atoms', 'molecules', 'organisms' ]
  const iframeArr = dirsArr.map(dir => `${dir}iframes`); // [ 'atomsiframes', 'moleculesiframes', 'organismsiframes' ]

  // Generate iframes collections (atoms, molecules, organisms)
  iframeArr.forEach((iframe, index) => {
    eleventyConfig.addCollection(iframe, function(collection) {
      return collection.getFilteredByGlob(`src/${dirsArr[index]}/**/*.md`);
    })
  })

  // Generate iframes collections (all)
  eleventyConfig.addCollection("iframes", function(collection) {
    let allC = [...collection.getFilteredByGlob(`src/atoms/**/*.md`)]
    allC = [...allC, ...collection.getFilteredByGlob(`src/molecules/**/*.md`)]
    allC = [...allC, ...collection.getFilteredByGlob(`src/organisms/**/*.md`)]
    return allC
  });

  // Documentation
  eleventyConfig.addCollection("docs", function(collection) {
    return collection.getFilteredByGlob("src/docs/**/*.md");
  });

  // Assets
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addPlugin(syntaxHighlight);

  return {
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",

    templateFormats: [
			"md",
      "njk",
		],

    dir: {
      input: "src",
      output: "public",
      includes: "_includes",
    },

    passthroughFileCopy: true,
  };
};
