/** Textual markov chain generator */

const { Module } = require("module");

class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    console.log(this.words)
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    let wordBank = {}
    
    for(let index in this.words){
        if(index <= this.words.length){
        let wordKey = this.words[index]
        let wordValue = this.words[(parseInt(index) + 1)]
        if(!wordBank[wordKey]){
          wordBank[String(wordKey)] = [] 
          wordBank[String(wordKey)].push(wordValue)

        } else {

          if(!wordBank[wordKey].includes(wordValue)){
          wordBank[wordKey].push(wordValue)
        }
        }      
      } else {
        break
      }}
    this.wordBank = wordBank
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    
    let randomIndex = Math.floor(Math.random()*this.words.length)
    let randomWord = this.words[randomIndex]
    let text = ""

    for(let index = 0; index <= numWords; index++){
      console.log(index)
      let nextWordIndex = Math.floor(Math.random()*this.wordBank[randomWord].length)
      let nextWord = this.wordBank[randomWord][nextWordIndex]
      if(nextWord==null){
        nextWord = randomWord
        continue
      }
      text += ` ${nextWord}`
      randomWord = nextWord
    }
    return text.trim()
  }
}

module.exports = {
  MarkovMachine: MarkovMachine
}