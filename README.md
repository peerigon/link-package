link-package
============
**No more require("./../../../../../../../../some/other/file.js").**

In large node.js applications, relative `require()` can be really annoying. You probably already know code like this:

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

**link-package** just creates a symlink in your project's `node_modules`  pointing to your project folder.

#### Sub-folders and aliases

You can even link multiple domains of your application via sub-folders and aliases like this:

```javascript
var linkPackage = require("link-package");

linkPackage("app/shared/models", "models");
linkPackage("app/client/views", "views");
linkPackage("app/client/routes", "routes");

var User = require("models/user");
var UserView = require("views/user");
var auth = require("routes/auth");
```

#### Please note

Consider splitting your app into multiple projects before using this module. Non-monolithic architectures tend to be better maintainable on the long run. However, I think there are still use-cases where this module comes in handy, that's why I've written it :)

<br>

Installation
------------

[![npm status](https://nodei.co/npm/link-package.svg?downloads=true&stars=true)](https://npmjs.org/package/link-package)

<br>

Usage
-----

You can use **link-package** in two ways:

- [npm scripts](https://docs.npmjs.com/misc/scripts)
- node API

---

### [npm scripts](https://docs.npmjs.com/misc/scripts)

Add this to the `scripts`-section of your `package.json`:

```javascript
"scripts": {
    ...
    "prestart": "link-package",
    "pretest": "link-package",
    ...
}
```

This will create the symlink before you run `npm start` or `npm test`.

#### Subfolders

If you want the symlink to point to a subfolder like `app` or `lib` you can also pass an argument to `link-package`:

```javascript
    "prestart": "link-package some/sub/folder",
    "pretest": "link-package some/sub/folder",
```

#### Aliases

**link-package** uses the `name` attribute of the project's `package.json` as link name. If you want to override that behavior, just pass a second argument.

```javascript
    "prestart": "link-package ./ my-alias",
    "pretest": "link-package ./ my-alias",
```

---

### node API

If you don't want to use npm scripts you can also use the node API like this:

```javascript
var linkPackage = require("link-package");

linkPackage();
// or if you want to link a subfolder with an alias
linkPackage("some/sub/folder", "my-alias");
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
