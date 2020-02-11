"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var point = new point_1.Point(1, 5);
var x = point.getX();
point.setX(10);
point.draw();
// cohesion - things that are related should go together
// module - each file is a module
