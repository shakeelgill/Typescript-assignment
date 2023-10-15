/* Unchanged Magicians: Start with your work from Exercise 41. Call the function 
make_great() with a copy of the array of magicians’ names. Because the original 
array will be unchanged, return the new array and store it in a separate array. Call 
show_magicians() with each array to show that you have one array of the original 
names and one array with the Great added to each magician’s name.*/

function make_great(magicians: string[]): string[] {
    // Create a copy of the original array to keep it unchanged
    const modifiedMagicians = [...magicians];

    // Add "the Great" to each magician's name in the copied array
    for (let i = 0; i < modifiedMagicians.length; i++) {
        modifiedMagicians[i] = `the Great ${modifiedMagicians[i]}`;
    }

    // Return the modified array
    return modifiedMagicians;
}

function show_magicians(magicians: string[], label: string): void {
    console.log(label);
    for (const magician of magicians) {
        console.log(magician);
    }
}

// Original array of magicians' names
const magiciansNames: string[] = ["David Copperfield", "Houdini", "Penn Jillette", "Derren Brown", "Harry Blackstone sr."];

// Call make_great with a copy of the original array
const greatMagicians = make_great([...magiciansNames]);

// Display both the original and modified arrays
show_magicians(magiciansNames, "Original Magicians:");
show_magicians(greatMagicians, "Great Magicians:");
