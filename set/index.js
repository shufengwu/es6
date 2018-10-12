window.onload = function () {
    const s = new Set();

    [2, 3, 5, 4, 5, 2, 2].forEach(x => s.add(x));

    for (let i of s) {
        console.log(i);
    }

    // 例一
    const set = new Set([1, 2, 3, 4, 4]);
    console.log([...set]);
    // [1, 2, 3, 4]

    // 例二
    const items = new Set([1, 2, 3, 4, 5, 5, 5, 5]);
    console.log(items.size); // 5

    // 例三
    const set1 = new Set(document.querySelectorAll('div'));
    console.log(set1.size); // 56

    // 类似于
    const set2 = new Set();
    document
        .querySelectorAll('div')
        .forEach(div => set2.add(div));
    console.log(set2.size); // 56

    const a = [
        [1, 2],
        [3, 4]
    ];
    const ws = new WeakSet(a);
    console.log(ws);

    const ws2 = new WeakSet();
    ws2.add([1, 2]);
    ws2.add([3, 4]);
    ws2.add([5, 6]);
    console.log(ws2);

    console.log("");
    
    const ws1 = new WeakSet();
    const obj = {};
    const foo = {};

    ws1.add(window);
    ws1.add(obj);
    console.log(ws1.has(window)); // true
    console.log(ws1.has(obj)); //true
    console.log(ws1.has(foo)); // false
    ws1.delete(window);
    console.log(ws1.has(window)); // false


    
    
}