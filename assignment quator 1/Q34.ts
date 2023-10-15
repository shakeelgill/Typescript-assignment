/*
 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names 
in a array, and then use a for loop to print the name of each pizza.
• Modify your for loop to print a sentence using the name of the pizza instead of 
printing just the name of the pizza. For each pizza you should have one line of output 
containing a simple statement like I like pepperoni pizza
*/

// Define an array of my favorite pizza names
const pizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

// Using a for loop to print the name of each my favorite pizza
console.log("Pizza Names:");
for (let i = 0; i < pizzas.length; i++) {
  console.log(pizzas[i]);
}

// Using a for loop to print a sentence for each pizza
console.log("\nSentences about Pizzas:");
for (let i = 0; i < pizzas.length; i++) {
  console.log(`I like ${pizzas[i]} pizza.`);
}
// print additional sentence
console.log(`\n I realy love pizza`);
