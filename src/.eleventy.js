/* npx @11ty/eleventy --serve */

/* npm install @11ty/eleventy-plugin-syntaxhighlight */
/* https://www.11ty.dev/docs/plugins/syntaxhighlight/ */
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (config) {
  config.addPlugin(syntaxHighlight);

  // Ignore compilation
  config.addPassthroughCopy("assets");

  // Add collections
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
