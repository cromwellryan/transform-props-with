# Change Log
All notable changes to this project will be documented in this file.
This project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## UNRELEASED - 2016-xx-xx
### CHANGE describe
- Update tests to new syntax

## 2.1.0 - 2016-09-01
### Enable ref
- When passed `__ref` will be renamed to `ref`. This enables to get reference to the DOM element, cf. https://facebook.github.io/react/docs/more-about-refs.html (#11)
- Update tests to Jest 15

## 2.0.1 - 2016-06-24
### Use Object.assign polyfill
- Use babel to include the Object.assign polyfill

## 2.0.0 - 2016-06-08
### Reverse list resolving
- List of transformations is now resolved left to right
- Add JSDoc documentation
- Added (this) change log

## 1.1.0 - 2016-04-11
### Dependencies changes
- Replace own methods with Lodash
- List React as a peer dependency

## 1.0.0 - 2016-03-19
### Initial release
- First stable release of the package
