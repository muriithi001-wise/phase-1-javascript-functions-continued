// code your solution here
function saturdayFun(activity = 'roller-skate') {
  return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun()); // Output: "This Saturday, I want to roller-skate!"
console.log(saturdayFun('bathe my dog')); 

function mondayWork(activity='go to the office'){
    return `This Monday, I will ${activity}.`;
}
console.log(mondayWork());
console.log(mondayWork('work from home'));

function wrapAdjective(highlight = '*') {
  return function(adjective) {
    return `You are ${highlight}${adjective}${highlight}!`;
  };
}

// Test case 1
let result1 = wrapAdjective('*');
let emphatic1 = result1("a hard worker");
console.log(emphatic1); // Output: "You are *a hard worker*!"
console.log(emphatic1 === "You are *a hard worker*!"); // true

// Test case 2
let result2 = wrapAdjective('||');
let emphatic2 = result2("a dedicated programmer");
console.log(emphatic2); // Output: "You are ||a dedicated programmer||!"
console.log(emphatic2 === "You are ||a dedicated programmer||!"); // true
