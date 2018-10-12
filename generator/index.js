window.onload = function () {
    function* helloWorldGenerator() {
        yield 'hello';
        yield 'world';
        return 'ending';
    }

    var hw = helloWorldGenerator();
    console.log(hw.next());
    // { value: 'hello', done: false }
    console.log(hw.next());
    // { value: 'world', done: false }
    console.log(hw.next());
    // { value: 'ending', done: true }
    console.log(hw.next());
    // { value: undefined, done: true }
    console.log("");



    var arr = [1, [
            [2, 3], 4
        ],
        [5, 6]
    ];

    var flat = function* (a) {
        var length = a.length;
        for (var i = 0; i < length; i++) {
            var item = a[i];
            if (typeof item !== 'number') {
                yield* flat(item);
            } else {
                yield item;
            }
        }
    };

    for (var f of flat(arr)) {
        console.log(f);
    }

    function* demo() {
        // console.log('Hello' + yield); // SyntaxError
        // console.log('Hello' + yield 123); // SyntaxError

        console.log('Hello' + (yield)); // OK
        console.log('Hello' + (yield 123)); // OK
    }

    var demo = demo();
    console.log(demo.next());
    // console.log(demo.next());
    // console.log(demo.next());
    // console.log(demo.next());
    // console.log(demo.next());
    console.log("");

    function foo() {
        console.log('foo');
    }

    function* demo1() {
        foo(yield 'a', yield 'b'); // OK
        let input = yield; // OK
    }

    var demo1 = demo1();
    console.log(demo1.next());
    console.log(demo1.next());
    console.log(demo1.next());
    console.log(demo1.next());
    console.log(demo1.next());
    console.log("");


    function* f1() {
        for (var i = 0; true; i++) {
            var reset = yield i;
            if (reset) {
                i = -1;
            }
        }
    }

    var g = f1();

    console.log(g.next()); // { value: 0, done: false }
    console.log(g.next()); // { value: 1, done: false }
    console.log(g.next(true)); // { value: 0, done: false }
    console.log(g.next());
    console.log(g.next());

    var g1 = function* () {
        while (true) {
            try {
                yield;
            } catch (e) {
                if (e != 'a') throw e;
                console.log('内部捕获', e);
            }
        }
    };

    var i = g1();
    i.next();

    try {
        throw new Error('a');
        throw new Error('b');
    } catch (e) {
        console.log('外部捕获', e);
    }
    // 外部捕获 [Error: a]

}