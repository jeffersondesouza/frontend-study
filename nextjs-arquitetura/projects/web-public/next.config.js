const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")([
  "@jeff/utils",
  "@jeff/design-system",
]);

/**
 * @type{import('next').NExtConfig}
 * */
module.exports = withPlugins([withTM], {
  trailingSlash: true,
});
