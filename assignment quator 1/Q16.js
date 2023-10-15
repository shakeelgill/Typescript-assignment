"use strict";
/* More Guest: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
Start with your program from Exercise 15. Add a print statement to the end of your program informaing people that you found a bigger dinner table.
Add one new guest to the beginning of your array.
Add one new guest to the middle of your array. Use append () to add one new guest to the end of your list. Print a new set of invitation messages,
one for each person in your list*/
let guestList = [
    "Imran Khan", "Ali", "Usman", " Murad Saeed", "Baber Azam"
];
// solution
// informing people that you found a bigger table.
for (let guest of guestList) {
    console.log(`Hellow,${guest}, we found a bigger dinner table.`);
}
// Add a new guest to the beginning of array.
let newGuestAtBegninning = "Usman";
guestList.unshift(newGuestAtBegninning);
// console.log(guestList)
// Add one guest to the middle of array
let newGuestInMiddle = "Muhammad shahzad";
let middleIndex = Math.floor(guestList.length / 2);
guestList.splice(middleIndex, 0, newGuestInMiddle);
// console.log(guestList)
// Use Append() to add new guest to the end of the list.
let newGuestAtEnd = "Muhammad shahzad";
guestList.push(newGuestAtEnd);
// console.log(guestList)
// Print a new set of invitation messages.
console.log("New set of invitation messages:");
for (let guest of guestList) {
    console.log(`Dear ${guest}, you are invited to dinner please join us.`);
}
