/**
 * This algorithm has a total time complexity in big O notation
 * of O (n + m) because there are 2 linear algorithms operating on
 * 2 different variables. Sometimes this can be simplified to
 * O (n) for short.
 */
function harmlessRansomNote(noteText, magazineText) {
    const noteArray = noteText.split(' '),
        magazineIndex = buildWordIndex(magazineText)
    let noteIsPossible = true

    /**
     * This algorithm (from lines 10-15) has a time complexity of n
     * because it loops through the entire array.
     */
    noteArray.forEach(word => {
        if (magazineIndex[word]) {
            magazineIndex[word]--
            if (magazineIndex[word] < 0) noteIsPossible = false
        }
        else noteIsPossible = false
    })

    return noteIsPossible
}

/**
 * This algorithm has a time complexity of n because it loops through
 * the entire array.
 */
function buildWordIndex(text) {
    const wordArray = text.split(' ')
    const index = {}
    wordArray.forEach(word => {
        if (!index[word]) index[word] = 0
        index[word]++
    })
    return index
}

const desiredNote = 'this is a secret note for you from a secret admirer'
const magazineText = 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited'
const result = harmlessRansomNote(
    desiredNote,
    magazineText
)
console.log(result)
