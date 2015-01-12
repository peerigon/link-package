"use strict";

var path = require("path");
var fs = require("fs");

function linkPackage() {
    var packageName = require("../../package.json").name;
    var nodeModules = path.resolve(__dirname, "../");
    var srcPath = path.join(nodeModules, packageName);
    var dstPath = path.resolve(__dirname, "../../");

    if (fs.existsSync(srcPath)) {
        if (fs.realpathSync(srcPath) !== dstPath) {
            throw new Error("There is already another package '" + packageName + "' installed");
        }
    } else {
        fs.linkSync(srcPath, dstPath);
    }
}

module.exports = linkPackage;
