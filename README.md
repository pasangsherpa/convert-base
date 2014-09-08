# convert-base [![Build Status](https://travis-ci.org/pasangsherpa/convert-base.svg?branch=master)](https://travis-ci.org/pasangsherpa/convert-base)

> Convert from one base to another: Hex, Binary, Decimal, Octal

## Install

Download the [production version][min] or the [development version][max].

[min]: https://raw.githubusercontent.com/pasangsherpa/convert-base/master/dist/convert-base.min.js
[max]: https://raw.githubusercontent.com/pasangsherpa/convert-base/master/dist/convert-base.js

```sh
$ npm install --save convert-base
```

```sh
$ bower install --save convert-base
```


## Usage

```js
var ConvertBase = require('convert-base');
var converter = new ConvertBase();
converter.convert(16, 10, 2); // 10000
converter.convert(0xF, 16, 2); // 1111

```
```js
<script type="text/javascript" src="https://raw.githubusercontent.com/pasangsherpa/convert-base/master/dist/convert-base.min.js"></script>
<script type="text/javascript"> 
  	var converter = new ConvertBase();
	converter.convert(16, 10, 2); // 10000
	converter.convert(0xF, 16, 2); // 1111

</script>
```
######Refer to test.js in test directory for more examples.

## Documentation

### ConvertBase()

Creates an instance of the converter.


### Methods

#### .convert(number, from, to)

Converts a number from one base to another. Returns the result as a number for decimal base and string for others.

##### number

Type: `int`

the number to be converted.

##### from

Type: `int`

the base to be converted from.

##### to

Type: `int`

the base to be converted to.


## License

[MIT](http://opensource.org/licenses/MIT) © [Pasang Sherpa](https://github.com/pasangsherpa)
