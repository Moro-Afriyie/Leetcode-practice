/**
 * @param {string} s
 * @return {number}
 */

const ROMAN_NUMERALS = {
	I: 1,
	IV: 4,
	V: 5,
	IX: 9,
	X: 10,
	XL: 40,
	L: 50,
	XC: 90,
	C: 100,
	CD: 400,
	D: 500,
	CM: 900,
	M: 1000,
};
var romanToInt = function (s) {
	let i = 0;
	let sum = 0;
	if (s.length === 0) {
		return sum;
	}
	while (i < s.length) {
		if (ROMAN_NUMERALS[s.substring(i, i + 2)]) {
			sum += ROMAN_NUMERALS[s.substring(i, i + 2)];
			i += 2;
		} else {
			sum += ROMAN_NUMERALS[s[i]];
			i += 1;
		}
	}
	return sum;
};
