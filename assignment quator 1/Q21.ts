/*  
. They think of something you could store in a TypeScript Object. Write a program 
that creates Objects containing these items
*/
const book = {
    name: "Not Exiting From Pakistan",
    price: 800,
    description: "Knowledge of Pakistan political issue "
}
//  An array of obaject
let books: Array<typeof book> = [];
// we pushing multiple object
books.push(book);
books.push({ name: "Political issue", price: 450, description: " wide Knowledge of Pakistan Politics" })

let book2 = {
    name: "Forigen policy",
    price: 780,
    description: "Knowledge about forigen policy of pakistan"
}
books.push(book2);
// console.log(books);
books.push({ name: "computer science", price: 1450, description: "A C++ book" });
// console.log(books);
function displaybooks(books: Array<typeof book>) {
    for (let i of books){
        console.log(`title: ${i.name}
        description:${i.description}
        price:${i.price}
        _________\n`);
    }
}
displaybooks(books);