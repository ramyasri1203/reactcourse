import {useState,useEffect}from 'react';
import{v4 as uuidv4}from 'uuid';
import "./Todo.css"
import TaskDetail from "./TaskDetail";
import Taskitem from './Taskitem';
import axios from 'axios';
function Todoo(){
    // const students= ["john","vijay","ajay"];
    const [tasks,setTasks]=useState([]);
    const [newTask,setNewTask]=useState("");
    const URL="http://localhost:3000/tasks";
    

    useEffect(()=>{console.log("useEffect called")});
    useEffect(()=>{console.log("useEffect called")},[]);
    useEffect(()=>{console.log("useEffect called")},[newTask]);
    useEffect(()=>{console.log("useEffect called")},[tasks]);
    useEffect(()=>{console.log("useEffect called")},[tasks,newTask]);

    
    const getTask=()=>{
        axios.get(URL)
        .then((res)=>{
            console.log(res.data)
            setTasks(res.data)
    })
        .catch((error)=>console.log(error))
    }

    useEffect(()=>{getTask()},[]);

    
    const addTask=()=>{
        axios.post(URL,{taskName:newTask})
        .then((res)=>{
        setTasks([...tasks,res.data]);
        setNewTask("");
        })
        // setTasks([...tasks,{id:uuidv4(),taskName:newTask}]);
        // setNewTask("");
        .catch((error)=>console.log(error));
    
    }

    const putTask=(updatedData)=>{
    axios.put(`${URL}/${updatedData.id}`, {
     taskName: updatedData.taskName
})
    .then(()=>{})
    .catch((error)=>console.log(error));
    };

    const deleteTask=(delId)=>{
        axios.delete(`${URL}/${delId}`)
        .then(()=>{
            setTasks(tasks.filter((task)=>task.id !== delId))
            // setTasks(tasks.filter((tasks)=>task.id!=delId))
        })
        .catch((error)=>console.log(error));
    }

    return(
        
        <div className="container">
            <h1 className="title">Todo List</h1>
      < div className="todo-box">
        <div className="todo-header">
            <input
            type="text"
            
            value={newTask}
            onChange={(e)=>{setNewTask(e.
                target.value)}}
            />
            <button onClick={()=>{addTask()}}
            >Add Task </button>
            <button onClick={()=>{getTask()}}>Get Task</button>
             </div>
             
                <div className="todo-detail">
                    {/* <ul>
                        {tasks.map((task)=><li key={task}>{task}</li>}
                        </ul> */}
                    {/* <div
                    className="task-detail">
                        {tasks.map((task)=><h3
                    className="task" key={task.id}>
                        {task.taskName} </h3)}
                        </div/>} */}
                        <TaskDetail tasks={tasks}
                         setTasks={setTasks}
                         putTask={putTask}
                         deleteTask={deleteTask}/>
                        {/* <Taskitem tasks={taskName}/> */}
                        </div>     
                        </div>       
                        </div>
                        
                );
};
export  default Todoo;