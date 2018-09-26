//"use strict";

var x = 11;




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

    /**
     * 后行断言
     */

    let str1 = '100% of US presidents have been 150% male';
    let r3 = /\d+(?=%)/;
    console.log(r3.exec(str1));
    console.log(r3.exec(str1));
    console.log(/\d+(?!%)/.exec('that’s all 44 of 55% them'));

    console.log(/(?<=\$)\d+/.exec('Benjamin Franklin $53 is on the $100 bill'));
    console.log(/(?<!\$)\d+/.exec('it’s is worth about €90'));

    const RE_DOLLAR_PREFIX = /(?<=\$)foo/g;
    let str2 = '$foo %foo foo $fool';
    let str3 = str2.replace(RE_DOLLAR_PREFIX, 'bar');
    console.log(str3);

    console.log(/(?<=(\d+)(\d+))$/.exec('1053'));

    /**
     * Unicode 属性类
     */
    const regexGreekSymbol = /\p{Script=Greek}/u;
    console.log(regexGreekSymbol.test('π')); // true

    const regex = /^\p{Decimal_Number}+$/u;
    console.log(regex.test('𝟏𝟐𝟑𝟜𝟝𝟞𝟩𝟪𝟫𝟬𝟭𝟮𝟯𝟺𝟻𝟼')); // true

    // 匹配所有数字
    const regex3 = /^\p{Number}+$/u;
    console.log(regex3.test('²³¹¼½¾')); // true
    console.log(regex3.test('㉛㉜㉝')); // true
    console.log(regex3.test('ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ')); // true

    // 匹配所有空格
    // \p{White_Space}

    // 匹配各种文字的所有字母，等同于 Unicode 版的 \w
    // [\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]

    // 匹配各种文字的所有非字母的字符，等同于 Unicode 版的 \W
    // [^\p{Alphabetic}\p{Mark}\p{Decimal_Number}\p{Connector_Punctuation}\p{Join_Control}]

    // 匹配 Emoji
    // /\p{Emoji_Modifier_Base}\p{Emoji_Modifier}?|\p{Emoji_Presentation}|\p{Emoji}\uFE0F/gu

    // 匹配所有的箭头字符
    // const regexArrows = /^\p{Block=Arrows}+$/u;
    // regexArrows.test('←↑→↓↔↕↖↗↘↙⇏⇐⇑⇒⇓⇔⇕⇖⇗⇘⇙⇧⇩') // true

    /**
     * 具名组匹配
     */
    const RE_DATE = /(\d{4})-(\d{2})-(\d{2})/;

    const matchObj = RE_DATE.exec('1999-12-31');
    console.log(matchObj);
    const year = matchObj[1]; // 1999
    const month = matchObj[2]; // 12
    const day = matchObj[3]; // 31
    console.log(year);
    console.log(month);
    console.log(day);

    const RE_DATE2 = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;

    const matchObj2 = RE_DATE2.exec('1999-12-31');
    const year2 = matchObj2.groups.year; // 1999
    const month2 = matchObj2.groups.month; // 12
    const day2 = matchObj2.groups.day; // 31
    console.log(year2);
    console.log(month2);
    console.log(day2);

    let {
        groups: {
            one,
            two
        }
    } = /^(?<one>.*):(?<two>.*)$/u.exec('foo:bar');
    console.log(one);
    console.log(two);

    /**
     * 解构赋值和替换
     */
    let re = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/u;
    console.log('2015-01-02'.replace(re, '$<day>/$<month>/$<year>'));

    console.log("");
    var newValue = '2015-01-02'.replace(re, (
        matched, // 整个匹配结果 2015-01-02
        capture1, // 第一个组匹配 2015
        capture2, // 第二个组匹配 01
        capture3, // 第三个组匹配 02
        position, // 匹配开始的位置 0
        S, // 原字符串 2015-01-02
        groups // 具名组构成的一个对象 {year, month, day}
    ) => {
        console.log(matched);
        console.log(capture1);
        console.log(capture2);
        console.log(capture3);
        console.log(position);
        console.log(S);
        console.log(groups);


        let {
            day,
            month,
            year
        } = groups;

        return `${day}/${month}/${year}`;
    })
    console.log(
        newValue
    );

    /**
     * 在正则表达式内部引用某个“具名组匹配”
     */
    const RE_TWICE = /^(?<word>[a-z]+)!\k<word>$/;
    console.log(RE_TWICE.test('abc!abc'));
    console.log(RE_TWICE.test('abc!ab'));

    const RE_TWICE2 = /^(?<word>[a-z]+)!\1$/;
    console.log(RE_TWICE2.test('abc!abc'));
    console.log(RE_TWICE2.test('abc!ab'));

    const RE_TWICE3 = /^(?<word>[a-z]+)!\k<word>!\1$/;
    console.log(RE_TWICE3.test('abc!abc!abc')); // true
    console.log(RE_TWICE3.test('abc!abc!ab')); // false

    console.log("");

    var regex4 = /t(e)(st(\d?))/g;
    var string = 'test1test2testtest3test';

    var matches = [];
    var match;
    while (match = regex4.exec(string)) {
        matches.push(match);
    }
    console.log(matches);
    console.log("");

    // const string2 = 'test1test2test3';
    // for (const match2 of string2.matchAll(regex4)) {
    //     console.log(match2);
    // }

    console.log(0.1 + 0.2);
    console.log(0.1 + 0.2 - 0.3);

    console.log(Math.imul(0x7fffffff, 0x7fffffff));

    console.log(2 ** 24);


    var person = {
        name: "wsf",
        age: 18
    };

    function func10() {
        console.log();
    }
    console.log(func10.bind({}).name);

    console.log("");


    var obj = {
        x: 22,
        y: this, //window
        say: () => {
            console.log(this.x);
        }
    }
    obj.say();
    //输出的值为11
    console.log(obj.y);



};

