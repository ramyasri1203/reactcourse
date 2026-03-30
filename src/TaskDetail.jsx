import TaskItem from "./Taskitem";
function TaskDetail({tasks,setTasks,putTask,deleteTask}){
    return(
        <div className="task-detail">
            {tasks.map((task)=>(
            <TaskItem 
            key={task.id}
            task={task}
            tasks={tasks} 
            setTasks={setTasks}
            putTask={putTask}
            deleteTask={deleteTask}
            // taskName={task.taskName}
            />
            ))}

        </div>
    )
}
export default TaskDetail;