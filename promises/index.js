function sleep(seconds=1000) {
    return new Promise((res,rej) => {
        setTimeout(res, seconds)
    })
}
// Code to put operation on sleep function
sleep(2000)
.then(() => console.log('end sleep'))
.catch((e) => console.log('error', e));

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = Promise.resolve(41);
const tasks = [promise1, promise2, promise3]

Promise.all(tasks).then((values) => {
  console.log(values);
});


const promisePolyfill = (tasksArray) => {
    return new Promise((resolve, reject) => {
      const output = [];
      let count = 0; // Change 'const' to 'let' here
      tasksArray.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((data) => {
            output[index] = data;
            count++;
            if (count === tasksArray.length)
            resolve(output);
          })
          .catch((err) => {
            reject(err);
          });
      });
    });
  };

promisePolyfill(tasks)
.then((data) =>  {
    console.log(`the output if ${data}`)
})
.catch(err => {
    console.log(`the error is ${err}`)
})
