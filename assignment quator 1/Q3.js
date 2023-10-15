"use strict";
/*Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase*/
let PersonName1 = "MUHAMMAD SHAKEEL";
let lowercaseName = PersonName1.toLocaleLowerCase();
console.log(lowercaseName);
let uppercaseName = PersonName1.toLocaleUpperCase();
console.log(uppercaseName);
let words = PersonName1.split(" ");
let titlecaseName = "";
for (let i = 0; i < words.length; i++) {
    titlecaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
;
console.log(titlecaseName);
