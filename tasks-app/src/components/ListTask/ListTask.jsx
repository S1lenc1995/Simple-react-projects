import { useContext } from "react"
import { TaskContext } from "../../context"


const {tasks} = useContext(TaskContext)
console.log(tasks)