import React, { createContext, useState } from "react";

const StateContext = createContext();

const StateProvider = (props) => {

    const [gameMaster, setGameMaster] = useState(null)
    const [playerList, setPlayerList] = useState(["", "", "", ""])
    const [upTeam, setUpTeam] = useState([])
    const [downTeam, setDownTeam] = useState([])
    const [wordsList, setWordsList] = useState(["", "", "", "", ""])
    const [numberOfWords, setNumberOfWords] = useState(10)
    const [difficulty, setDifficulty] = useState(1)
    const [winner, setWinner] = useState(null)

    return (
        <StateContext.Provider
            value={{
                gameMaster,
                setGameMaster,
                playerList,
                setPlayerList,
                upTeam,
                setUpTeam,
                downTeam,
                setDownTeam,
                wordsList,
                setWordsList,
                numberOfWords,
                setNumberOfWords,
                difficulty,
                setDifficulty,
                winner,
                setWinner,
            }}
        >
            {props.children}
        </StateContext.Provider>
    )
}

export { StateProvider, StateContext };