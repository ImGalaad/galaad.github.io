/* npx @11ty/eleventy --serve */

/* npm install @11ty/eleventy-plugin-syntaxhighlight */
/* https://www.11ty.dev/docs/plugins/syntaxhighlight/ */
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");

module.exports = function (config) {
  // Colorize the code
  config.addPlugin(syntaxHighlight);

  // Minify each .html
  config.addTransform("htmlmin", function(content, outputPath) {
    if (outputPath && outputPath.endsWith(".html")) {
      let minified = htmlmin.minify(content, {
        useShortDoctype: true,
        removeComments: true,
        collapseWhitespace: true,
      });
      return minified;
    }
    return content;
  });

  // Makes external links open in a new tab
  config.addTransform("externalLinks", function(content) {
    return content.replace(/<a href="([^"]+)"([^>]*)>/g, function(match, href, attributes) {
      if (href.startsWith("http://") || href.startsWith("https://")) {
        return `<a href="${href}" target="_blank" rel="noopener noreferrer"${attributes}>`;
      }
      return match;
    });
  });

  // Ignore assets compilation
  config.addPassthroughCopy("assets");

  // Add all pages collection
  config.addCollection("pages", function (collections) {
    const pages = collections.getFilteredByGlob("pages/**/*.{md,html}");
    return pages;
  });

  // Add blogs grouped collection
  config.addCollection("blogs", function (collections) {
    const posts = collections.getFilteredByGlob("pages/blog/**/*.{md,html}");
    const groups = [];

    posts.forEach((post) => {
      if (post.data.page.filePathStem.split("/").at(-1) == "index") {
        return
      }
      const dir = post.filePathStem.split("/")[2];
      const dirIndex = collections.getFilteredByGlob(`pages/blog/${dir}/index.md`);
      const dirName = dirIndex[0].data.name || dir;

      const existingGroup = groups.find((group) => group.dir === dir);

      if (existingGroup) {
        existingGroup.posts.push(post);
      }
      else {
        groups.push({ dir, dirName, posts: [post] });
      }
    });

    return groups;
  });

  // Add root pages collection
  config.addCollection("root", function (collections) {
    return collections.getFilteredByGlob("pages/*");
  });

  return {
    dir: {
      input: "pages/",
      includes: "../components/includes",
      layouts: "../components/layouts",
      output: "..",
      ignore: "pages/blog/**/index.md",
    },
  };
};
