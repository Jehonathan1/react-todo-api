import { Link } from "react-router-dom";

const TaskList = ({tasks, title}) => { // destructure 'tasks' props 

    return ( 
        <div className="task-list">
           
            {tasks.length !==0 && ( // show title onley if there are tasks
            <h2>{title}</h2>
            )}

            {tasks.map((task) => (
                <div className="task-preview" key={task.id}>
                    <Link to={`/tasks/${task.id}`} state={task}>
                        <h2>{ task.title }</h2>
                        <p>{ task.author }</p>
                    </Link> 
                    
                </div>
            ))}
        </div>
     );
}
 
export default TaskList;