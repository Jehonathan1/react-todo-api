import { Link } from "react-router-dom";

const TaskList = ({tasks, title}) => { 
    // Destructure the 'tasks' prop 

    return ( 
        <div className="task-list">
            {/* Show title only if there are tasks */}
            {tasks.length !==0 && (
            <h2>{title}</h2>
            )}

            {/* Map over the 'tasks' and display a preview for each */}
            {tasks.map((task) => (
                <div className="task-preview" key={task.id}>
                    {/* Link to task details and pass task data in state */}
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
