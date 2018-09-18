"use strict";
window.onload = function () {
    let [a, b, c] = [1, 2, 3];
    console.log(a);
    console.log(b);
    console.log(c);
    console.log("\n");

    let [foo, [
        [bar], baz
    ]] = [1, [
        [2], 3
    ]];
    console.log(foo);
    console.log(bar);
    console.log(baz);
    console.log("\n");

    let [, , third1] = ["foo", "bar", "baz"];
    console.log(third1);
    console.log("\n");

    let [x, , y] = [1, 2, 3];
    console.log(x);
    console.log(y);
    console.log("\n");

    let [head, ...tail] = [1, 2, 3, 4];
    console.log(head);
    console.log(tail);
    console.log("\n");

    let [x1, y1, ...z1] = ['a'];
    console.log(x1);
    console.log(y1);
    console.log(z1);
    console.log("\n");

    let [foo1] = [];
    console.log(foo1);
    console.log("\n");

    let [bar2, foo2] = [1];
    console.log(bar2);
    console.log(foo2);
    console.log("\n");

    let [x2, y2] = [1, 2, 3];
    console.log(x2);
    console.log(y2);
    console.log("\n");

    let [a1, [b1], d1] = [1, [2, 3], 4];
    console.log(a1);
    console.log(b1);
    console.log(d1);
    console.log("\n");

    // 报错
    // let [foo3] = 1;
    // let [foo4] = false;
    // let [foo5] = NaN;
    // let [foo6] = undefined;
    // let [foo7] = null;
    // let [foo8] = {};

    let [x3, y3, z3] = new Set(['a', 'b', 'c']);
    console.log(x3); // "a"
    console.log(y3);
    console.log("\n");

    function* fibs() {
        let a = 0;
        let b = 1;
        while (true) {
            yield a;
            [a, b] = [b, a + b];
        }
    }

    let [first, second, third, fourth, fifth, sixth] = fibs();
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);
    console.log(fifth);
    console.log(sixth);

    let [foo9 = true] = [];
    console.log(foo9); // true

    let [x4, y4 = 'b'] = ['a']; // x='a', y='b'
    console.log(y4);

    let [x5, y5 = 'b'] = ['a', undefined]; // x='a', y='b'
    console.log(y5);

    function f() {
        console.log('aaa');
    }

    let [x6 = f()] = [];
    console.log(x6);

    let [x7 = 1, y7 = x] = []; // x=1; y=1
    console.log(y7);

    let [x8 = 1, y8 = x8] = [2]; // x=2; y=2
    console.log(y8);

    let [x9 = 1, y9 = x9] = [1, 2]; // x=1; y=2
    console.log(y9);

    let [x10 = y10, y10 = 1] = [10];
    console.log(x10);
    console.log(y10);


    let {
        foo10,
        bar10
    } = {
        foo10: "aaa",
        bar10: "bbb"
    };

    let {
        baz10
    } = {
        foo: "aaa",
        bar: "bbb"
    };
    console.log(foo10); // "aaa"
    console.log(bar10); // "bbb"
    console.log(baz10);

    let {
        foo11: baz11
    } = {
        foo11: 'aaa',
        bar11: 'bbb'
    };
    console.log(baz11);

    let obj = {
        first2: 'hello',
        last: 'world'
    };
    let {
        first2: f2,
        last: l
    } = obj;
    console.log(f2);
    //console.log(first2);

    let obj2 = {
        p: [
            'Hello',
            {
                y11: 'World'
            }
        ]
    };

    let {
        p: [x11, {
            y11
        }]
    } = obj2;
    console.log(x11);
    console.log(y11);


    let obj3 = {
        p: [
            'Hello',
            {
                y12: 'World'
            }
        ]
    };

    let {
        p,
        p: [x12, {
            y12
        }]
    } = obj3;
    console.log(x12);
    console.log(y12);
    console.log(p);

    const node = {
        loc: {
            start: {
                line: 1,
                column: 5
            }
        }
    };

    let {
        loc,
        loc: {
            start
        },
        loc: {
            start: {
                line
            }
        }
    } = node;
    console.log(line);
    console.log(loc);
    console.log(start);

    let obj4 = {};
    let arr4 = [];

    ({
        foo: obj4.prop,
        bar: arr4[0]
    } = {
        foo: 123,
        bar: true
    });
    console.log(obj4);
    console.log(arr4);

    var {
        x13 = 3
    } = {};
    console.log(x13);


    var {
        x14,
        y14 = 5
    } = {
        x14: 1
    };
    console.log(x14);
    console.log(y14);

    var {
        x15: y15 = 3
    } = {};
    console.log(y15);


    var {
        x16: y16 = 3
    } = {
        x16: 5
    };
    console.log(y16);


    var {
        message: msg = 'Something went wrong'
    } = {};
    console.log(msg);

    var {
        x17 = 3
    } = {
        x17: undefined
    };
    console.log(x17);


    var {
        x18 = 3
    } = {
        x18: null
    };
    console.log(x18);


    let {
        foo12
    } = {
        bar: 'baz'
    };
    console.log(foo12);


    // let {foo13: {bar13}} = {baz13: 'baz13'};
    // console.log(bar13);

    let {
        log,
        sin,
        cos
    } = Math;
    console.log(sin(1));
    console.log(cos(1));
    console.log(log(1));

    let arr12 = [1, 2, 3];
    let {
        0: first12,
        [arr12.length - 1]: last12
    } = arr12;
    console.log(first12);
    console.log(last12);

    const [a12, b12, c12, d12, e12] = 'hello';
    console.log(a12);
    console.log(b12);
    console.log(c12);
    console.log(d12);
    console.log(e12);

    let {
        length: len
    } = 'hello111';
    console.log(len);

    let {
        toString: s
    } = 123;
    console.log(s === Number.prototype.toString);

    // s === Number.prototype.toString // true

    let {
        toString: s2
    } = true;
    console.log(s2 === Boolean.prototype.toString);

    function add([x, y]) {
        return x + y;
    }
    console.log(add([1, 2]));

    var res1 = [
        [1, 2],
        [3, 4]
    ].map(([a, b]) => a + b);
    console.log(res1);


    // function move({
    //     x = 0,
    //     y = 0
    // } = {}) {
    //     return [x, y];
    // }

    function move({
        x,
        y
    } = {
        x: 0,
        y: 0
    }) {
        return [x, y];
    }

    var res2 = move({
        x: 3,
        y: 8
    }); // [3, 8]
    console.log(res2);

    var res3 = move({
        x: 3
    }); // [3, 0]
    console.log(res3);

    console.log(move({})); // [0, 0]
    console.log(move()); // [0, 0]
}