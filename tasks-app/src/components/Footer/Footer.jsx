import { useContext } from "react";
import Checkbox from "../Checkbox";
import { TaskContext } from "../../context";
import './Foter.scss'


const Foter=()=>{
    const { completeAll} = useContext(TaskContext)
    return(
        <footer className="all-completed">
        <Checkbox onClick={completeAll}>
            <p >All tasks completed</p>    
        </Checkbox>
        </footer>
      
      
    )
}

export default Foter