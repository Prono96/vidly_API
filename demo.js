// // const a = [1,2,3,4]; const b = [1, 1, 2, 4, 3];
// // given the array above remove duplicates from the array, And compare the 2 array and return a boolean match.


// const a = [1, 2, 3, 4];
// const b = [1, 1, 2, 4, 3];

// function uniqueItem(a) { 
//   const set  = new Set(a);
//   return [...set]
// }


// const uniqueItems = items => items.filter((item, index) => items.indexOf(item) === index);
// function areArraysEqual(a, b) {
//   return a.length === b.length && a.every(value => b.includes(value));
// }

// console.log(uniqueItem(b));
// console.log(areArraysEqual(uniqueItems(a), uniqueItems(b)));


// // const result = words.filter(word => word.length > 6);


// // How to write Promise and passing error obj 
// const g = Promise.reject(new Error('I fucked it'))
// g.then(() => console.log('wondeful'));

// 

// function getFavoritePupper() {
//   const pupper = favoritePupper('corgi');

//   // we can only get to the value using the `.then` chain
//   pupper.then((doggo) => {
//     console.log(`My favorite pupper is a ${doggo}.`);
//     //=> My favorite pupper is a corgi.
//   });
// }



// function getFavoritePupperBroken() {
//   // the return value is a Promise, not the value that resolved the Promise
//   const pupper = favoritePupper('corgi');

//   // that means we can’t return the value from this function 😱
//   console.log(`My favorite pupper is a ${pupper}.`);
//   //=> My favorite pupper is a [object Promise].
// }

// getFavoritePupper();


// function doOtherAsyncThing() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve('it’s done!'), 500);
//   });
// }

// // -------------------------------------------------------------------
// // this is the code that actually loads data
// // -------------------------------------------------------------------
// function getData() {
//   fetch('https://dog.ceo/api/breeds/image/random')
//     .then((response) => response.json())
//     .then((response) => {
//       doOtherAsyncThing().then((otherResponse) => {
//         // do stuff with `response` and `otherResponse`
//         console.log({ response, otherResponse });
//       });
//     });
// }

// getData();

async function getData() {
  // using await means the resolved value of the Promise is returned!
  const response = await fetch('https://dog.ceo/api/breeds/image/random').then(
    (response) => response.json(),
  ); // .then still works when it makes sense!

  const otherResponse = await doOtherAsyncThing;

  // do stuff with `response` and `otherResponse`
  console.log({ response, otherResponse });
}

getData();