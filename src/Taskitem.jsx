import { useState } from "react";
function Taskitem({ task,tasks,setTasks,putTask,deleteTask }) {
     const [edit,setEdit]=useState(false);
     const editTask=(evalue)=>{
     const updateTask=tasks.map((eTask)=>{
          if(eTask.id===task.id){
               eTask.taskName=evalue;
          }
          return eTask;
     })
     setTasks(updateTask);
     
}
const saveTask=()=>{
     putTask(task);
     setEdit(false);
}
     return (
          <div className="task">
               {edit
               ?(
          <>
          <input type="text" value={task.taskName}
          onChange={(e)=>editTask(e.target.value)}
          />
             <div className="btn-grp">
             <button className="save-button"
             onClick={saveTask}>
               Save
             </button>
             </div>
             </>
           
                ) :(
             <>

            <span className="text-name"> {task.taskName}</span> 
             <div className="btn-grp">
             <button className="edit-button"
             onClick={()=>setEdit(true)}>
               Edit
             </button>
             </div>
             </>
)}
         
                {/* <h3 >{taskName} </h3> */}
                {/* <div> */}

                      {/* <button className="edit-button">Edit</button> */}

 
                {/* <button className="delete-button">Delete</button> */}
               {/* <button >Delete</button> */}
             <button 
             className="delete-button"
             onClick={() => deleteTask(task.id)}
             >Delete</button>
               </div>
               
     
     );

}

export default Taskitem;
