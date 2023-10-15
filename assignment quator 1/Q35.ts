/*
Animals: Think of at least three different animals that have a common 
characteristic. Store the names of these animals in a list, and then use a for loop 
to print out the name of each animal. • Modify your program to print a statement 
about each animal, such as A dog would make a great pet. • Add a line at the end 
of your program stating what these animals have in common. You could print a 
sentence such as Any of these animals would make a great pet!*/

// Define a list of three animals
const animals: string[] = ["Dog", "Cat", "Rabbit"];

// Use a for loop to print the name of each animal
console.log("Names of Animals:");
for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// Use a for loop to print a statement about each animal
console.log("\nStatements about Animals:");
for (let i = 0; i < animals.length; i++) {
  switch (animals[i]) {
    case "Dog":
      console.log("A dog would make a great pet.");
      break;
    case "Cat":
      console.log("A cat is a wonderful companion.");
      break;
    case "Rabbit":
      console.log("Rabbits are cute and low-maintenance pets.");
      break;
    default:
      console.log("This animal is not in our list.");
  }
}

// Print a sentence about what these animals have in common
console.log("\nAny of these animals would make a great pet!");
