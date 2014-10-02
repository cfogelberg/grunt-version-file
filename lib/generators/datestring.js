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
var Q = require("q");

module.exports = {
  label: function() {
    return "datestring";
  },

  value: function() {
    return Q(grunt.template.today());
  }
};
