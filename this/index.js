console.log(this.document === document); // true
// 在浏览器中，全局对象为 window 对象：
console.log(this === window); // true
this.a = 37;
console.log(window.a); // 37
console.log("");


function f2() {
    "use strict"; // 这里是严格模式
    return this;
}
console.log(f2() === undefined); // true
console.log("");



//1
var o = {
    prop: 37,
    f: function () {
        return this.prop;
    }
};
console.log(o.f()); //37
var a = o.f;
console.log(a()); //undefined
var o = {
    prop: 37
};
function independent() {
    return this.prop;
}
o.f = independent;
console.log(o.f()); // logs 37
//2
o.b = {
    g: independent,
    prop: 42
};
console.log(o.b.g()); // logs 42