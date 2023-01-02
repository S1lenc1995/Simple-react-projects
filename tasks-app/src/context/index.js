import { createContext, useState } from "react";
import api from '../api'
import { sortTaskByGroup } from "../helpers";

export const TaskContext = createContext({})

const TaskProvider = ({children}) =>{
    const [tasks, setTasks] = useState([]);

    const addTask = (value) => setTasks((prev) =>sortTaskByGroup([...prev, value]))

    const updateTask = (id, message) =>{
        const taskUpdate = tasks.map((item)=>{
            if(id === item.id){
                item.message = message
            }
            return item
        })
        setTasks(sortTaskByGroup(taskUpdate))
    }


    const toggleTaskCompleted = (id) =>{
        const taskCompleted = tasks.map((item)=>{
            if(id === item.id){
                item.completed = !item.completed
            }
            return item
        })
        setTasks(sortTaskByGroup(taskCompleted))
    }


    const toggleTaskFavorite = (id) =>{
        const taskFavorite = tasks.map((item)=>{
            if(id === item.id){
                item.favorite = !item.favorite
            }
            return item
        })
        setTasks(sortTaskByGroup(taskFavorite))
    }

    const deleteTask = async (id) =>{
        const isRemove = await api.removeTask(id)
        if(isRemove){
            const newTasks = tasks.filter(todo => todo.id !== id)
            setTasks(newTasks)
        }
    }

    const completeAll = ()=>{
        const finishAll = tasks.map((el)=>{
            el.completed = true
            return el
        })
        setTasks(sortTaskByGroup(finishAll))
    }


    return(
        <TaskContext.Provider value={{tasks, addTask, toggleTaskCompleted, toggleTaskFavorite, deleteTask,  updateTask, completeAll}}>
            {children}
        </TaskContext.Provider>
    )
}

export default TaskProvider;