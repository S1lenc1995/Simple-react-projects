import { createContext, useState } from "react";


export const QuizeContext = createContext({})

const QuizProvider =({children}) =>{

    const [partOfGame, setPartOfGame] = useState('start')
    const [name, setName] = useState('')

    return(
        <QuizeContext.Provider value={{partOfGame, setPartOfGame, setName }}>
            {children}
        </QuizeContext.Provider>
    )

} 

export default QuizProvider