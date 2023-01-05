import {useContext} from "react";
import { QuizeContext } from "../../context";

import './StartScreen.scss'


const StartScreen = () => {
    const {partOfGame, setPartOfGame, setName} = useContext(QuizeContext)
    return (
        <div className="start-screen">
            <h1>Welcome</h1>
            <h2>Enter your name</h2>
            <form>
                <input type="text" minLength={2} maxLength={15} />
                <button onClick={()=>{setPartOfGame('game')}} type="submit"></button>
            </form>
        </div>

    )
}

export default StartScreen