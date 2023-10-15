/*
22. Intentional Error: If you haven’t received an array index error in one of your 
programs yet, try to make one happen. Change an index in one of your programs 
to produce an index error. Make sure you correct the error before closing the 
program.
*/

function createBook(name: string, Autor: string, topic: string) {
    return {
        name,
        Autor,
        topic,
    };
}
const Books = [
    createBook("Pakistan beyond the crisis state", "Maliha Lodhi", "Pakistan Affairs"),
    createBook("Trek to pakistan", "Shamshad Ahmad", "Current Affairs"),
    createBook("English Grammar & composition", "Mian Shafique", "English grammar"),
    createBook("Genral science & ability", "Mian Shafique", "Genral science & ability")
];
//Accessing invalid index
 const invalidIndex = 8; // array consist of only 4 elements, it will cause an error

console.log(`Book at index ${invalidIndex}:`, Books[invalidIndex]);

Books.forEach((Book) => {
    console.log(`Name: ${Book.name}, Author: ${Book.Autor}, topic: ${Book.topic}`);
});