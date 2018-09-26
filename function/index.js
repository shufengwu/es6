var id = 21;
var x = 11;

function wsf() {
    console.log("测试");

}

let fn = () => void wsf();

function foo1() {
    setTimeout(() => {
        console.log('id:', this.id);
    }, 100);
}

function foo2() {
    setTimeout(function () {
        console.log('id:', this.id);
    }, 100);
}

var x = 11;
var obj1 = {
    x: 22,
    say: function () {
        console.log(this.x)
    }
}

var obj2 = {
    x: 22,
    y: this, //window
    say: () => {
        console.log(this.x);
    }
}

function Timer() {
    this.s1 = 0;
    this.s2 = 0;
    // 箭头函数
    setInterval(() => this.s1++, 1000);
    // 普通函数
    setInterval(function () {
        this.s2++;
    }, 1000);
}

var handler = {
    id: '123456',

    init: function () {
        document.addEventListener('click',
            event => this.doSomething(event.type), false);
    },

    doSomething: function (type) {
        console.log('Handling ' + type + ' for ' + this.id);
    }
};

window.onload = function () {
    // fn();

    // foo1.call({
    //     id: 42
    // });

    // foo2.call({
    //     id: 42
    // });

    // obj1.say();
    // obj2.say();

    // var timer = new Timer();

    // setTimeout(() => console.log('s1: ', timer.s1), 3100);
    // setTimeout(() => console.log('s2: ', timer.s2), 3100);

    // handler.init();


    function tco(f) {
        var value;
        var active = false;
        var accumulated = [];

        return function accumulator() {
            accumulated.push(arguments);
            if (!active) {
                active = true;
                while (accumulated.length) {
                    var arr = accumulated.shift();
                    value = f.apply(this, arr);
                }
                active = false;
                return value;
            }
        };
    }

    var sum = tco(function (x, y) {
        if (y > 0) {
            return sum(x + 1, y - 1)
        } else {
            return x
        }
    });

    console.log(sum(1, 10));
    
    
}