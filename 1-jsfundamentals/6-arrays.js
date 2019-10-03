

// let s = [['you']];

// console.log(`Hello there ${s[0][0]}`)


// let ms = ['The Autocrat', 'Hello Mister Duffles', 'What About the Lagoon?'];

// ms.forEach(x => console.log(x));

// ms.push('Abjection');

// ms[1] = 'Nitroglycerine and Spirits';




let arr = [1,2,3,4,5];

function reverse (a) {
  if (!(a instanceof Array)) {
    return 'not array';
  }
  let a2 = [];
  for (let x of a) {
    a2.unshift(x);
  }
  return a2;
}

console.log(reverse(arr))



function reverseInPlace (a) {
  

}







