// CALLBACK FUNCTION
// const getCheese = (callback) => {

//     setTimeout(() => {
//         const cheese = '☻☻';
//         console.log(`this is a ${cheese}`);
//         callback(cheese);
//     }, 2000);

// }
// let makeDough = (cheese, callback) => {
//     setTimeout(() => {
//         const dough = cheese + '♦';
//         console.log('here is the dough' + dough);
//         callback(dough);

//     }, 2000);
// }

// function backPizzza(dough, callback) {
//     setTimeout(() => {
//         const pizza = dough + '♥';
//         console.log('here is the pizza' + pizza);
//         callback(pizza);

//     }, 2000);

// }

// getCheese((cheese) => {
//     makeDough(cheese, (dough) => {
//         backPizzza(dough, (pizza) => {
//             console.log(`i got a pizza${pizza}`);

//         })
//     })
// });

//PROMISES

// const ticket = new Promise((resolve, reject) => {
//     const flight = true;
//     if (flight) {
//         resolve("you are in flight");
//     } else {
//         reject("your flight canceled")
//     }
// });
// ticket.then((data) => {
//     console.log("yes", data)
// }).catch((data) => {
//     console.log("oh no", data);
// }).finally(() => {
//     console.log('i will be executed');
// })

//example

const getCheese = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cheese = "Cheese ♣";

      resolve(cheese);
    }, 2000);
  });
};
let makeDough = (cheese) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dough = cheese + "dough ♦";

      resolve(dough);
      // reject("Bad cheese")
    }, 2000);
  });
};

function backPizzza(dough) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pizza = dough + "pizza ♥";

      resolve(pizza);
    }, 2000);
  });
}

async function orderPizza() {
  try {
    const cheese = await getCheese();
    console.log("here is the " + cheese);
    const dough = await makeDough(cheese);
    console.log("here is " + dough);
    const pizza = await backPizzza(dough);
    console.log("here is my " + pizza);
  } catch (err) {
    console.log("error occure", err);
  }
}
orderPizza();

// getCheese().then((cheese) => {
//     console.log("here is the" + cheese);
//     return makeDough(cheese)
// }).then((dough) => {
//     console.log('here is the dough' + dough);
//     return backPizzza(dough)

// }).then((pizza) => {
//     console.log("here is the " + pizza);
// }).catch((data) => {
//     console.log("error occured", data);
// })
