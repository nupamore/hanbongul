(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["hanbongul"] = factory();
	else
		root["hanbongul"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.hanbongulize = hanbongulize;

var _hangulDisassemble = __webpack_require__(1);

var _hangulDisassemble2 = _interopRequireDefault(_hangulDisassemble);

var _widthMap = __webpack_require__(2);

var _widthMap2 = _interopRequireDefault(_widthMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var downVowels = ['ㅗ', 'ㅛ', 'ㅜ', 'ㅠ', 'ㅡ'];
var SPACE = '　';
var QUESTION = '？';

function changeChar(input) {
  var len = _widthMap2.default[input] ? _widthMap2.default[input].length : null;
  var rand = Math.floor(Math.random() * len);

  if (len) return _widthMap2.default[input][0].char;else if (input.match(/[ㄱ-힣]/)) return QUESTION;else return input;
}

function hanbongulize(hangul) {
  var lines = ['', '', ''];

  var hanguls = hangul.split('');
  var disassembled = _hangulDisassemble2.default.disassemble(hangul);

  if (!disassembled) return '';

  disassembled.forEach(function (char) {
    if (char && (typeof char === 'undefined' ? 'undefined' : _typeof(char)) === 'object') {
      var first = changeChar(char.first);
      var vowel = changeChar(char.vowel);
      var last = changeChar(char.last || SPACE);

      lines[0] += first;
      // 아래방향 모음일 경우
      if (downVowels.includes(char.vowel)) {
        lines[1] += vowel;
        lines[2] += last;
      }
      // 오른쪽방향 모음일 경우
      else {
          lines[0] += vowel;
          lines[1] += SPACE + last;
          lines[2] += SPACE + SPACE;
        }
    }
    // 한글이 아닐 경우
    else if (typeof char === 'string') {
        lines[0] += changeChar(char);
        lines[1] += SPACE;
        lines[2] += SPACE;
      }
  });

  return lines.reduce(function (p, n) {
    return p + '\n' + n;
  });
}

// browser
if (typeof window !== 'undefined') {
  window.hanbongulize = hanbongulize;
}

/***/ }),
/* 1 */
/***/ (function(module, exports) {

var Hangul = {

	alphabets: [
		['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'],
		['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'],
		['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ']
	],

	disassemble: function(text, options) {
		options = options || {};
		var flatten = options.flatten || false;
		if (typeof text !== 'string') return null;
		if (text.length === 0) return '';
		return Hangul._disassembleMultipleCharacters(text, flatten);
	},

	toString: function(text) {
		return Hangul.disassemble(text, {flatten: true}).join('');
	},

	isHangul: function(text) {
		const hangul = Hangul.disassemble(text.replace(/[a-zA-Z0-9 ]/g, ''));
		for (var i in hangul) {
			if (typeof hangul[i] === 'object') return true;
			if (Hangul.isConsonant(hangul[i]) || Hangul.isVowel(hangul[i])) return true;
		}
		return false;
	},

	equals: function(a, b) {
		if (a === b) return true;
		return Hangul.toString(a) === Hangul.toString(b);
	},

	isVowel: function(character) {
		if (!character) return false;
		for (var i in Hangul.alphabets[1]) {
			if (character === Hangul.alphabets[1][i]) return true;
		}
		return false;
	},

	isConsonant: function(character) {
		if (!character) return false;
		for (var i in Hangul.alphabets[0]) {
			if (character === Hangul.alphabets[0][i]) return true;
		}
		for (var j in Hangul.alphabets[2]) {
			if (character === Hangul.alphabets[2][j]) return true;
		}
		return false;
	},

	_disassembleSingleCharacter: function(singleCharacter, flatten) {
		var code = singleCharacter.charCodeAt(0);
		if (code === 32 || code === 39 || code === 44) return singleCharacter;
		if (Hangul.isConsonant(singleCharacter) || Hangul.isVowel(singleCharacter)) {
			if (flatten) return [singleCharacter];
			else return null;
		}
		if (code < 0xAC00 || code > 0xD7A3) return singleCharacter;
		code = code - 0xAC00;

		var last = code % 28;
		var vowel = ((code - last) / 28) % 21;
		var first = (((code - last) / 28) - vowel) / 21;
		var result = {
			first: Hangul.alphabets[0][first],
			vowel: Hangul.alphabets[1][vowel],
			last: Hangul.alphabets[2][last]
		};

		if (!flatten) return result;

		var flat = [];
		if (result.first) flat.push(result.first);
		if (result.vowel) flat.push(result.vowel);
		if (result.last) flat.push(result.last);

		return flat;
	},

	_disassembleMultipleCharacters: function(multipleCharacters, flatten) {
		var result = [];
		for (var i = 0; i < multipleCharacters.length; i++) {
			var disassembled = Hangul._disassembleSingleCharacter(multipleCharacters.charAt(i), flatten);
			if (flatten) result = result.concat(disassembled);
			else result.push(disassembled);
		}
		return result;
	}

};

module.exports = Hangul;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  " ": [{
    "char": "　",
    "width": 10
  }],
  "!": [{
    "char": "！",
    "width": 10
  }],
  "?": [{
    "char": "？",
    "width": 10
  }],
  "~": [{
    "char": "〜",
    "width": 10
  }],
  "ㄱ": [{
    "char": "フ",
    "width": 10
  }, {
    "char": "ﾌ",
    "width": 5
  }],
  "ㄴ": [{
    "char": "し",
    "width": 10
  }, {
    "char": "レ",
    "width": 10
  }, {
    "char": "ﾚ",
    "width": 6
  }, {
    "char": "L",
    "width": 6
  }],
  "ㄷ": [{
    "char": "匚",
    "width": 10
  }],
  "ㄹ": [{
    "char": "己",
    "width": 10
  }, {
    "char": "乙",
    "width": 10
  }],
  "ㅁ": [{
    "char": "ロ",
    "width": 10
  }, {
    "char": "ﾛ",
    "width": 6
  }],
  "ㅂ": [{
    "char": "廿",
    "width": 10
  }],
  "ㅅ": [{
    "char": "人",
    "width": 10
  }, {
    "char": "∧",
    "width": 10
  }, {
    "char": "へ",
    "width": 10
  }, {
    "char": "ﾍ",
    "width": 6
  }],
  "ㅇ": [{
    "char": "O",
    "width": 8
  }, {
    "char": "o",
    "width": 6
  }, {
    "char": "0",
    "width": 6
  }, {
    "char": "○",
    "width": 6
  }],
  "ㅈ": [{
    "char": "ス",
    "width": 10
  }, {
    "char": "ｽ",
    "width": 6
  }],
  "ㅊ": [{
    "char": "六",
    "width": 10
  }, {
    "char": "大",
    "width": 10
  }],
  "ㅋ": [{
    "char": "ヲ",
    "width": 10
  }, {
    "char": "ｦ",
    "width": 5
  }],
  "ㅌ": [{
    "char": "∈",
    "width": 10
  }, {
    "char": "E",
    "width": 7
  }],
  "ㅍ": [{
    "char": "立",
    "width": 10
  }],
  "ㅎ": [{
    "char": "云",
    "width": 10
  }],
  "ㅆ": [{
    "char": "从",
    "width": 10
  }],
  "ㅉ": [{
    "char": "双",
    "width": 10
  }],
  "ㅏ": [{
    "char": "ト",
    "width": 10
  }, {
    "char": "Γ",
    "width": 6
  }, {
    "char": "ﾄ",
    "width": 5
  }],
  "ㅐ": [{
    "char": "H",
    "width": 7
  }],
  "ㅑ": [{
    "char": "l=",
    "width": 9
  }, {
    "char": "ｷ",
    "width": 7
  }, {
    "char": "F",
    "width": 6
  }],
  "ㅓ": [{
    "char": "･l",
    "width": 7
  }, {
    "char": "-l",
    "width": 6
  }, {
    "char": "ﾅ",
    "width": 6
  }],
  "ㅔ": [{
    "char": "･ll",
    "width": 10
  }, {
    "char": "-ll",
    "width": 9
  }, {
    "char": "ﾅl",
    "width": 9
  }],
  "ㅕ": [{
    "char": "=l",
    "width": 9
  }, {
    "char": "ｷ",
    "width": 7
  }],
  "ㅗ": [{
    "char": "⊥",
    "width": 10
  }],
  "ㅛ": [{
    "char": "乂",
    "width": 10
  }, {
    "char": "止",
    "width": 10
  }, {
    "char": "Ц",
    "width": 7
  }, {
    "char": "ч",
    "width": 5
  }],
  "ㅜ": [{
    "char": "丁",
    "width": 10
  }, {
    "char": "T",
    "width": 7
  }, {
    "char": "Т",
    "width": 7
  }],
  "ㅠ": [{
    "char": "兀",
    "width": 10
  }, {
    "char": "π",
    "width": 7
  }],
  "ㅡ": [{
    "char": "一",
    "width": 10
  }, {
    "char": "－",
    "width": 10
  }, {
    "char": "―",
    "width": 10
  }],
  "ㅣ": [{
    "char": "Ｉ",
    "width": 10
  }, {
    "char": "l",
    "width": 3
  }]
};

/***/ })
/******/ ]);
});