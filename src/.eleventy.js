/* npx @11ty/eleventy --serve */

module.exports = function (config) {
  // Ignore compilation
  config.addPassthroughCopy("assets");

  // Add collections
  config.addCollection("blog", function(collections) {
    return collections.getFilteredByGlob("pages/blog/**");
  });
  config.addCollection("root", function(collections) {
    return collections.getFilteredByGlob("pages/*");
  });

  return {
    dir: {
      input: "pages/",
      includes: "../components/includes",
      layouts: "../components/layouts",
      output: "..",
    },
  };
};
