/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of 
independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your 
array. If the fruit is in your array, the if block should print a statement, such as You really 
like bananas!
*/

const favorite_fruits: string[] = ["bananas", "strawberries", "mangoes"];

// Check for specific fruits in the array using if statements
if (favorite_fruits.includes("bananas")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("strawberries")) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes("mangoes")) {
    console.log("You really like mangoes!");
}

if (favorite_fruits.includes("apples")) {
    console.log("You really like apples!");
} else {
    console.log("You don't like apples.");
}

if (favorite_fruits.includes("cherries")) {
    console.log("You really like cherries!");
} else {
    console.log("You don't like cherries.");
}
