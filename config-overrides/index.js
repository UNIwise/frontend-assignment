const path = require("path");
const rewireLess = require("./rewireLess");

module.exports = {
  webpack: function override(config, env) {
    // Less Loader
    config = rewireLess(config, env);

    return config;
  }
};
