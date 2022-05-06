// const a = [1,2,3,4]; const b = [1, 1, 2, 4, 3];
// given the array above remove duplicates from the array, And compare the 2 array and return a boolean match.


const a = [1, 2, 3, 4];
const b = [1, 1, 2, 4, 3];

function uniqueItem(a) { 
  const set  = new Set(a);
  return [...set]
}


const uniqueItems = items => items.filter((item, index) => items.indexOf(item) === index);
function areArraysEqual(a, b) {
  return a.length === b.length && a.every(value => b.includes(value));
}

console.log(uniqueItem(b));
console.log(areArraysEqual(uniqueItems(a), uniqueItems(b)));


// const result = words.filter(word => word.length > 6);


// How to write Promise and passing error obj 
const g = Promise.reject(new Error('I fucked it'))
g.then(() => console.log('wondeful'));



