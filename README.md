# prop-factory

Getter-setter factory utility.

[![npm Version][npm-badge]][npm]
[![Build Status][build-badge]][build-status]
[![Test Coverage][coverage-badge]][coverage-result]
[![Dependency Status][dep-badge]][dep-status]

## Installation

Install using npm:

    $ npm install prop-factory

## Usage

Borrowed from [Mithril][mithril]'s `m.prop`, prop-factory is a simple
factory that returns a function for storing and retrieving a value.

```
var prop = require('prop-factory');

// Define a setter-getter with an initial value of "John" (without a given
// value, the initial value will be undefined)
var name = prop('John');

// Read the value
var a = name();  // a === 'John'

// Set the value to "Mary"
name('Mary');

// Read the new value
var b = name();  // b === 'Mary'
```

## License

MIT

[build-badge]: https://img.shields.io/travis/jimf/prop-factory/master.svg
[build-status]: https://travis-ci.org/jimf/prop-factory
[npm-badge]: https://img.shields.io/npm/v/prop-factory.svg
[npm]: https://www.npmjs.org/package/prop-factory
[coverage-badge]: https://img.shields.io/coveralls/jimf/prop-factory.svg
[coverage-result]: https://coveralls.io/r/jimf/prop-factory
[dep-badge]: https://img.shields.io/david/jimf/prop-factory.svg
[dep-status]: https://david-dm.org/jimf/prop-factory
[mithril]: http://mithril.js.org/
