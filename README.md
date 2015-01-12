link-package
============
**No more `require("./../../../../../../../../some/other/file.js")`.**

In large node.js applications, relative `require()` can be really annoying. You probably know code like this:

```javascript
var moduleA = require("./../../../../../../../../path/to/moduleA.js");
var moduleB = require("./../../../../../../../../path/to/moduleB.js");
var moduleC = require("./../../../../../../../../path/to/moduleC.js");
```

This module allows you to write code like this:

```javascript
var moduleA = require("your-app/path/to/moduleA.js");
var moduleB = require("your-app/path/to/moduleB.js");
var moduleC = require("your-app/path/to/moduleC.js");
```

**link-package** just creates a symlink in your project's `node_modules`  pointing to your project folder (or a sub-folder).
<br>

Installation
------------

[![npm status](https://nodei.co/npm/link-package.svg?downloads=true&stars=true)](https://npmjs.org/package/link-package)

<br>

Usage
-----

You can use **link-package** in two ways:

- with [npm scripts](https://docs.npmjs.com/misc/scripts)
- node API

### [npm scripts](https://docs.npmjs.com/misc/scripts)

Add this to the `scripts`-section of your `package.json`:

```javascript
"scripts": {
    ...
    "prestart": "link-package",
    ...
}
```

This will create the symlink before you run `npm start`.

**Subfolders:** If you want the symlink to point to a subfolder like `app` or `lib` you can also pass an argument to `link-package`:

```javascript
    "prestart": "link-package app",
```

### node API

If you don't want to use npm scripts you can also use the node API like this:

```javascript
var linkPackage = require("link-package");

linkPackage();
// or if you want to link a subfolder
linkPackage("app");
```

You don't need to check if there is already a symlink, **link-package** does that for you. 

<br>

Compatibility
-------------

Against popular beliefs, symlinks are [well supported on Windows](http://www.windows7home.net/how-to-create-symbolic-link-in-windows-7/).

<br>

License
-------

Unlicense
