




// function XO(str) {
// 	let xs = 0; let ys = 0;
// 	for (i of str) {
// 		if (i === 'x' || i === 'X') {
// 			xs++;
// 		} else if (i === 'o' || i === 'O') {
// 			ys++;
// 		}
// 	}
// 	return xs === ys;
// }

// console.log(XO('o'));




function doubleLetters(word) {
  for (let i in word) {
    if (word[parseInt(i)] === word[parseInt(i)+1]) {
      console.log(word[i], word[i+1]);
      return true;
    }
  }
  return false;
}

console.log(doubleLetters('mommy'));
