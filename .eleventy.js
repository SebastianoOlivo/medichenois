import { DateTime } from "luxon";
import syntaxHighlightPlugin from "@11ty/eleventy-plugin-syntaxhighlight";

//Collections
import { news } from "./src/_11ty/collections/news.js";
import { practitioners } from "./src/_11ty/collections/practitioners.js";

//Filters
import { limit } from "./src/_11ty/filters/limit.js";
import { json } from "./src/_11ty/filters/json.js";
import {
  dateFeed,
  dateFormat,
  dateFull,
  dateISO,
  dateYear,
} from "./src/_11ty/filters/dates.js";

export default function (eleventyConfig) {

  // collections
  eleventyConfig.addCollection("news", news);
  eleventyConfig.addCollection("practitioners", practitioners);

  // filters
  eleventyConfig.addFilter("limit", limit);
  eleventyConfig.addFilter("dateISO", dateISO);
  eleventyConfig.addFilter("dateFeed", dateFeed);
  eleventyConfig.addFilter("dateFull", dateFull);
  eleventyConfig.addFilter("dateFormat", dateFormat);
  eleventyConfig.addFilter("dateYear", dateYear);
  eleventyConfig.addFilter("json", json);

  // plugins
  eleventyConfig.addPlugin(syntaxHighlightPlugin, {
    trim: true,
  });

   // passthrough copy
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
  });

  // Copy Image Folder to /dist
  eleventyConfig.addPassthroughCopy("./src/assets/img");
  eleventyConfig.addPassthroughCopy("./src/assets/fonts");
  eleventyConfig.addPassthroughCopy({ "./src/static": "/" });



  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data",
    },
    htmlTemplateEngine: "njk",
  };
};
