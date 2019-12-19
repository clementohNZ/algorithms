function isPalindrome(string) {
    const sanitizedCharacters = removeCasePunctuationAndSpaces(string)
    return sanitizedCharacters.join('') === sanitizedCharacters.reverse().join('')
}

function removeCasePunctuationAndSpaces(string) {
    string = string.toLowerCase()
    const charactersArray = string.split('')
    const validCharacters = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
    const lettersArray = []
    charactersArray.forEach(character => {
        if (validCharacters.indexOf(character) > -1) lettersArray.push(character)
    })
    return lettersArray
}

const result = isPalindrome("Madam I'm Adam")
console.log(result)
