/*
 * grunt-version-file
 * https://github.com/cfogelberg/grunt-version-file
 *
 * Copyright (c) 2014 Christo Fogelberg
 * Licensed under the MIT license.
 *
 * Class SRP: Abstract prototype for generator plugins
 */

"use strict";

var grunt = require("grunt");

module.exports = {
  label: function() {
    return "npm_version";
  },

  value: function() {
    var pkg = grunt.file.readJSON("package.json");
    return pkg.version;
  }
};
