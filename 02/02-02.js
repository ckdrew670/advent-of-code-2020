/*
Question

The shopkeeper suddenly realizes that he just accidentally explained the password policy rules from his old job at the sled rental place down the street! The Official Toboggan Corporate Policy actually works a little differently.

Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

Given the same example list from above:

1-3 a: abcde is valid: position 1 contains a and position 3 does not.
1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.
How many passwords are valid according to the new interpretation of the policies?
*/


// Fetch data from text file as array
let fs = require("fs");
let data = fs.readFileSync("./input.txt").toString('utf-8');
let dataArr = data.split("\n");

let counter = 0;

dataArr.map((val) => {
    // create an object out of each entry
    let arrValues = val.split(" ");
    let objFromArr = {
        number: arrValues[0],
        letter: arrValues[1].slice(0, -1),
        text: arrValues[2],
    }

    // get the position numbers
    let range = objFromArr.number.split("-");
    let positionOne = range[0];
    let positionTwo = range[1];

    // find the positions of the given letter in the text array
    let textArr = [...objFromArr.text];
    
    
    // create a list of all the positions where that letter appears in the string
   
    let positions = textArr.map((val, i) => {
        return val === objFromArr.letter ? i + 1 : null;
    })
    
    let comparedPositions = positions.filter(position => {
       return position === +positionOne || position === +positionTwo
    })
    comparedPositions.length === 1 ? counter += 1 : counter
})



let answer = counter
console.log(answer);