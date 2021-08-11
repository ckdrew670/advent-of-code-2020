/*
Question

To try to debug the problem, they have created a list (your puzzle input) of passwords (according to the corrupted database) and the corporate policy when that password was set.

For example, suppose you have the following list:

1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies?

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

    // get the highest and lowest numbers in the range
    let range = objFromArr.number.split("-");
    let lowestNum = range[0];
    let highestNum = range[1];

    // search the text for the given letter
    let textArr = [...objFromArr.text];
    let filteredTextArr = textArr.filter((val) => val === objFromArr.letter);

    // count the number of times the letter is used
    return filteredTextArr.length >= lowestNum && filteredTextArr.length <= highestNum ? counter += 1 : counter;
})


let answer = counter
console.log(answer);