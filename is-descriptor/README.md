# is-descriptor [![NPM version](https://img.shields.io/npm/v/is-descriptor.svg?style=flat)](https://www.npmjs.com/package/is-descriptor) [![NPM monthly downloads](https://img.shields.io/npm/dm/is-descriptor.svg?style=flat)](https://npmjs.org/package/is-descriptor) [![NPM total downloads](https://img.shields.io/npm/dt/is-descriptor.svg?style=flat)](https://npmjs.org/package/is-descriptor) [![Linux Build Status](https://img.shields.io/travis/jonschlinkert/is-descriptor.svg?style=flat&label=Travis)](https://travis-ci.org/jonschlinkert/is-descriptor)

> Returns true if a value has the characteristics of a valid JavaScript descriptor. Works for data descriptors and accessor descriptors.

## Install

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install --save is-descriptor
```

## Usage

```js
var isDescriptor = require('is-descriptor');

isDescriptor({value: 'foo'})
//=> true
isDescriptor({get: function(){}, set: function(){}})
//=> true
isDescriptor({get: 'foo', set: function(){}})
//=> false
```

You may also check for a descriptor by passing an object as the first argument and property name (`string`) as the second argument.

```js
var obj = {};
obj.foo = 'abc';

Object.defineProperty(obj, 'bar', {
  value: 'xyz'
});

isDescriptor(obj, 'foo');
//=> true
isDescriptor(obj, 'bar');
//=> true
```

## Examples

### value type

`false` when not an object

```js
isDescriptor('a');
//=> false
isDescriptor(null);
//=> false
isDescriptor([]);
//=> false
```

### data descriptor

`true` when the object has valid properties with valid values.

```js
isDescriptor({value: 'foo'});
//=> true
isDescriptor({value: noop});
//=> true
```

`false` when the object has invalid properties

```js
isDescriptor({value: 'foo', bar: 'baz'});
//=> false
isDescriptor({value: 'foo', bar: 'baz'});
//=> false
isDescriptor({value: 'foo', get: noop});
//=> false
isDescriptor({get: noop, value: noop});
//=> false
```

`false` when a value is not the correct type

```js
isDescriptor({value: 'foo', enumerable: 'foo'});
//=> false
isDescriptor({value: 'foo', configurable: 'foo'});
//=> false
isDescriptor({value: 'foo', writable: 'foo'});
//=> false
```

### accessor descriptor

`true` when the object has valid properties with valid values.

```js
isDescriptor({get: noop, set: noop});
//=> true
isDescriptor({get: noop});
//=> true
isDescriptor({set: noop});
//=> true
```

`false` when the object has invalid properties

```js
isDescriptor({get: noop, set: noop, bar: 'baz'});
//=> false
isDescriptor({get: noop, writable: true});
//=> false
isDescriptor({get: noop, value: true});
//=> false
```

`false` when an accessor is not a function

```js
isDescriptor({get: noop, set: 'baz'});
//=> false
isDescriptor({get: 'foo', set: noop});
//=> false
isDescriptor({get: 'foo', bar: 'baz'});
//=> false
isDescriptor({get: 'foo', set: 'baz'});
//=> false
```

`false` when a value is not the correct type

```js
isDescriptor({get: noop, set: noop, enumerable: 'foo'});
//=> false
isDescriptor({set: noop, configurable: 'foo'});
//=> false
isDescriptor({get: noop, configurable: 'foo'});
//=> false
```

## About

### Related projects

* [is-accessor-descriptor](https://www.npmjs.com/package/is-accessor-descriptor): Returns true if a value has the characteristics of a valid JavaScript accessor descriptor. | [homepage](https://github.com/jonschlinkert/is-accessor-descriptor "Returns true if a value has the characteristics of a valid JavaScript accessor descriptor.")
* [is-data-descriptor](https://www.npmjs.com/package/is-data-descriptor): Returns true if a value has the characteristics of a valid JavaScript data descriptor. | [homepage](https://github.com/jonschlinkert/is-data-descriptor "Returns true if a value has the characteristics of a valid JavaScript data descriptor.")
* [is-descriptor](https://www.npmjs.com/package/is-descriptor): Returns true if a value has the characteristics of a valid JavaScript descriptor. Works for… [more](https://github.com/jonschlinkert/is-descriptor) | [homepage](https://github.com/jonschlinkert/is-descriptor "Returns true if a value has the characteristics of a valid JavaScript descriptor. Works for data descriptors and accessor descriptors.")
* [isobject](https://www.npmjs.com/package/isobject): Returns true if the value is an object and not an array or null. | [homepage](https://github.com/jonschlinkert/isobject "Returns true if the value is an object and not an array or null.")

### Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

### Contributors

| **Commits** | **Contributor** | 
| --- | --- |
| 24 | [jonschlinkert](https://github.com/jonschlinkert) |
| 1 | [doowb](https://github.com/doowb) |
| 1 | [wtgtybhertgeghgtwtg](https://github.com/wtgtybhertgeghgtwtg) |

### Building docs

_(This project's readme.md is generated by [verb](https://github.com/verbose/verb-generate-readme), please don't edit the readme directly. Any changes to the readme must be made in the [.verb.md](.verb.md) readme template.)_

To generate the readme, run the following command:

```sh
$ npm install -g verbose/verb#dev verb-generate-readme && verb
```

### Running tests

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

### Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](https://twitter.com/jonschlinkert)

### License

Copyright © 2017, [Jon Schlinkert](https://github.com/jonschlinkert).
Released under the [MIT License](LICENSE).

***

_This file was generated by [verb-generate-readme](https://github.com/verbose/verb-generate-readme), v0.6.0, on July 22, 2017._