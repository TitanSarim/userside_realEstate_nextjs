module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ar", "fr", "es"],
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
