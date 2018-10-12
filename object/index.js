// const a_mod = require('./mod.js');

window.onload = function () {
    const foo = 'bar';
    const baz = {
        foo
    };
    console.log(baz); // {foo: "bar"}

    // 等同于
    // const baz = {
    //     foo: foo
    // };

    function f(x, y) {
        return {
            x,
            y
        };
    }
    console.log(f(2, 3));

    const o = {
        method() {
            return "Hello!";
        }
    };

    console.log(o.method());

    let birth = '2000/01/01';

    const Person = {

        name: '张三',

        //等同于birth: birth
        birth,

        // 等同于hello: function ()...
        hello() {
            console.log('我的名字是', this.name);
            console.log('我的生日', this.birth);
        }

    };

    Person.hello();

    function getPoint() {
        const x = 1;
        const y = 10;
        return {
            x,
            y
        };
    }

    console.log(getPoint());

    let obj = {};
    obj['a' + 'bc'] = 123;
    console.log(obj.abc);

    let propKey = 'foo';

    let obj2 = {
        [propKey]: true,
        ['a' + 'bc']: 123
    };
    console.log(obj2);

    let lastWord = 'last word';

    const a = {
        'first word': 'hello',
        [lastWord]: 'world'
    };

    console.log(a['first word']);
    console.log(a[lastWord]);
    console.log(a['last word']);
    // "hello"
    // "world"
    // "world"

    let obj3 = {
        ['h' + 'ello']() {
            return 'hi';
        }
    };

    console.log(obj3.hello()); // hi

    // 属性名表达式与简洁表示法，不能同时使用，会报错。
    // const foo = 'bar';
    // const bar = 'abc';
    // const baz = {
    //     [foo]
    // };

    const foo2 = 'bar';
    const baz2 = {
        [foo2]: 'abc'
    };
    console.log(baz2);

    const keyA = {
        a: 1
    };
    const keyB = {
        b: 2
    };

    const myObject = {
        [keyA]: 'valueA',
        [keyB]: 'valueB'
    };

    console.log(myObject);

    const person = {
        sayName() {
            console.log('hello!');
        },
    };

    // "sayName"
    console.log(person.sayName.name);

    const obj4 = {
        get foo() {},
        set foo(x) {}
    };

    //obj.foo4.name
    // TypeError: Cannot read property 'name' of undefined

    const descriptor = Object.getOwnPropertyDescriptor(obj4, 'foo');

    console.log(descriptor.get.name); // "get foo"
    console.log(descriptor.set.name); // "set foo"

    console.log(+0 === -0);
    console.log(NaN === NaN);
    console.log(Object.is(NaN, NaN));
    console.log(Object.is(+0, -0));

    const target = {
        a: 1,
        b: 1
    };

    const source1 = {
        b: 2,
        c: 2
    };
    const source2 = {
        c: 3
    };

    Object.assign(target, source1, source2);
    console.log(target);

    console.log(Object.assign(2));

    const v1 = 'abc';
    const v2 = true;
    const v3 = 10;

    console.log(Object.assign({}, v1, v2, v3));

    // function P() {
    //     this.a = 'nihao';
    //     this.b = 'yes';
    //     this.c = function () {
    //         console.log('1');
    //     }
    // }
    // P.prototype.look = function () {
    //     console.log('2');
    // }
    // var b = new P();
    // for (var i in b) {
    //     console.log(b[i]);
    // }

    console.log(Object.assign([1, 2, 3], [4, 5]));

    let o1 = {
        data_prop: "value",
        get getData_prop() {
            return this.data_prop;
        },

        set setData_prop(value) {
            this.data_prop = value;
        }
    };

    console.log(o1.getData_prop);
    o1.setData_prop = "hehehe";
    console.log(o1.getData_prop);

    class Point {
        constructor(x, y) {
            Object.assign(this, {
                x,
                y
            });
        }
    }

    let point = new Point(3, 8);
    console.log(point.x);
    console.log(point.y);

    function SomeClass() {

    }
    Object.assign(SomeClass.prototype, {
        someMethod(arg1, arg2) {
            console.log(arg1 + " " + arg2);
        },
        anotherMethod() {
            console.log("anotherMethod");

        }
    });

    let someClass = new SomeClass();
    someClass.someMethod(6, 300);
    someClass.anotherMethod();


    let obj5 = {
        a: {
            j: 1
        }
    };
    let obj6 = Object.assign({}, obj5);
    console.log(obj5.a.j);
    console.log(obj6.a.j);
    obj5.a.j = 2;
    console.log(obj5.a.j);
    console.log(obj6.a.j);

    let obj7 = {
        foo: 123
    };
    console.log(Object.getOwnPropertyDescriptor(obj7, 'foo'));

    const obj8 = {
        foo: 123,
        get bar() {
            return 'abc'
        }
    };

    console.log(Object.getOwnPropertyDescriptors(obj8));

    const source3 = {
        set foo(value) {
            console.log(value);
        },
        test() {
            console.log("hehe");
        }
    };

    const target1 = {};
    console.log("测试1");
    console.log(Object.assign(target1, source3));
    console.log(Object.getOwnPropertyDescriptor(target1, 'foo'));
    console.log(Object.getOwnPropertyDescriptor(target1, 'test'));

    const source4 = {
        set foo(value) {
            console.log(value);
        },
        test() {
            console.log("hehe");
        }

    };

    const target2 = {};
    console.log("测试2");
    console.log(Object.defineProperties(target2, Object.getOwnPropertyDescriptors(source4)));
    console.log(Object.getOwnPropertyDescriptor(target2, 'foo'));
    console.log(Object.getOwnPropertyDescriptor(target2, 'test'));


    // let mix = (object) => ({
    //     with: (...mixins) => mixins.reduce(
    //         (c, mixin) => Object.create(
    //             c, Object.getOwnPropertyDescriptors(mixin)
    //         ), object)
    // });

    // // multiple mixins example
    // let a = {
    //     a: 'a'
    // };
    // let b = {
    //     b: 'b'
    // };
    // let c = {
    //     c: 'c'
    // };
    // let d = mix(c).with(a, b);

    // d.c // "c"
    // d.b // "b"
    // d.a // "a"


    const proto = {
        foo: 'hello'
    };

    const obj9 = {
        foo: 'world',
        find() {
            return super.foo;
        }
    };

    Object.setPrototypeOf(obj9, proto);
    console.log(obj9.find()); // "hello"

    let proto1 = {};
    let obj10 = {
        x: 10
    };
    Object.setPrototypeOf(obj10, proto1);

    proto1.y = 20;
    proto1.z = 40;

    console.log(obj10.x); // 10
    console.log(obj10.y); // 20
    console.log(obj10.z); // 40

    const proto2 = {
        foo: 'hello'
    };

    const obj11 = {
        foo: 'world',
        find() {
            return super.foo;
        }
    };

    Object.setPrototypeOf(obj11, proto2);
    console.log(obj11.find()); // "hello"

    const proto3 = {
        x: 'hello',
        foo() {
            console.log(this.x);
        },
    };

    const obj12 = {
        x: 'world',
        foo() {
            super.foo();
        }
    }

    Object.setPrototypeOf(obj12, proto3);

    obj12.foo() // "world"

    var obj13 = {
        foo: 'bar',
        baz: 42
    };
    console.log(Object.keys(obj13));

    let {
        keys,
        values,
        entries
    } = Object;
    let obj14 = {
        a: 1,
        b: 2,
        c: 3
    };

    for (let key of keys(obj14)) {
        console.log(key); // 'a', 'b', 'c'
    }

    for (let value of values(obj14)) {
        console.log(value); // 1, 2, 3
    }

    for (let [key, value] of entries(obj14)) {
        console.log([key, value]); // ['a', 1], ['b', 2], ['c', 3]
    }

    console.log(Object.values('foo'));

    let obj15 = {
        one: 1,
        two: 2
    };
    for (let [k, v] of Object.entries(obj15)) {
        console.log(
            `${JSON.stringify(k)}: ${JSON.stringify(v)}`
        );
    }

    let {
        x,
        y,
        ...z
    } = {
        x: 1,
        y: 2,
        a: 3,
        b: 4
    };
    console.log(x); // 1
    console.log(y); // 2
    console.log(z); // { a: 3, b: 4 }

    const o2 = Object.create({
        x1: 1,
        y1: 2
    });
    o2.z1 = 3;

    let {
        x1,
        ...newObj
    } = o2;
    console.log(newObj);

    let {
        y1,
        z1
    } = newObj;
    console.log(x1); // 1
    console.log(y1); // undefined
    console.log(z1); // 3

    /**
     * Symbol
     */
    console.log('Symbol');
    let s1 = Symbol('foo');
    let s2 = Symbol('bar');

    console.log(s1); // Symbol(foo)
    console.log(s2); // Symbol(bar)

    console.log(s1.toString()); // "Symbol(foo)"
    console.log(s2.toString()); // "Symbol(bar)"

    let mySymbol = Symbol();

    // 第一种写法
    let a1 = {};
    a1[mySymbol] = 'Hello!';
    console.log(a1[mySymbol]);

    //第二种写法
    let a3 = {
        [mySymbol]: 'Hello!'
    };
    console.log(a3[mySymbol]);

    // 第三种写法
    let a4 = {};
    Object.defineProperty(a4, mySymbol, {
        value: 'Hello!'
    });
    console.log(a3[mySymbol]);

    let a5 = {};
    let a6 = {
        [a5]: 123456
    };
    // a6.a5 = 123456;
    // a6[a5] = 123456;
    console.log(a6.a5);
    console.log(a6[a5]);
    console.log(a6['a5']);


    let s3 = Symbol();

    let obj16 = {
        [s3]: function (arg) {
            console.log(arg);

        }
    };

    obj16[s3](123);

    const log = {};

    log.levels = {
        DEBUG: Symbol('debug'),
        INFO: Symbol('info'),
        WARN: Symbol('warn')
    };
    console.log(log.levels.DEBUG, 'debug message');
    console.log(log.levels.INFO, 'info message');

    const shapeType = {
        triangle: Symbol()
    };

    function getArea(shape, options) {
        let area = 0;
        switch (shape) {
            case shapeType.triangle:
                area = .5 * options.width * options.height;
                console.log(area);

                break;
        }
        return area;
    }

    getArea(shapeType.triangle, {
        width: 100,
        height: 100
    });

    const obj17 = {};
    let a7 = Symbol();
    let b7 = Symbol();

    obj17[a7] = 'Hello';
    obj17[b7] = 'World';

    const objectSymbols = Object.getOwnPropertySymbols(obj17);

    console.log(objectSymbols);
    console.log(Object.getOwnPropertyNames(obj17));


    let size = Symbol('size');

    class Collection {
        constructor() {
            this[size] = 0;
        }

        add(item) {
            this[this[size]] = item;
            this[size]++;
        }

        static sizeOf(instanc) {
            return instanc[size];
        }
    }

    let x2 = new Collection();
    console.log(Collection.sizeOf(x2)); // 0

    x2.add('foo');
    console.log(Collection.sizeOf(x2)); // 1

    console.log(x2);


    console.log(Object.keys(x2)); // ['0']
    console.log(Object.getOwnPropertyNames(x2)); // ['0']
    console.log(Object.getOwnPropertySymbols(x2)); // [Symbol(size)]

    let s4 = Symbol.for('foo');
    let s5 = Symbol.for('foo');

    console.log(s4 === s5); // true


    //console.log(a_mod.foo);

    class MyClass {
        [Symbol.hasInstance](foo) {
            return foo instanceof Array;
        }
    }

    console.log([1, 2, 3] instanceof new MyClass()); // true

    let arr1 = ['c', 'd'];
    console.log(['a', 'b'].concat(arr1, 'e', 'f'));

    console.log(arr1[Symbol.isConcatSpreadable]); // undefined

    let arr2 = ['c', 'd'];
    arr2[Symbol.isConcatSpreadable] = false;
    console.log(['a', 'b'].concat(arr2, 'e')); // ['a', 'b', ['c','d'], 'e']

    class A8 extends Array {
        constructor(args) {
            super(args);
            this[Symbol.isConcatSpreadable] = true;
        }
    }
    class A9 extends Array {
        constructor(args) {
            super(args);
        }
        get[Symbol.isConcatSpreadable]() {
            return false;
        }
    }
    let a8 = new A8();
    a8[0] = 3;
    a8[1] = 4;
    let a9 = new A9();
    a9[0] = 5;
    a9[1] = 6;
    console.log([1, 2].concat(a8).concat(a9));
    console.log(a9[Symbol.isConcatSpreadable]);

    let test1 = {
        get age() {
            return 15;
        }
    };
    console.log(test1.age);

    class Even {
        static[Symbol.hasInstance](obj) {
            return Number(obj) % 2 === 0;
        }
    }

    // 等同于
    // const Even = {
    //     [Symbol.hasInstance](obj) {
    //         return Number(obj) % 2 === 0;
    //     }
    // };

    console.log(1 instanceof Even); // false
    console.log(2 instanceof Even); // true
    console.log(12345 instanceof Even); // false

    class MyArray extends Array {}

    const a10 = new MyArray(1, 2, 3);
    const b8 = a10.map(x => x);
    const c8 = a10.filter(x => x > 1);

    console.log(b8 instanceof MyArray) // true
    console.log(c8 instanceof MyArray) // true
    console.log(b8 instanceof Array) // true
    console.log(c8 instanceof Array) // true

    class MyArray2 extends Array {
        static get[Symbol.species]() {
            return Array;
        }
    }

    console.log("");
    const a11 = new MyArray2();
    const b11 = a11.map(x => x);
    console.log(b11 instanceof MyArray2); // false
    console.log(b11 instanceof Array); // true


    // String.prototype.match(regexp)
    // // 等同于
    // regexp[Symbol.match](this)

    class MyMatcher {
        [Symbol.match](string) {
            return 'hello world'.indexOf(string);
        }
    }
    console.log('e'.match(new MyMatcher())); // 1


    const x3 = {};
    x3[Symbol.replace] = (...s6) => console.log(s6);
    'Hello'.replace(x3, 'World'); // ["Hello", "World"]
    console.log(x3);


    var x4 = "Hello 123";
    var x5 = x4.replace('Hello', 'World'); // ["Hello", "World"]
    console.log(x5);

    class MySearch {
        constructor(value) {
                this.value = value;
            }
            [Symbol.search](string) {
                return string.indexOf(this.value);
            }
    }
    console.log('foobar'.search(new MySearch('oob'))); // 0

    

}