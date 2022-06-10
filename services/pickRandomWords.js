import data from "../data/data.json";
import expressions from "../data/expressions.json"
import objets from "../data/objets.json"
import personnes from "../data/personnes.json"
import titres from "../data/titres.json"

export default (numberOfWords) => {
    const topics = [expressions, objets, personnes, titres]

    const recette_10 = [1, 1, 1, 2, 1, 2, 1, 1]
    const recette_15 = [2, 1, 2, 2, 2, 2, 2, 2]
    const recette_20 = [3, 2, 2, 3, 2, 3, 3, 2]
    const recette_25 = [4, 3, 2, 4, 3, 4, 3, 2]

    let recette

    switch (numberOfWords) {
        case 10:
            recette = recette_10
            break;
        case 15:
            recette = recette_15
            break;
        case 20:
            recette = recette_20
            break;
        case 25:
            recette = recette_25
            break;
        default:
            break;
    }

    let finalList = []

    topics.forEach((topic, i) => {
        const frequence = recette[i]
        let indexList = []

        for (let i = 0; i < frequence; i++) {

            let randomIndex = Math.floor(Math.random() * topic.length)

            while (indexList.includes(randomIndex)) {
                randomIndex = Math.floor(Math.random() * topic.length)
            }

            const wordObject = topic[randomIndex]

            finalList.push(wordObject)

        }

    })

    let array = []

    finalList.forEach(element => {
        const word = element.mot
        array.push(word)
    })

    return array
};

//expression, objet, personne, personnage, titre, atcivité, faune/flore, mot