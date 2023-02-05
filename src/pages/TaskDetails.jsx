import { useLocation, useParams } from "react-router-dom";


const TaskDetails = () => {

    // Fetch the id parameter from the URL
    const { id } = useParams();
    
    // Use the 'useLocation' hook to access the current location
    const location = useLocation();

    // Destructure data passed in the state object
    const { title, author, completed, body } = location.state;
  
    return ( 
        <div className="task-details">
            { /* Display the task details */ }
            <article>
                <h2>{title}</h2>
                {/* <h6>{id}</h6> */}
                <h5>{body}</h5>
                <p>written by {author}</p>
                <p>completed: {completed? 'yes' : 'not'}</p>
            </article>
        </div>
     );
}
 
export default TaskDetails;
