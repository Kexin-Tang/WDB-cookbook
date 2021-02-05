function fakeRequestCallback(url, success, fail) {
    const time = Math.round(Math.random() * 1000) + 3000;
    setTimeout(() => {
        if (time < 3500) {
            success(`Load ${url} successfully!`);
        }
        else {
            fail("Timeout!")
        }
    }, time);
}

// fakeRequestCallback('myweb.com/s1',
//     function (info) {
//         console.log(info);
//         fakeRequestCallback("myweb.com/s2",
//             function (info) {
//                 console.log(info);
//                 fakeRequestCallback("myweb.com/s3",
//                     function (info) {
//                         console.log(info);
//                         console.log("Finished!");
//                     },
//                     function (info) {
//                         console.log(info);
//                     })
//             },
//             function (info) {
//                 console.log(info);
//             })
//     },
//     function (info) {
//         console.log(info);
//     })

// ----------------------------------------------------
function fakeRequestPromise(url) {
    return new Promise((resolve, reject) => {
        const delay = Math.round(Math.random() * 1000) + 3000;
        setTimeout(() => {
            if (delay < 3500) {
                resolve(`Load ${url} successfully!`);
            }
            else {
                reject("Timeout!");
            }
        }, delay);
    })
}

// fakeRequestPromise("myweb.com/s1")
//     .then(function () {
//         console.log("Load s1 successfully");
//         fakeRequestPromise("myweb.com/s2")
//             .then(function () {
//                 console.log("Load s2 successfully");
//                 fakeRequestPromise("myweb.com/s3")
//                     .then(function () {
//                         console.log("Load s3 successfully");
//                         console.log("Finished!")
//                     })
//                     .catch(function () {
//                         console.log("Error");
//                     });
//             })
//             .catch(function () {
//                 console.log("Error");
//             });
//     })
//     .catch(function () {
//         console.log("Error");
//     });


// ----------------------------------------------------
// fakeRequestPromise("myweb.com/s1")
//     .then(function (info) {
//         console.log(info);
//         return fakeRequestPromise("myweb.com/s2");
//     })
//     .then(function (info) {
//         console.log(info);
//         return fakeRequestPromise("myweb.com/s3");
//     })
//     .then(function (info) {
//         console.log(info);
//     })
//     .catch(function (info) {
//         console.log(info);
//     })

// ----------------------------------------------------
let b = document.querySelector('body');

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            b.style.backgroundColor = color;
            resolve();
        }, delay);
    })
}

async function rainbow() {
    await changeColor('red', 1000);
    await changeColor('orange', 1000);
    await changeColor('yellow', 1000);
    await changeColor('green', 1000);
}