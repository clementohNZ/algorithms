function reverseWords(string) {
    const words = string.split(' ')
    const reversedWords = []
    words.forEach(word => {
        let reversedWord = ''
        for (let index = word.length - 1; index >= 0; index--) {
            let currentCharacter = word[index]
            reversedWord += currentCharacter
        }
        reversedWords.push(reversedWord)
    })
    return reversedWords.join(' ')
}

const result = reverseWords("this is freaking amazing")
console.log(result) // should print D gdfz xviyt
