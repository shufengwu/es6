window.onload = function () {
    const m = new Map();
    const o = {
        p: 'Hello World'
    };
    m.set(o, 'content')
    console.log(m.get(o)); // "content"
    console.log(m.has(o)); // true
    m.delete(o) // true
    console.log(m.has(o)); // false


    console.log("");
    const map = new Map([
        ['name', '张三'],
        ['title', 'Author']
    ]);
    console.log(map.size); // 2
    console.log(map.has('name')); // true
    console.log(map.get('name')); // "张三"
    console.log(map.has('title')); // true
    console.log(map.get('title')); // "Author"

    const map0 = new Map()
        .set(1, 'a')
        .set(2, 'b')
        .set(3, 'c');

    const map1 = new Map(
        [...map0].filter(([k, v]) => k < 3)
    );
    console.log(map1);

    // 产生 Map 结构 {1 => 'a', 2 => 'b'}

    const map2 = new Map(
        [...map0].map(([k, v]) => [k * 2, '_' + v])
    );
    console.log(map2);

    const myMap = new Map()
        .set(true, 7)
        .set({
            foo: 3
        }, ['abc']);
    console.log([...myMap]);

    console.log(new Map([
        [true, 7],
        [{
                foo: 3
            },
            ['abc']
        ]
    ]));

    function strMapToObj(strMap) {
        let obj = {};
        for (let [k, v] of strMap) {
            obj[k] = v;
        }
        return obj;
    }

    const myMap1 = new Map()
        .set('yes', true)
        .set('no', false);
    console.log(strMapToObj(myMap1));

    

}