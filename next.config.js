module.exports = {
    images: {
        domains: ["links.papareact.com", "image.tmdb.org"],
    },
    future: {
        webpack5: true,
      },
      webpack: function (config, options) {
        config.experiments = {};
        return config;
      },
}