function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        const image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
    });
}

window.onload = function () {
    let img1 = document.getElementById('img1');
    let div1 = document.getElementById('div1');

    function timeout(ms) {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, ms, 'done');
        });
    }

    timeout(10).then((value) => {
        console.log(value);
        console.log("");
    });
    console.log('测试1');
    console.log('测试2');
    console.log('测试3');

    loadImageAsync('https://www.baidu.com/img/bd_logo1.png').then((value) => {
        img1.src = value.src;
        div1.appendChild(value);
    });



    const p1 = new Promise(function (resolve, reject) {
        // setTimeout(() => reject(new Error('fail')), 3000);
        setTimeout(() => resolve('success'), 3000);
    });

    const p2 = new Promise(function (resolve, reject) {
        setTimeout(() => resolve(p1), 1000)
    });

    p2.then(result => console.log('成功 ' + result)).catch(error => console.log('失败 ' + error));
    // p2.then(value => console.log(value), (error) => console.log(error)).catch(error => console.log('失败 ' + error));

    const someAsyncThing = function () {
        return new Promise(function (resolve, reject) {
            // 下面一行会报错，因为x没有声明
            resolve(x + 2);
        });
    };

    someAsyncThing()
        .catch(function (error) {
            console.log('oh no', error);
        }).then(function () {
            console.log('carry on1');
        }).then(function () {
            console.log('carry on2');
        }).then(function () {
            console.log('carry on3');
        });

    const someAsyncThing1 = function () {
        return new Promise(function (resolve, reject) {
            // 下面一行会报错，因为x没有声明
            resolve(x + 2);
        });
    };

    someAsyncThing1().then(function () {
        console.log("someAsyncThing1 success1");
        //return someOtherAsyncThing();
    }).catch(function (error) {
        console.log('oh no', error);
        // 下面一行会报错，因为 y 没有声明
        y + 2;
    }).catch(function (error) {
        console.log("someAsyncThing1 " + error);
    });

    new Promise((resolve, reject) => {
        resolve(1);
    }).then(function (json) {
        console.log("-----------------1");
        console.log(json);
        return 2;
    }).then(function (post) {
        console.log("-----------------2");
        console.log(post);

    });
}