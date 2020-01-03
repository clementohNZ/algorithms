/**
 * Encrypts/scrambles a string using a basic Caesar cipher.
 * 
 * A Caesar Ciper will scramble some text by substituting the current character (excluding punctuation)
 * for another letter that is x spaces away from the current letter in the standard order for
 * the alphabet.
 * 
 * @param string the string that needs to be "encrypted"
 * @param positionShift use the character x spaces to the left (if negative) or right (if positive)
 * as the replacement for the original character in the string.
 */
function caesarCipher(string, positionShift) {
    // if a number greater than 26 is provided, we don't want to
    // keep looping through the alphabet say... 500 times. Dividing
    // by 26 will achieve the same effect without looping through the
    // characters 500 times to get to the replacement letter.
    positionShift = positionShift % 26
    const lowercaseString = string.toLowerCase()
    const alphabet = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ]
    let encryptedString = ''
    lowercaseString.split('').forEach((currentLetter, index) => {
        if (currentLetter === ' ') {
            encryptedString += currentLetter
            return
        }
        let currentIndex = alphabet.indexOf(currentLetter)
        let newIndex = currentIndex + positionShift
        // if position shifting goes beyond the current index of the alphabet,
        // loop around and continue
        if (newIndex > 25) newIndex = newIndex - 26
        if (newIndex < 0) newIndex = 26 + newIndex
        // if letter was originally upper case, preserve that case
        if (string[index] === string[index].toUpperCase()) {
            encryptedString += alphabet[newIndex].toUpperCase()
        }
        else encryptedString += alphabet[newIndex]
    })
    return encryptedString
}

const result = caesarCipher("I like candy", -5)
console.log(result) // should print D gdfz xviyt
