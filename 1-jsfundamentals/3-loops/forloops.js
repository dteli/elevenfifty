

// for (let i = 0; i <= 20; i += 2) {
//   console.log(i);
// }

// for (let i = 10; i >= 0; i -= 1) {
//   console.log(i);
// }

// for (let i = 0; i < "Eli".length; i++) {
//   console.log("Eli"[i]);
// }

// for (let i of "Aloysius") {
//   console.log(i);
// }

// let sum = 0;
// for (let i = 1; i <= 50; i++) {
//   sum += i;
// }
// console.log(sum);

// for (let i in {a:1,b:2}) {
//   console.log(i);
// }

function newName(n) {
  let nn = "";
  for (let x in n) {
    if (parseInt(x) === 0) {
      nn += n[0].toUpperCase();
    } else {
      nn += n[x].toLowerCase();
    }
  }
  console.log(nn);
}

newName("aLoYsIuS");
    











