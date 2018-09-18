//"use strict";
window.onload = function () {
    let hello = 123;
    //console.log(hell\u{6F}); // 123

    console.log("\u{20BB7}");
    console.log("\u{1F680}");
    console.log("\uD83D\uDE80");
    console.log("\n");


    console.log('\z' === 'z');
    console.log('\172' === 'z');
    console.log('\x7A' === 'z');
    console.log('\u007A' === 'z');
    console.log('\u{7A}' === 'z');
    console.log("\n");

    var s = "𠮷";
    console.log(s.length); // 2
    console.log(s.charAt(0)); // ''
    console.log(s.charAt(1)); // ''
    console.log(s.charCodeAt(0)); // 55362
    console.log(s.charCodeAt(1)); // 57271
    console.log("\n");

    let s2 = '𠮷a';
    console.log(s2.codePointAt(0)); // 134071
    console.log(s2.codePointAt(1)); // 57271
    console.log(s2.codePointAt(2)); // 97
    console.log("\n");

    console.log(s2.codePointAt(0).toString(16)); // 134071
    console.log(s2.codePointAt(1).toString(16)); // 57271
    console.log(s2.codePointAt(2).toString(16)); // 97
    console.log("\n");

    for (let ch of s2) {
        console.log(ch.codePointAt(0).toString(16));
    }
    console.log("\n");

    function is32Bit(c) {
        return c.codePointAt(0) > 0xFFFF;
    }

    console.log(is32Bit("𠮷")); // true
    console.log(is32Bit("a")); // false
    console.log("\n");


    console.log(String.fromCharCode(0x20BB7));
    console.log(String.fromCodePoint(0x20BB7));
    // "𠮷"
    console.log(String.fromCodePoint(0x78, 0x1f680, 0x79) === 'x\uD83D\uDE80y');
    console.log("\n");

    for (let codePoint of 'foo') {
        console.log(codePoint)
    }
    console.log("\n");

    let text = String.fromCodePoint(0x20BB7);

    for (let i = 0; i < text.length; i++) {
        console.log(text[i]);
    }
    // " "
    // " "

    for (let i of text) {
        console.log(i);
    }
    // "𠮷"
    console.log("\n");

    console.log('\u01D1'.normalize());
    console.log('\u004F\u030C'.normalize());
    console.log('\u01D1'.normalize() === '\u004F\u030C'.normalize());
    console.log("\n");

    console.log('\u004F\u030C'.normalize('NFC'));
    console.log('\u004F\u030C'.normalize('NFD'));
    console.log('\u004F\u030C'.normalize('NFKC'));
    console.log('\u004F\u030C'.normalize('NFKD'));

    console.log('\u004F\u030C'.normalize('NFC').length);
    console.log('\u004F\u030C'.normalize('NFD').length);
    console.log('\u004F\u030C'.normalize('NFKC').length);
    console.log('\u004F\u030C'.normalize('NFKD').length);
    console.log("\n");

    let s3 = 'Hello world!';

    console.log(s3.startsWith('Hello'));
    console.log(s3.endsWith('!'));
    console.log(s3.includes('o'));
    console.log(s3.startsWith('world', 6));
    console.log(s3.endsWith('Hello', 5));
    console.log(s3.includes('Hello', 6));
    console.log("\n");

    console.log('x'.repeat(3));
    console.log('hello'.repeat(2));
    console.log('na'.repeat(0));
    console.log('na'.repeat(2.9));
    // 'na'.repeat(Infinity);
    // RangeError
    // 'na'.repeat(-1);
    // RangeError
    console.log('na'.repeat(-0.9));
    console.log('na'.repeat(NaN));
    console.log('na'.repeat('na'));
    console.log('na'.repeat('3'));
    console.log("");

    console.log('x'.padStart(5, 'ab'));
    console.log('x'.padStart(4, 'ab'));
    console.log('x'.padEnd(5, 'ab'));
    console.log('x'.padEnd(4, 'ab'));
    console.log('xxx'.padStart(2, 'ab'));
    console.log('xxx'.padEnd(2, 'ab'));
    console.log('abc'.padStart(10, '0123456789'));
    console.log('x'.padStart(4));
    console.log('x'.padEnd(4));
    console.log('1'.padStart(10, '0'));
    console.log('12'.padStart(10, '0'));
    console.log('123456'.padStart(10, '0'));
    console.log('12'.padStart(10, 'YYYY-MM-DD'));
    console.log('09-12'.padStart(10, 'YYYY-MM-DD'));
    console.log("");

    let basket = {
        count: 5,
        onSale: 3
    };
    // $('#result').append(
    //     'There are <b>' + basket.count + '</b> ' +
    //     'items in your basket, ' +
    //     '<em>' + basket.onSale +
    //     '</em> are on sale!'
    // );

    $('#result').append(`
      There are <b>${basket.count}</b> items
       in your basket, <em>${basket.onSale}</em>
      are on sale!
    `);

    // 普通字符串
    $('#result').append(`In JavaScript '\n' is a line-feed.`);
    // 多行字符串
    $('#result').append(`In JavaScript this is 
    not legal.`);

    console.log(`string text line 1 
string text line 2`);

    // 字符串中嵌入变量
    let name = "Bob",
        time = "today";
    $('#result').append(`Hello ${name}, how are you ${time}?`);

    let greeting = `\`Yo\` World!`;
    $('#result').append(greeting);

    $('#list').html(`
<ul>
  <li>first</li>
  <li>second</li>
</ul>
`);

    let x = 1;
    let y = 2;
    console.log(`${x} + ${y} = ${x + y}`);
    console.log(`${x} + ${y * 2} = ${x + y * 2}`);
    let obj = {
        x: 1,
        y: 2
    };
    console.log(`${obj.x + obj.y}`);

    function fn() {
        return "Hello World";
    }
    console.log(`foo ${fn()} bar`);

    //     const tmpl = addrs => `
    //   <table>
    //   ${addrs.map(addr => `
    //     <tr><td>${addr.first}</td></tr>
    //     <tr><td>${addr.last}</td></tr>
    //   `).join('')}
    //   </table>
    // `;

    //     $("#address").html(tmpl([{
    //         first: "bei",
    //         last: "jing"
    //     }, {
    //         first: "shang",
    //         last: "hai"
    //     }]));

    // 写法一
    let str1 = 'return ' + '`Hello ${name}!`';
    let func1 = new Function('name', str1);
    console.log(func1('Jack')); // "Hello Jack!"


    // 写法二
    let str2 = '(name) => `Hello ${name}!`';
    let func2 = eval.call(null, str2);
    console.log(func2('Jack')) // "Hello Jack!"

    // alert `123`;
    // // 等同于
    // alert(123);

    let a = 5;
    let b = 10;

    function tag(s, v1, v2) {
        console.log(s[0]);
        console.log(s[1]);
        console.log(s[2]);
        console.log(v1);
        console.log(v2);

        return "OK";
    }
    tag `Hello ${ a + b } world ${ a * b }`;
    // 等同于
    tag(['Hello ', ' world ', ''], 15, 50);

    let total = 30;
    let msg = passthru `The total is ${total} (${total*1.05} with tax)`;

    // function passthru(literals) {
    //     let result = '';
    //     let i = 0;
    //     console.log(arguments[0]);
    //     console.log(arguments[1]);
    //     console.log(arguments[2]);
    //     while (i < literals.length) {
    //         console.log(literals[i]);
    //         result += literals[i++];
    //         console.log(i);
    //         if (i < arguments.length) {
    //             result += arguments[i];
    //         }
    //     }
    //     return result;
    // }

    // function passthru(literals, ...values) {
    //     let output = "";
    //     let index;
    //     for (index = 0; index < values.length; index++) {
    //         output += literals[index] + values[index];
    //     }

    //     output += literals[index]
    //     return output;
    // }

    function passthru(literals, ...values) {
        let output = "";
        for (let i = 0; i < literals.length; i++) {
            if (i > 0) {
                output += values[i - 1];
            }
            output += literals[i];
        }
        return output;
    }
    console.log(msg);

    //let sender = "hehehe";
    let sender = '<script>alert("abc")</script>';
    let message =
        SaferHTML `<p>${sender} has sent you a message.</p>`;

    function SaferHTML(templateData) {
        let s = templateData[0];
        for (let i = 1; i < arguments.length; i++) {
            let arg = String(arguments[i]);

            // Escape special characters in the substitution.
            s += arg.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;");
            //s+=arg;

            // Don't escape special characters in the template.
            s += templateData[i];
        }
        return s;
    }

    $("#lab").html(message);
    //console.log(message);

    console.log `123`;

    function tag2(strings) {
        console.log(strings);
        console.log(strings.raw[0]);
        // strings.raw[0] 为 "First line\\nSecond line"
        // 打印输出 "First line\nSecond line"
    }

    tag2 `First line\nSecond line`;

    console.log(String.raw `Hi\n${2+3}!`); // 返回 "Hi\\n5!"
    console.log(String.raw `Hi\u000A!`);
    console.log(String.raw`Hi\\n`);
    console.log(String.raw({ raw: 'test' }, 0, 1, 2));
    



}