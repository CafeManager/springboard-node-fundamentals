/** Command-line tool to generate Markov text. */

const fs = require('fs')
const  markov  = require('./markov')
const MarkovMachine = markov.MarkovMachine

let type = process.argv[1];
let input = process.argv[2];
console.log(input)
let inputText = fs.readFile(input, 'utf8', function(err, data){
    if (err) {
        console.log(err)
        process.kill(1)
    }
    let test = new MarkovMachine(data)
    words = test.makeText()
    console.log(words)

    return data    
}) 

// console.log(inputText)
// let test = new MarkovMachine(inputText)
// console.log(test.wordBank)
 