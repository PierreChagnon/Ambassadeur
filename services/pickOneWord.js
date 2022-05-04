import words from "../data/data.json";

export default function() {
    const list = [...words]

    const i = Math.floor(Math.random() * list.length)

    return list[i]
}