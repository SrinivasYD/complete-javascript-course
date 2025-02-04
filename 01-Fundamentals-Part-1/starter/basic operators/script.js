// Minus operator
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas);

// Multiplication, Division & Exponentiation
console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// Addition operator
const firstName = "Jonas";
const lastName = "Schmedtmann";

console.log(firstName + " " + lastName);

// type of operator
console.log(typeof firstName);

// assignment operator
let x = 10 + 5;
console.log(x);

x += 10;
console.log(x);

x *= 4;
console.log(x);

x++;
console.log(x);

x--;
console.log(x);

// Comparision operators
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

console.log(now - 1991 > now - 2018);

// Operator precedence
let y, z;
y = z = 25 - 10 - 5;
console.log(y, z);

const avgAge = ageJonas + ageSarah / 2; // Without brackets we get different result (ageJonas + ageSarah) / 2
