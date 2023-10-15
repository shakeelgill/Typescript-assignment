/* Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner*/
let GuestList:Array<string>=["Imran Khan","Ali", "Usman", " Murad Saeed", "Baber Azam"];
GuestList.forEach((guestName)=> {
console.log(`Dear ${guestName}, you are invited to dinner please join us`)
})
