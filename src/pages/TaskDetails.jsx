import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

const TaskDetails = () => {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();
    const { id } = useParams();
    const location = useLocation();
    const { title, author, completed, body } = location.state;
  
      // useEffect hook to retrieve the task list from the API
      useEffect(() => {
        const fetchTasks = async () => {
            const result = await fetch('https://api.npoint.io/31c03301cf7db1410ee6');
            const tasks = await result.json();
            setTasks(tasks);
        }
        fetchTasks();
    }, []);

    const handleDelete = async (e) => {
        e.preventDefault();
        let currentPosts = [...tasks].filter((task) => task.id != id);
        console.log('currentPosts: ',currentPosts)
        console.log('tasks: ', tasks)
       
        // delete all posts
        await fetch(`https://api.npoint.io/31c03301cf7db1410ee6`, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify([])
        });

        

        await fetch(`https://api.npoint.io/31c03301cf7db1410ee6`, {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify( currentPosts)
        });
      
          
           // add the new task to the list
           setTasks(currentPosts);
     
           console.log('updated tasks: ', tasks)
          //  console.log('updated tasks: ', tasks)

   
      
        navigate("/");
      };
  
    return ( 
      <div className="task-details">
        <article>
          <h2>{title}</h2>
          <h5>{body}</h5>
          <p>written by {author}</p>
          <p>completed: {completed ? 'yes' : 'not'}</p>
          <button onClick={handleDelete}>Delete task</button>
        </article>
      </div>
    );
  }
  export default TaskDetails;
