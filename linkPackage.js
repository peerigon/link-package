"use strict";

var path = require("path");
var fs = require("fs");

function linkPackage() {
    var packageName = require("../../package.json").name;
    var nodeModules = path.resolve(__dirname, "../");
    var dstPath = path.join(nodeModules, packageName);
    var srcPath = path.resolve(__dirname, "../../");

    if (fs.existsSync(dstPath)) {
        if (fs.realpathSync(dstPath) !== srcPath) {
            throw new Error("There is already another package '" + packageName + "' installed");
        }
    } else {
        fs.linkSync(srcPath, dstPath);
    }
}

module.exports = linkPackage;
