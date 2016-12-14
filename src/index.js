'use strict';

window.Highcharts = require('highcharts/highcharts');

require('./index.html');

var Elm = require('./Main.elm');

window.hcDemoApp = Elm.Main.fullscreen();
