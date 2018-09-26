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
    
    

}