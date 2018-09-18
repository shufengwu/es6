"use strict";
window.onload = function () {
    var regex1 = new RegExp('xyz', 'i');
    console.log(regex1);
    // 等价于
    var regex1 = /xyz/i;
    console.log(regex1);
    var regex2 = new RegExp(/xyz/i);
    console.log(regex2);
    // 等价于
    var regex2 = /xyz/i;
    console.log(regex2);
    console.log(new RegExp(/abc/ig, 'i').flags);

    console.log(/^\uD83D/u.test('\uD83D\uDC2A')); // false
    console.log(/^\uD83D/.test('\uD83D\uDC2A')); // true

    var s = '𠮷';
    console.log(/^.$/.test(s)); // false
    console.log(/^.$/u.test(s)); // ture

    // console.log(/\u{61}/.test('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu')); //true
    console.log(/\u{61}/.test('a')); //false
    console.log(/\u{61}/u.test('a')); //true
    console.log(/\u{20BB7}/u.test('𠮷')); //true
    console.log("");

    console.log(/a{2}/.test('aa')); //true
    console.log(/a{2}/u.test('aa')); //true
    console.log(/𠮷{2}/.test('𠮷\udfb7')); //true
    console.log(/𠮷{2}/.test('𠮷𠮷')); //false
    console.log(/𠮷{2}/u.test('𠮷𠮷')); //true
    console.log("");


    console.log(/^\S$/.test('𠮷')); //false
    console.log(/^\S$/u.test('𠮷')); //true

    function codePointLength(text) {
        var result = text.match(/[\s\S]/gu);
        return result ? result.length : 0;
    }

    var s = '𠮷𠮷';

    console.log(s.length) // 4
    console.log(codePointLength(s)) // 2

    console.log(/[a-z]/i.test('\u004B')); // false
    console.log(/[a-z]/iu.test('\u004B')); // true
    console.log(/[a-z]/i.test('\u212A'));
    console.log(/[a-z]/iu.test('\u212A'));
    console.log("");

    var s = 'aaa_aa_a';
    var r1 = /a+/g;
    var r2 = /a+/y;

    r1.exec(s) // ["aaa"]
    r2.exec(s) // ["aaa"]

    r1.exec(s) // ["aa"]
    r2.exec(s) // null

    'a1a2a3'.match(/a\d/y) // ["a1"]
    console.log('a1a2a3'.match(/a\d/gy)); // ["a1", "a2", "a3"]

    const TOKEN_Y = /\s*(\+|[0-9]+)\s*/y;
    const TOKEN_G = /\s*(\+|[0-9]+)\s*/g;

    tokenize(TOKEN_Y, '3 + 4')
    // [ '3', '+', '4' ]
    tokenize(TOKEN_G, '3 + 4')
    // [ '3', '+', '4' ]

    function tokenize(TOKEN_REGEX, str) {
        let result = [];
        let match;
        while (match = TOKEN_REGEX.exec(str)) {
            result.push(match[1]);
        }
        console.log(result);
    }

};