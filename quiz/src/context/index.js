import { createContext, useState } from "react";


export const QuizeContext = createContext({})

const QuizProvider =({children}) =>{
    const [partOfGame, setPartOfGame] = useState('start')
    const [name, setName] = useState('')
    const [score, setScore] = useState(0)
    const [time, setTime] = useState({ms:0, s:0, m:0})
    

    const startTimer = ()=>{
        run()
        setInterval(run,10)
        console.log('g')
    }

    let updateMs = time.ms
    let updateS = time.s
    let updateM = time.m

    const run =()=>{
        if(updateS === 60){
            updateM++
            updateS =0; 
        }
        if(updateMs == 99){
            updateS++
            updateMs = 0
        }
        updateMs++
        return setTime({ms:updateMs, s:updateS, m:updateM })
    }




    return(
        <QuizeContext.Provider value={{partOfGame, setPartOfGame, setName, name, score, setScore, time, setTime,  startTimer }}>
            {children}
        </QuizeContext.Provider>
    )

} 

export default QuizProvider