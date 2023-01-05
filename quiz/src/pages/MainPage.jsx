import React from "react";
import { Children } from "react";
import './MainPage.scss'


const MainPage= ({children}) =>{
    return(
        <div className="page">
            <div className="quiz-wraper">
                {children}
            </div>
        </div>
    )
}

export default MainPage