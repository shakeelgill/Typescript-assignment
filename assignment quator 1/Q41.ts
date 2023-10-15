/*Magicians: Make a array of magician’s names. Pass the array to a function called 
show_magicians(), which prints the name of each magician in the array.*/

function show_magicians2(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  const magicianNames: string[] = ["David Copperfield", "Houdini", "Penn Jillette", "Teller", "Derren Brown", "Harry Blackstone sr."];
  
  show_magicians2(magicianNames);
  