"use strict";
/*
25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable
called alien_color and assign it a value of 'green', 'yellow', or 'red'.
• Write an if statement to test whether the alien’s color is green. If it is, print a message
that the player just earned 5 points.
• Write one version of this program that passes the if test and another that fails. (The
version that fails will have no output.)
*/
// part 1
const alien_color = 'green';
if (alien_color === 'green') {
    console.log('Congratulations! You just earned 5 points.');
}
// second part
const alien_color3 = 'blue'; // This version uses 'red' as the alien_color
if (alien_color3 == 'green') {
    console.log('Congratulations! You just earned 5 points.');
}
