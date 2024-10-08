import { DateTime } from "luxon";

/**
 * Format date: Feeds
 *
 * @param {Date} date - JS date
 * @returns {String} - formatted date
 */
function dateFeed(date) {
  const jsDate = new Date(date);
  const dt = DateTime.fromJSDate(jsDate);
  return dt.toRFC2822();
}

/**
 * Format date: Luxon format string
 *
 * @param {Date} date - JS date
 * @param {String} format - Luxon format string
 * @param {String} locale - locale code
 * @returns {String} - formatted date
 */
function dateFormat(date, format, locale = "en") {
  const jsDate = new Date(date);
  const dt = DateTime.fromJSDate(jsDate);
  return dt.setLocale(locale).toFormat(format);
}

/**
 * Format date: human readable format
 *
 * @param {Date} date - JS date
 * @param {String} locale - locale code
 * @returns {String} - formatted date
 */
function dateFull(date, locale = "en") {
  const jsDate = new Date(date);
  const dt = DateTime.fromJSDate(jsDate);
  return dt.setLocale(locale).toLocaleString(DateTime.DATE_FULL);
}

/**
 * Format date: ISO
 * @param {Date} date - JS Date
 * @returns {String} - formatted date
 */
function dateISO(date) {
  const jsDate = new Date(date);
  const dt = DateTime.fromJSDate(jsDate);
  return dt.toISO();
}

/**
 * Format date: year
 *
 * @param {Date} date - js date
 * @returns {String} - formatted date
 */
function dateYear(date) {
  const jsDate = new Date(date);
  const fullYear = jsDate.getFullYear();
  return fullYear;
}

export { dateFeed, dateFormat, dateFull, dateISO, dateYear };