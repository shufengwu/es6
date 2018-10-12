var arr = [1];
console.log(arr.reduce(function (x, y) {
    return x + y;
}, 5)); // 25

var pipe = (function () {
    return function (value) {
        var funcStack = [];
        var oproxy = new Proxy({}, {
            get: function (pipeObject, fnName) {
                if (fnName === 'get') {
                    return funcStack.reduce(function (val, fn) {
                        return fn(val);
                    }, value);
                }
                funcStack.push(window[fnName]);
                return oproxy;
            }
        });

        return oproxy;
    }
}());

var double = n => n * 2;
var pow = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;

console.log(pipe(3).double.pow.reverseInt.get); // 63

window.onload = function () {
    let obj = {
        time: 0,
        name: 0,
        title: 0
    };
    var proxy = new Proxy(obj, {
        get: function (target, property) {
            if (property === 'time') {
                return 60;
            }
            return target[property];
        }
    });

    console.log(obj.time);
    console.log(obj.name);
    console.log(obj.title);

    console.log(proxy.time); // 35
    console.log(proxy.name); // 35
    console.log(proxy.title); // 35

    var handler = {
        get: function (target, name) {
            if (name === 'prototype') {
                return Object.prototype;
            }
            return 'Hello, ' + name;
        },

        apply: function (target, thisBinding, args) {
            return args[0];
        },

        construct: function (target, args) {
            return {
                value: args[1]
            };
        }
    };

    var fproxy = new Proxy(function (x, y) {
        return x + y;
    }, handler);

    console.log(fproxy(1, 2)); // 1
    console.log(new fproxy(1, 2)); // {value: 2}
    console.log(fproxy.prototype === Object.prototype); // true
    console.log(fproxy.foo === "Hello, foo"); // true

    function createArray(...elements) {
        let handler = {
            get(target, propKey, receiver) {
                let index = Number(propKey);
                if (index < 0) {
                    propKey = String(target.length + index);
                }
                return Reflect.get(target, propKey, receiver);
            }
        };

        let target = [];
        target.push(...elements);
        return new Proxy(target, handler);
    }

    let arr = createArray('a', 'b', 'c');
    console.log(arr[-1]); // c
    console.log(arr);


    const dom = new Proxy({}, {
        get(target, property) {
            return function (attrs = {}, ...children) {
                const el = document.createElement(property);
                for (let prop of Object.keys(attrs)) {
                    el.setAttribute(prop, attrs[prop]);
                }
                for (let child of children) {
                    if (typeof child === 'string') {
                        child = document.createTextNode(child);
                    }
                    el.appendChild(child);
                }
                return el;
            }
        }
    });

    const el = dom.div({},
        'Hello, my name is ',
        dom.a({
            href: '//example.com'
        }, 'Mark'),
        '. I like:',
        dom.ul({},
            dom.li({}, 'The web'),
            dom.li({}, 'Food'),
            dom.li({}, '…actually that\'s it')
        )
    );

    document.body.appendChild(el);

    var p = new Proxy(function () {}, {
        construct: function (target, args) {
            console.log('called: ' + args.join(', '));
            return {
                value: args[0] * 10
            };
        }
    });

    console.log((new p(1, 2, 3, 4)).value);

    const _name = new WeakMap();

    class Person {
        constructor(name) {
            _name.set(this, name);
        }
        get name() {
            return _name.get(this);
        }
    }

    const jane = new Person('Jane');
    console.log(jane.name); // 'Jane'

    const proxy1 = new Proxy(jane, {});
    console.log(proxy1.name); // undefined

    const target = new Date('2015-01-01');
    const handler1 = {
        get(target, prop) {
            // if (prop === 'getDate') {
            //     return target;
            // }
            if (prop === 'getDate') {
                return target.getDate.bind(target);
            }
            return Reflect.get(target, prop);
        }
    };
    const proxy2 = new Proxy(target, handler1);

    console.log(proxy2.getDate()); // 1


}