const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // Copy assets Files to /dist
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./node_modules/alpinejs/dist/cdn.min.js": "./assets/js/alpine.js"
  });

  // Copy Image Folder to /dist
  eleventyConfig.addPassthroughCopy("./src/assets/img");

  // Copy favicon to route of /dist
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");


  //News Collection
  eleventyConfig.addCollection("news", function (collection){
    return collection.getFilteredByGlob(".src/news/*.md");
  });

  //Practitioner Collection
  eleventyConfig.addCollection("practitioners", function (collection){
    return collection.getFilteredByGlob(".src/practitioners/*.md").sort((a, b) => {
      return a.data.surname.localeCompare(b.data.surname);
    });
  });

  //Filters 

   /**
   * Format date: ISO
   * @param {Date} date
   */
   eleventyConfig.addFilter("dateIso", function (date) {
    const jsDate = new Date(date);
    const dt = DateTime.fromJSDate(jsDate);
    return dt.toISO();
  });

  /**
   * Format date: Human readable format
   * @param {Date} date
   */
  eleventyConfig.addFilter("dateFull", function (date) {
    const jsDate = new Date(date);
    const dt = DateTime.fromJSDate(jsDate);
    return dt.setLocale(locale).toLocaleString(DateTime.DATE_FULL);
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
      output: "dist"
    },
    htmlTemplateEngine: "njk",
  };
};
