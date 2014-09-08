/*global describe, it */
'use strict';
var assert = require('assert');
var Converter = require('../src/convert-base.js');

describe('ConvertBase', function() {
	var converter = new Converter();

	describe('#convert() to binary', function() {
		it('should convert octal to binary', function() {
			assert.equal('1', converter.convert(1, 8, 2));
			assert.equal('10', converter.convert(2, 8, 2));
			assert.equal('100', converter.convert(4, 8, 2));

			assert.equal(isNaN(converter.convert(8, 8, 2)), true);
			assert.equal(isNaN(converter.convert(9, 8, 2)), true);
			assert.equal('1000', converter.convert(10, 8, 2));

			assert.equal('1010', converter.convert(12, 8, 2));
			assert.equal('1111', converter.convert(17, 8, 2));

			assert.equal('10000', converter.convert(20, 8, 2));
			assert.equal('100000', converter.convert(40, 8, 2));

			assert.equal(isNaN(converter.convert(80, 8, 2)), true);
			assert.equal(isNaN(converter.convert(99, 8, 2)), true);

			assert.equal('1000000', converter.convert(100, 8, 2));
			assert.equal('10000000000', converter.convert(2000, 8, 2));

			assert.notEqual('1010', converter.convert(1, 8, 2));
			assert.notEqual('1011', converter.convert(2, 8, 2));
			assert.notEqual('1100', converter.convert(3, 8, 2));
		});

		it('should convert decimal to binary', function() {
			assert.equal('1', converter.convert(1, 10, 2));
			assert.equal('10', converter.convert(2, 10, 2));
			assert.equal('100', converter.convert(4, 10, 2));
			assert.equal('1000', converter.convert(8, 10, 2));

			assert.equal('1010', converter.convert(10, 10, 2));
			assert.equal('1111', converter.convert(15, 10, 2));

			assert.equal('10000', converter.convert(16, 10, 2));
			assert.equal('100000', converter.convert(32, 10, 2));
			assert.equal('1000000', converter.convert(64, 10, 2));
			assert.equal('10000000000', converter.convert(1024, 10, 2));

			assert.notEqual('1010', converter.convert(1, 10, 2));
			assert.notEqual('1011', converter.convert(2, 10, 2));
			assert.notEqual('1100', converter.convert(3, 10, 2));
		});

		it('should convert hexadecimal to binary', function() {
			assert.equal('1', converter.convert(0x1, 16, 2));
			assert.equal('10', converter.convert(0x2, 16, 2));
			assert.equal('100', converter.convert(0x4, 16, 2));
			assert.equal('1000', converter.convert(0x8, 16, 2));

			assert.equal('1010', converter.convert(0xA, 16, 2));
			assert.equal('1111', converter.convert(0xF, 16, 2));

			assert.equal('10000', converter.convert(0x10, 16, 2));
			assert.equal('100000', converter.convert(0x20, 16, 2));
			assert.equal('1000000', converter.convert(0x40, 16, 2));
			assert.equal('10000000000', converter.convert(0x400, 16, 2));

			assert.notEqual('1010', converter.convert(1, 16, 2));
			assert.notEqual('1011', converter.convert(2, 16, 2));
			assert.notEqual('1100', converter.convert(3, 16, 2));
		});
	});

	describe('#convert() to octal', function() {
		it('should convert binary to octal', function() {
			assert.equal('1', converter.convert(1, 2, 8));
			assert.equal('2', converter.convert(10, 2, 8));
			assert.equal('4', converter.convert(100, 2, 8));

			assert.equal('10', converter.convert(1000, 2, 8));

			assert.equal('12', converter.convert(1010, 2, 8));
			assert.equal('17', converter.convert(1111, 2, 8));

			assert.equal('20', converter.convert(10000, 2, 8));
			assert.equal('40', converter.convert(100000, 2, 8));

			assert.equal('100', converter.convert(1000000, 2, 8));
			assert.equal('2000', converter.convert(10000000000, 2, 8));

			assert.notEqual('1', converter.convert(1010, 2, 8));
			assert.notEqual('2', converter.convert(1011, 2, 8));
			assert.notEqual('3', converter.convert(1100, 2, 8));
		});

		it('should convert decimal to octal', function() {
			assert.equal('1', converter.convert(1, 10, 8));
			assert.equal('2', converter.convert(2, 10, 8));
			assert.equal('4', converter.convert(4, 10, 8));

			assert.equal('10', converter.convert(8, 10, 8));

			assert.equal('12', converter.convert(10, 10, 8));
			assert.equal('17', converter.convert(15, 10, 8));

			assert.equal('20', converter.convert(16, 10, 8));
			assert.equal('40', converter.convert(32, 10, 8));

			assert.equal('100', converter.convert(64, 10, 8));
			assert.equal('2000', converter.convert(1024, 10, 8));

			assert.notEqual('1', converter.convert(12, 10, 8));
			assert.notEqual('2', converter.convert(13, 10, 8));
			assert.notEqual('3', converter.convert(14, 10, 8));
		});

		it('should convert hexadecimal to octal', function() {
			assert.equal('1', converter.convert(0x1, 16, 8));
			assert.equal('2', converter.convert(0x2, 16, 8));
			assert.equal('4', converter.convert(0x4, 16, 8));

			assert.equal('10', converter.convert(0x8, 16, 8));

			assert.equal('12', converter.convert(0xA, 16, 8));
			assert.equal('17', converter.convert(0xF, 16, 8));

			assert.equal('20', converter.convert(0x10, 16, 8));
			assert.equal('40', converter.convert(0x20, 16, 8));

			assert.equal('100', converter.convert(0x40, 16, 8));
			assert.equal('2000', converter.convert(0x400, 16, 8));

			assert.notEqual('1', converter.convert(0xA, 16, 8));
			assert.notEqual('2', converter.convert(0xB, 16, 8));
			assert.notEqual('3', converter.convert(0xC, 16, 8));
		});
	});

	describe('#convert() to decimal', function() {
		it('should convert binary to decimal', function() {
			assert.equal(1, converter.convert(1, 2, 10));
			assert.equal(2, converter.convert(10, 2, 10));
			assert.equal(4, converter.convert(100, 2, 10));
			assert.equal(8, converter.convert(1000, 2, 10));

			assert.equal(10, converter.convert(1010, 2, 10));
			assert.equal(15, converter.convert(1111, 2, 10));

			assert.equal(16, converter.convert(10000, 2, 10));
			assert.equal(32, converter.convert(100000, 2, 10));
			assert.equal(64, converter.convert(1000000, 2, 10));
			assert.equal(1024, converter.convert(10000000000, 2, 10));

			assert.notEqual(1, converter.convert(1010, 2, 10));
			assert.notEqual(2, converter.convert(1011, 2, 10));
			assert.notEqual(3, converter.convert(1100, 2, 10));
		});

		it('should convert octal to decimal', function() {
			assert.equal(1, converter.convert(1, 8, 10));
			assert.equal(2, converter.convert(2, 8, 10));
			assert.equal(4, converter.convert(4, 8, 10));

			assert.equal(8, converter.convert(10, 8, 10));

			assert.equal(10, converter.convert(12, 8, 10));
			assert.equal(15, converter.convert(17, 8, 10));

			assert.equal(16, converter.convert(20, 8, 10));
			assert.equal(32, converter.convert(40, 8, 10));

			assert.equal(64, converter.convert(100, 8, 10));
			assert.equal(1024, converter.convert(2000, 8, 10));

			assert.notEqual(12, converter.convert(1, 8, 10));
			assert.notEqual(13, converter.convert(2, 8, 10));
			assert.notEqual(14, converter.convert(3, 8, 10));
		});

		it('should convert hexadecimal to decimal', function() {
			assert.equal('1', converter.convert(0x1, 16, 10));
			assert.equal('2', converter.convert(0x2, 16, 10));
			assert.equal('4', converter.convert(0x4, 16, 10));

			assert.equal('8', converter.convert(0x8, 16, 10));

			assert.equal('10', converter.convert(0xA, 16, 10));
			assert.equal('15', converter.convert(0xF, 16, 10));

			assert.equal('16', converter.convert(0x10, 16, 10));
			assert.equal('32', converter.convert(0x20, 16, 10));

			assert.equal('64', converter.convert(0x40, 16, 10));
			assert.equal('1024', converter.convert(0x400, 16, 10));

			assert.notEqual('1', converter.convert(0xA, 16, 10));
			assert.notEqual('2', converter.convert(0xB, 16, 10));
			assert.notEqual('3', converter.convert(0xC, 16, 10));
		});
	});

	describe('#convert() to hexadecimal', function() {
		it('should convert binary to hexadecimal', function() {
			assert.equal('1', converter.convert(1, 2, 16));
			assert.equal('2', converter.convert(10, 2, 16));
			assert.equal('4', converter.convert(100, 2, 16));
			assert.equal('8', converter.convert(1000, 2, 16));

			assert.equal('a', converter.convert(1010, 2, 16));
			assert.equal('f', converter.convert(1111, 2, 16));

			assert.equal('10', converter.convert(10000, 2, 16));
			assert.equal('20', converter.convert(100000, 2, 16));
			assert.equal('40', converter.convert(1000000, 2, 16));
			assert.equal('400', converter.convert(10000000000, 2, 16));

			assert.notEqual('1', converter.convert(1010, 2, 16));
			assert.notEqual('2', converter.convert(1011, 2, 16));
			assert.notEqual('3', converter.convert(1100, 2, 16));
		});

		it('should convert octal to hexadecimal', function() {
			assert.equal('1', converter.convert(1, 8, 16));
			assert.equal('2', converter.convert(2, 8, 16));
			assert.equal('4', converter.convert(4, 8, 16));

			assert.equal('8', converter.convert(10, 8, 16));

			assert.equal('a', converter.convert(12, 8, 16));
			assert.equal('f', converter.convert(17, 8, 16));

			assert.equal('10', converter.convert(20, 8, 16));
			assert.equal('20', converter.convert(40, 8, 16));

			assert.equal('40', converter.convert(100, 8, 16));
			assert.equal('400', converter.convert(2000, 8, 16));

			assert.notEqual('a', converter.convert(1, 8, 16));
			assert.notEqual('b', converter.convert(2, 8, 16));
			assert.notEqual('c', converter.convert(3, 8, 16));
		});

		it('should convert decimal to hexadecimal', function() {
			assert.equal('1', converter.convert(1, 10, 16));
			assert.equal('2', converter.convert(2, 10, 16));
			assert.equal('4', converter.convert(4, 10, 16));

			assert.equal('8', converter.convert(8, 10, 16));

			assert.equal('a', converter.convert(10, 10, 16));
			assert.equal('f', converter.convert(15, 10, 16));

			assert.equal('10', converter.convert(16, 10, 16));
			assert.equal('20', converter.convert(32, 10, 16));

			assert.equal('40', converter.convert(64, 10, 16));
			assert.equal('400', converter.convert(1024, 10, 16));

			assert.notEqual('a', converter.convert(1, 10, 16));
			assert.notEqual('b', converter.convert(2, 10, 16));
			assert.notEqual('c', converter.convert(3, 10, 16));
		});
	});
});
