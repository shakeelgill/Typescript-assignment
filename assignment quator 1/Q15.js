"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestList1 = void 0;
/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest wo can’t make it.
• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
• Print a second set of invitation messages, one for each person who is still in your list.*/
let GuestList1 = ["Imran Khan", "Ali", "Usman", " Murad Saeed", "Baber Azam"];
exports.GuestList1 = GuestList1;
//print the name of person who can't make it dinner
let guestwhocantMakeIt = "usman";
console.log(`${guestwhocantMakeIt} can't make it dinner`);
//replace the name of guest who can't make dinner
let newGuest = "Muhammad Shahzad";
let indexOfguestwhocantMakeIt = GuestList1.indexOf(guestwhocantMakeIt);
//console.log(indexOfguestwhocantMakeIt)
if (indexOfguestwhocantMakeIt !== -1) {
    GuestList1[indexOfguestwhocantMakeIt] = newGuest;
}
//console.log(GuestList1[2])
//print second set of invitation message
console.log("Second set of invitation messages");
GuestList1.forEach((guest) => {
    console.log(`Dear ${guest},you are invited to dinner please join us`);
});
