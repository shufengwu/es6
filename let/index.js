
var a3 = 1;
let b2 = 1;
window.onload = function () {
    {
        var a = 10;
        let b = 1;
    }

    console.log(a);
    //console.log(b);

    // for (var i = 0; i < 100; i++) {
    //     // ...
    // }

    //console.log(i);

    var a = [];
    for (var i = 0; i < 10; i++) {
        a[i] = function () {
            console.log(i);
        };
    }
    a[4]();
    a[6]();

    var b = [];
    for (let j = 0; j < 10; j++) {
        b[j] = function () {
            console.log(j);
        };
    }
    b[6]();

    for (let k = 0; k < 3; k++) {
        let k = 'abc';
        console.log(k);
    }

    // var 的情况
    console.log(foo); // 输出undefined
    var foo = 2;

    // let 的情况
    // console.log(bar); // 报错ReferenceError
    // let bar = 2;

    // var tmp = 123;
    // if (true) {
    //     tmp = 'abc'; // ReferenceError
    //     let tmp;
    // }
    // console.log(tmp);

    var tmp2 = new Date();

    function f() {
        console.log(tmp2);
        if (false) {
            var tmp2 = 'hello world';
        }
    }

    f();


    function f1() {
        let n = 5;
        if (true) {
            //let n = 10;
            console.log(n);

        }
        console.log(n); // 5
    }

    f1();

    // 情况一
    if (true) {
        function f2() { }
    }

    // 情况二
    try {
        function f3() { }
    } catch (e) {
        // ...
    }

    console.log("----------------------函数声明-------------------------");

    function f4() {
        console.log('I am outside!');
    }

    (function () {
        if (false) {
            // 重复声明一次函数f
            function f4() {
                console.log('I am inside!');
            }
        }
        
        f4();
    }());

    // (function () {
    //     function f4() { console.log('I am inside!'); }
    //     if (false) {
    //     }
    //     f4();
    // }());

    // function func() {
    //     var a = 1;
    //     let a = 10;
    // }
    // func();

    // const PI = 3.1415;
    // PI // 3.1415
    // PI = 3;

    //const foo;

    // if (true) {
    //     const MAX = 5;
    // }
    // console.log(MAX);

    // if (true) {
    //     const MAX = 5;
    // }
    // console.log(MAX);

    //var message = "Hello!";
    //let age = 25;
    // 以下两行都会报错
    // const message = "Goodbye!";
    // const age = 30;

    const foo2 = {};
    // 为 foo2 添加一个属性，可以成功
    foo2.prop = 123;
    console.log(foo2.prop);
    // 将 foo2 指向另一个对象，就会报错
    //foo2 = {}; // TypeError: "foo" is read-only


    const a2 = [];
    a2.push('Hello'); // 可执行
    console.log(a2.length); // 可执行
    //a2 = ['Dave']; // 报错

    const foo3 = Object.freeze({});
    // 常规模式时，下面一行不起作用；
    // 严格模式时，该行会报错
    //foo3.prop = 3;

    const foo4 = {
        name: 'wsf',
        age: 20,
        other: {
            prop: "hehe"
        }
    };
    var constantize = (obj) => {
        Object.freeze(obj);
        Object.keys(obj).forEach((key, i) => {
            console.log(key + ' ' + i);
            if (typeof obj[key] === 'object') {
                console.log(key + ' ' + i);
                constantize(obj[key]);
            }
        });
    };
    constantize(foo4);
    //foo4.name = 'sfw';
    console.log(foo4);


    // 如果在 Node 的 REPL 环境，可以写成 global.a
    // 或者采用通用方法，写成 this.a
    console.log(window.a3); // 1
    console.log(window.b2); // undefined

    // function bar(x = y, y = 2) {
    //     return [x, y];
    //   }

    //   bar(); // 报错

    console.log("----------------死区----------------");
    console.log(typeof y);
    let x;
    x = x;

    function f() { console.log('I am outside!'); }





}