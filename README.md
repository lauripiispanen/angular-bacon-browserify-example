angular-bacon-browserify-example
================================

A sample app using browserify bundling with npm module versions of Angular and Angular-bacon.

Unfortunately, Angular does not yet expose itself as a CommonJS module, so [browserify-shim](https://github.com/thlorenz/browserify-shim) is still needed.
Example ```package.json``` configuration for a client app looks like this:

```json
{
  "browserify": {
    "transform": [ "browserify-shim" ]
  },
  "browser": {
    "angular": "./node_modules/angular/angular.js"
  },
  "browserify-shim": {
    "angular": {
      "exports": "angular"
    }
  }
}
```

**Note:** Angular-bacon itself exports the angular global. For modules that depend on it, you do not therefore need to ```require('angular')```.
