//Insérez ici les exercices 2.1 à 2.4

function root(a) {
  return a * a;
}
console.log(root(2));
console.log(root(4));
console.log(root(8));
console.log(root(16));

function modulo(a) {
  return a % 2;
}
console.log(modulo(3));
console.log(modulo(178));
console.log(modulo(65));
console.log(modulo(98));
console.log(modulo(123));
function percentOff(a, b) {
  return (a * b) / 100;
}
console.log(percentOff(79.99, 19));

// Insérez ici les exercices 2.4 à 2.8 en utilisant les variables déjà créées à votre disposition

let firstNumber = 3; // Anciennement 9
let secondNumber = 11; // Anciennement 8
let thirdNumber = 12; // Anciennement 4
let fourthNumber = 9; // Anciennement 12

function dividePerThree(a) {
  return a / 3;
}
console.log(dividePerThree(firstNumber));

function add(a, b) {
  return a + b;
}
console.log(add(firstNumber, secondNumber));

function multiply(a, b) {
  return a * b;
}
console.log(multiply(firstNumber, thirdNumber));

function substract(a, b) {
  return a - b;
}

console.log(substract(fourthNumber, firstNumber));

// Exercice incrémentation
function incrementOnClick() {
  document
    .getElementById('increment')
    .addEventListener('click', function decrement(decrementCounter) {
      console.log(decrementCounter);
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
      let incrementCounter = 0;
      console.log('Incrémentez');
    });
}
// Exercice incrémentation
function decrementOnClick() {
  document
    .getElementById('decrement')
    .addEventListener('click', function increment(incrementCounter) {
      console.log(incrementCounter);
      // Insérez ici le bout de code nécessaire à la réalisation de l'exercice sur la décrémentation, nous verrons plus tard à quoi ces lignes pré-existantes correspondent
      let decrementCounter = 100;
      console.log('Décrémentez');
    });
}
