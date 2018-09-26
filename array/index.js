"use strict";
/**
 * 扩展运算符 ...
 */

console.log(...[1, 2, 3])
// 1 2 3

console.log(1, ...[2, 3, 4], 5)
// 1 2 3 4 5

//用于函数调用
function push(array, ...items) {
    array.push(...items);
}

function add(x, y) {
    return x + y;
}

const numbers = [4, 6];
console.log(add(...numbers)); //10
console.log(numbers.shift()); //4
console.log(numbers); //[6]
console.log(numbers.shift()); //6
console.log(numbers); //[]

//扩展运算符与正常的函数参数可以结合使用
function f(v, w, x, y, z) {
    console.log(arguments);
}
const args = [0, 1];
f(-1, ...args, 2, ...[3]);

//扩展运算符后放置表达式
var x = 1;
const arr = [
    ...(x > 0 ? ['a'] : []),
    'b',
];
console.log(arr);

console.log([...[], 1]);


// 替代函数的 apply 方法 
// ES5 的写法
// function f(x, y, z) {
//     // ...
// }
// var args = [0, 1, 2];
// f.apply(null, args);

// // ES6的写法
// function f(x, y, z) {
//     // ...
// }
// let args = [0, 1, 2];
// f(...args);

// ES5 的写法
console.log(Math.max.apply(null, [14, 3, 77]));
// ES6 的写法
console.log(Math.max(...[14, 3, 77]));
// 等同于
console.log(Math.max(14, 3, 77));

// ES5的 写法
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);
console.log(arr1);


// ES6 的写法
let arr3 = [0, 1, 2];
let arr4 = [3, 4, 5];
arr3.push(...arr4);
console.log(arr3);

// ES5
console.log(new(Date.bind.apply(Date, [null, 2015, 1, 1])));

// ES6
console.log(new Date(...[2015, 1, 1]));

// 扩展运算符的应用
//复制数组
const a1 = [1, 2];
// 写法一
const a2 = [...a1];
console.log(a2);
a2[0] = 2;
console.log(a2);
console.log(a1);

// 写法二
const a3 = [1, 2];
const [...a4] = a3;
console.log(a4);
a4[0] = 2;
console.log(a4);
console.log(a3);

//合并数组
const arr5 = ['a', 'b'];
const arr6 = ['c'];
const arr7 = ['d', 'e'];

// ES5 的合并数组
console.log(arr5.concat(arr6, arr7));
// ES6 的合并数组
console.log([...arr5, ...arr6, ...arr7]);
// [ 'a', 'b', 'c', 'd', 'e' ]

const a5 = [{
    foo: 1
}];
const a6 = [{
    bar: 2
}];

const a7 = a5.concat(a6);
const a8 = [...a5, ...a6];

console.log(a7[0] === a5[0]); // true
console.log(a8[0] === a5[0]); // true

//与解构赋值结合
var list = [1, 2, 3, 4];
var [a, ...rest] = list;
console.log(a);
console.log(rest);

const [first1, ...rest1] = [1, 2, 3, 4, 5];
first1 // 1
rest1 // [2, 3, 4, 5]
console.log(first1);
console.log(rest1);

const [first2, ...rest2] = [];
first2 // undefined
rest2 // []
console.log(first2);
console.log(rest2);

const [first3, ...rest3] = ["foo"];
first3 // "foo"
rest3 // []
console.log(first3);
console.log(rest3);

//字符串
console.log([...'hello']);
//'x\uD83D\uDE80y'.length // 4
//[...'x\uD83D\uDE80y'].length // 3
console.log('x\uD83D\uDE80y'.length);
console.log([...'x\uD83D\uDE80y'].length);

let map = new Map([
    [1, 'one'],
    [2, 'two'],
    [3, 'three'],
]);

let arr9 = [...map.keys()]; // [1, 2, 3]
console.log(arr9);


/**
 * Array.from()
 */

let arrayLike = {
    '0': 3,
    '1': 5,
    '2': 7,
    length: 3
};

// ES5的写法
//var arr1 = [].slice.call(arrayLike); // ['a', 'b', 'c']

// ES6的写法
let arr10 = Array.from(arrayLike);
console.log(arr10);

/** 
 * Array.of()
 */
console.log(Array.of(3, 11, 8)) // [3,11,8]
Array.of(3) // [3]
Array.of(3).length // 1


window.onload = function () {
    console.log("");
    //实现了 Iterator 接口的对象
    let nodeList = document.querySelectorAll("div");
    console.log(nodeList);
    let array = [...nodeList];
    console.log(array);

    // NodeList对象
    let ps = document.querySelectorAll('p');
    console.log(Array.from(ps).filter(p => {
        return p.textContent.length > 10;
    }));

    // arguments对象
    function foo() {
        var args = Array.from(arguments);
        console.log(args);
    }
    foo(1, 2, 3, 4, 5, 6, 7);

    console.log(Array.from('hello'));
    // ['h', 'e', 'l', 'l', 'o']
    let namesSet = new Set(['a', 'b']);
    console.log(Array.from(namesSet)); // ['a', 'b']

    console.log(Array.from({
        length: 3
    }));

    console.log(Array.from(arrayLike, x => x * x));
    // 等同于
    console.log(Array.from(arrayLike).map(x => x * x));

    console.log(Array.from([1, 2, 3], (x) => x * x));


    let spans = document.querySelectorAll('span.name');
    // map()
    let names1 = Array.prototype.map.call(spans, s => s.textContent);
    console.log(names1);

    // Array.from()
    let names2 = Array.from(spans, s => s.textContent)
    console.log(names2);

    console.log(Array.from([1, , 2, , 3], (n) => n || 0));

    function typesOf() {
        return Array.from(arguments, value => typeof value)
    }
    console.log(typesOf(null, [], NaN));

    console.log([].copyWithin.call({
        length: 5,
        3: 1
    }, 0, 3)); // {0: 1, 3: 1, length: 5}
    console.log(Array.from([].copyWithin.call({
        length: 5,
        3: 1
    }, 0, 3)));

    console.log([1, 4, -5, -10].find((n) => n < 0));
    console.log([1, 5, 10, 15].find(function (value, index, arr) {
        return value > 9;
    }));

    function f2(v) {
        return v > this.age;
    }
    let person = {
        name: 'John',
        age: 20
    };
    console.log([10, 12, 26, 15].find(f2, person));
    console.log([NaN].findIndex(y => Object.is(NaN, y)));

    console.log(['a', 'b', 'c'].fill(7));
    console.log(new Array(3).fill(7));

    for (let index of ['a', 'b'].keys()) {
        console.log(index);
    }
    // 0
    // 1

    for (let elem of ['a', 'b'].values()) {
        console.log(elem);
    }
    // 'a'
    // 'b'

    for (let [index, elem] of ['a', 'b'].entries()) {
        console.log(index, elem);
    }
    // 0 "a"
    // 1 "b"

    console.log([, 'a', 'b', , ].length);

}