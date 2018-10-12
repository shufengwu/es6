window.onload = function () {
    const ages = [11, 33, 12, 54, 18, 96];

    // 旧写法
    const youngest1 = Math.min.apply(Math, ages);
    const oldest1 = Math.max.apply(Math, ages);
    const type1 = Object.prototype.toString.call(youngest1);
    console.log(youngest1);
    console.log(oldest1);
    console.log(type1);

    // 新写法
    const youngest2 = Reflect.apply(Math.min, Math, ages);
    const oldest2 = Reflect.apply(Math.max, Math, ages);
    const type2 = Reflect.apply(Object.prototype.toString, youngest2, []);
    console.log(youngest2);
    console.log(oldest2);
    console.log(type2);


    /**
     * 用Proxy和Reflect实现观察者模式
     */
    const queuedObservers = new Set();

    const observe = fn => queuedObservers.add(fn);
    const observable = obj => new Proxy(obj, {
        set
    });

    function set(target, key, value, receiver) {
        const result = Reflect.set(target, key, value, receiver);
        queuedObservers.forEach(observer => observer());
        return result;
    }


    const person = observable({
        name: '张三',
        age: 20
    });

    function print() {
        console.log(`${person.name}, ${person.age}`)
    }

    observe(print);
    console.log(person.name);
    person.name = '李四';
    // 输出
    // 李四, 20
}