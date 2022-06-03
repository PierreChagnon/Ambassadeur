import pickOneWord from "./pickOneWord";
import shuffleArray from "./shuffleArray";

export default function(list, currentWord) {
    const wordArray = ["", "", ""]

    for (let i = 0; i < wordArray.length; i++) {
        let word = pickOneWord();
        while (list.includes(word) || wordArray.includes(word)) {
            word = pickOneWord();
            if (list.includes(word) === false) {
                break;
            }
        }
        wordArray[i] = word
    }

    wordArray.push(currentWord)

    const shuffledArray = shuffleArray(wordArray)

    return shuffledArray
}