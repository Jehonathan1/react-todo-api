import { useLocation, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const TaskDetails = () => {


    const { id } = useParams(); // fetch the id parameter from the url
    
    const location = useLocation();

   const { title, author, completed, body } = location.state;
  
    return ( 
        <div className="task-details">
            { 
                <article>
                    <h2>{title}</h2>
                    {/* <h6>{id}</h6> */}
                    <h5>{body}</h5>
                    <p>written by {author}</p>
                    <p>completed: {completed? 'yes' : 'not'}</p>
                </article>
             }
        </div>
     );

}
 
export default TaskDetails;