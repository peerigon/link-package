"use strict";

var path = require("path");
var fs = require("fs");

/**
 * Creates a symlink to the specified folderName under the given alias.
 * When nothing is specified, this function creates a symlink to the project's root folder
 * with name as specified in the package.json.
 *
 * @param {string=} folderName defaults to the project's root folder
 * @param {string=} alias defaults to the package.json's name attribute
 */
function linkPackage(folderName, alias) {
    var packageName = alias || require("../../package.json").name;
    var nodeModules = path.resolve(__dirname, "../");
    var dstPath = path.join(nodeModules, packageName);
    var srcPath = path.resolve(__dirname, "../../");

    if (folderName) {
        srcPath = path.join(srcPath, folderName);
    }

    // Deliberately using sync methods because this should usually happen before any other code is executed.
    if (fs.existsSync(dstPath)) {
        if (fs.realpathSync(dstPath) !== srcPath) {
            throw new Error("There is already another package '" + packageName + "' installed");
        }
    } else {
        fs.symlinkSync(srcPath, dstPath, "junction");
    }
}

module.exports = linkPackage;
