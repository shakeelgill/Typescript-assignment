/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a 
function called make_great() that modifies the array of magicians by adding the 
phrase the Great to each magician’s name. Call show_magicians() to see that the 
list has actually been modified
*/

function make_great1(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
      magicians[i] = `the Great ${magicians[i]}`;
    }
  }
  
  function show_magicians1(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  // Example usage:
  const magicians: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette"];
  make_great(magicians);
  show_magicians1(magicians); // This will display the modified list of magicians
  