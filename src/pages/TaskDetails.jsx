import { useParams } from "react-router-dom";

const TaskDetails = () => {

    const { id } = useParams(); // fetch the id parameter from the url

    return ( 
        <div className="task-details">
            <h2>Task Details - { id } </h2>
        </div>
     );
}
 
export default TaskDetails;