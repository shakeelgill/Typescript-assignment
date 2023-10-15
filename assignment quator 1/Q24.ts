/*
• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests 
evaluate to False.
24. More Conditional Tests: You don’t have to limit the number of tests you create to 
10. If you want to try more comparisons, write more tests. Have at least one True 
and one False result for each of the following:
• Tests for equality and inequality with strings
• Tests using the lower case function
• Numerical tests involving equality and inequality, greater than and less than, greater 
than or equal to, and less than or equal to
• Tests using "and" and "or" operators
• Test whether an item is in a array
• Test whether an item is not in a array
*/
// Test for equality and inequality
const str1: string = "Hello"; 
const str2: string = "hello";
console.log(str1 === str2); //false
console.log(str1 !== str2);// true
// test for lower case function 
const text1: string = "Mr. Adnan";
const text2: string = "mr. adnan";
console.log(text1.toLowerCase() === text2); //true
// Numerical tests equality , inequality, greater than ,less then,
const num1:number = 13;
const num2: number = 7;
console.log(num1 === num2); //false
console.log(num1 !== num2) // true
console.log(num1 < num2); //false
console.log(num1 > num2); // true
console.log(num1 <= num2); // false
console.log(num1 >= num2); //true
// Tests for "And" , "OR" operators
const a: number = 10;
const b: number = 20;
const c: number = 30;
console.log(a > b && b < c); // false
console.log(a < b && b < c); // true
console.log(a > b || b > c); // false
console.log(a < b || b > c); // true
// Test for whether an item is in array
const friends: string[] = ['Touqeer', 'Ali', 'Usman', 'Zeshan'];
console.log(friends.includes('Shakeel')); //false
console.log(friends.includes('Ali')); //true
// Tests for whether item is not in an array
const game: string[] = ['Cricket', 'Bedminton', 'Hokey', 'Wali ball'];
console.log(!game.includes('Cricket')); //false
console.log(!game.includes('Kabadi')); //true