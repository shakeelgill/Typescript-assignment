"use strict";
/*
. Seeing the World: Think of at least five places in the world you’d like to visit.
• Store the locations in a array. Make sure the array is not in alphabetical order.
• Print your array in its original order.
• Print your array in alphabetical order without modifying the actual list.
• Show that your array is still in its original order by printing it.
• Print your array in reverse alphabetical order without changing the order of the
original list.
• Show that your array is still in its original order by printing it again.
• Reverse the order of your list. Print the array to show that its order has changed.
• Reverse the order of your list again. Print the list to show it’s back to its original order.
• Sort your array so it’s stored in alphabetical order. Print the array to show that its order
has been changed.
• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to
show that its order has changed.*/
// Create an array to store traval dastination.
let travalDestinations = ["Islamabad", "Karachi", "Madina", "Poland", "Sialkot"];
// Print your array in original order.
console.log("origional order:");
console.log(travalDestinations);
// Print your array in alphabetical order without modifying the actual list.
console.log("\n alphabetical order without modifying the actual list");
console.log([...travalDestinations].sort());
// Show that your array is still in its origional order by printing it again.
console.log("showing array is still in its origional order");
console.log(travalDestinations);
// Print your array in reverse alphabatically order without changing the order of the origional list.
console.log("\n Reverse alphabetical order without modifying the actual list");
console.log([...travalDestinations].sort().reverse());
// Show that your array in its origional order by printing it again.
console.log("showing array is still in its origional order");
console.log(travalDestinations);
//Reverse the order of your list.Print the array to show that its order has changed.
console.log("\n Reverse order");
travalDestinations.reverse();
console.log(travalDestinations);
// Reverse the order of your list again. Print the  list to show its back to its origional order.
console.log("\n Back to origional order");
travalDestinations.reverse();
console.log(travalDestinations);
// Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.
console.log("\nChange to Alphabetical order");
travalDestinations.sort();
console.log(travalDestinations);
// Sort to change your array so it's stored in reverse Alphabetial order. Print the list to show that its order has changed.
console.log("\nChange to Reverse Alphabetical order");
travalDestinations.sort().reverse();
console.log(travalDestinations);
