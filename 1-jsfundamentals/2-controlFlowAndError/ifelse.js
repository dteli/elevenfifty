
let x = "Eli T. Drumm";
let y = "Magilla Gorilla";

function nameFunc (n) {
  if (n === 'Eli T. Drumm') {
    console.log("My name IS " + n);
  } else {
    console.log("My name is NOT " + n);
  }
}

nameFunc(x);
nameFunc(y);





function logName (n) {
  // this is mad overkill
  console.log(n[0].toUpperCase() + n.slice(1).split('').map(x => x.toLowerCase()).join(''))
}

logName('cORnElIus');



function checkAge (n) {
  if (n >= 25) {
    console.log("rent a car");
  } else if (n >= 21) {
    console.log("drink");
  } else if (n >= 18) {
    console.log("vote");
  } else {
    console.log("sorry");
  }
}

checkAge(19);




function dessertMenu (d) {
  switch (d) {
  case 'pie': {
    console.log('pie');
    break;
  }
  case 'cake': {
    console.log('cake');
    break;
  }
  case 'ice cream': {
    console.log('ice cream');
    break;
  }
  default:
    console.log('not on menu');
  } 
}


dessertMenu('cake');
