import words from "../data/data.json";

export default (numberOfWords) => {
    const result = [...words];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i);
        const temp = result[i];
        result[i] = result[j];
        result[j] = temp;
    }

    return result.slice(0, numberOfWords);
};