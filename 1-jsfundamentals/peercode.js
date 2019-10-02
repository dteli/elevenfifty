


let x = 30;

function checkType (y) {
  switch (typeof y) {
  case 'number':
    console.log("number");
    break;
  case 'string':
    console.log("string");
    break;
  case 'boolean':
    console.log("boolean");
    break;
  default:
    console.log("different type");
  }
}

checkType(30);
checkType('the');
checkType(false);
checkType([]);



