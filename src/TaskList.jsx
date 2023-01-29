const TaskList = ({tasks, title}) => { // destructure 'tasks' props 
    return ( 
        <div className="task-list">
           
            {tasks.length !==0 && ( // show title onley if there are tasks
            <h2>{title}</h2>
            )}

            {tasks.map((task) => (
                <div className="task-preview" key={task.id}> 
                    <h2>{ task.title }</h2>
                    <p>{ task.author }</p>
                    
                </div>
            ))}
        </div>
     );
}
 
export default TaskList;