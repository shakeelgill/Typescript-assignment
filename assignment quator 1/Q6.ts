/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping te white spaces*/
let PersonName2:string= "\tMuhammad Shakeel\n";
console.log("Name with white space",PersonName2)
let strippedName:string=PersonName2.trim()
console.log("stripped name:",strippedName)