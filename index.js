// function scuberGreetingForFeet(){
//   // Write your code here!
// }

// function ternaryCheckCity(){
//   // Write your code here!
// }

// function switchOnCharmFromTip(){
//   // Write your code here!
// }
function scuberGreetingForFeet(feet) {
  let greeting;

  if (feet <= 400) {
    greeting = 'This one is on me!';
  } else if (feet > 2000 && feet <= 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    greeting = 'No can do.';
  }

  return greeting;
}

function ternaryCheckCity(city) {
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  let response;

  switch (tip) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
  }

  return response;
}

console.log(scuberGreetingForFeet(200)); // Output: This one is on me!
console.log(scuberGreetingForFeet(2300)); // Output: I will gladly take your thirty bucks.
console.log(scuberGreetingForFeet(3000)); // Output: No can do.

console.log(ternaryCheckCity('NYC')); // Output: Ok, sounds good.
console.log(ternaryCheckCity('LA')); // Output: No go.

console.log(switchOnCharmFromTip('generous')); // Output: Thank you so much.
console.log(switchOnCharmFromTip('not as generous')); // Output: Thank you.
console.log(switchOnCharmFromTip('average')); // Output: Bye.
