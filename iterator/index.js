window.onload = function () {
    const arr = ['red', 'green', 'blue'];

    for (let v of arr) {
        console.log(v); // red green blue
    }

    const obj = {
        [Symbol.iterator]: arr[Symbol.iterator]
    };
    obj[Symbol.iterator] = arr[Symbol.iterator].bind(arr);

    for (let v of obj) {
        console.log(v); // red green blue
    }

    var engines = new Set(["Gecko", "Trident", "Webkit", "Webkit"]);
    for (var e of engines) {
        console.log(e);
    }

    var es6 = new Map();
    es6.set("edition", 6);
    es6.set("committee", "TC39");
    es6.set("standard", "ECMA-262");
    for (var [name, value] of es6) {
        console.log(name + ": " + value);
    }

    // 字符串
    let str = "hello";

    for (let s of str) {
        console.log(s); // h e l l o
    }

    // DOM NodeList对象
    let paras = document.querySelectorAll("p");

    for (let p of paras) {
        p.classList.add("test");
    }

    // arguments对象
    function printArgs() {
        for (let x of arguments) {
            console.log(x);
        }
    }
    printArgs('a', 'b');
    // 'a'
    // 'b'

    


    
}