import { createContext, useState } from "react";
import api from '../api'

export const TaskContext = createContext({})

const TaskProvider = ({children}) =>{
    const [tasks, setTasks] = useState([]);

    const addTask = (value) => setTasks((prev) =>[...prev, value])

    return(
        <TaskContext.Provider value={{tasks, addTask}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;