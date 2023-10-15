/*
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty. 
• If the list is empty, print the message We need to find some users!
• Remove all of the usernames from your array, and make sure the correct message is 
printed
*/

// Non-empty case
let UserNames: string[] = ['admin', 'Touqeer', 'Eric', 'adnan'];
function greetUsers(usernames: string[]): void {
    if (usernames.length === 0) {
        console.log('we need to find some users!');
        return;
    }

    for (const username of usernames) {
        if (username.toLocaleLowerCase() === 'admin') {
            console.log('Hello admin, would you like to see a status report?');
        } else {
            console.log(`Hello ${username}, thenk you for loging in again.`);
        }
    }
}
console.log(`For non empty username:\n`)
greetUsers(UserNames);
// Make array empty
UserNames = [];
console.log(`\n\an For empty username:\n`)
greetUsers(UserNames);