import { add, sub, product, divide, powerOf } from "./math.js";
import { calculateArea } from "./area.js";
const a = 5;
const b = 6;

console.log(add(a, b));
console.log(sub(a, b));
console.log(product(a, b));
console.log(divide(a, b));
console.log(powerOf(a, b));

// Calculating the area
console.log("The area is as below.");
console.log(calculateArea(a, b));
