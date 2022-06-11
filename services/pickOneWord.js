import expressions from "../data/expressions.json";
import objets from "../data/objets.json"
import personnes from "../data/personnes.json"
import titres from "../data/titres.json"
import activités from "../data/activités.json"
import faune_flaure from "../data/faune_flaure.json"
import mots from "../data/mots.json"
import personnages from "../data/personnages.json"


export default function() {
    const topics = [expressions, objets, personnes, titres, activités, faune_flaure, mots, personnages]

    let list = []
    topics.forEach(topic => {
        topic.forEach(element => {
            list.push(element.mot)
        })
    })

    const i = Math.floor(Math.random() * list.length)

    return list[i]
}