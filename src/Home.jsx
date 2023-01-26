
import { useState } from "react";

const Home = () => {

    let [tasks, setTasks ] = useState([
        { title: 'Make coffee', author: 'John', created_at: 'today', id:1},
        { title: 'Change address', author: 'Bill', created_at: 'today', id:2},
        { title: 'Build slideshow', author: 'Nancy', created_at: 'today', id:3}
    ]);

    return ( 
       
       <div className="home">
          
            {tasks.map((task) => (
                <div className="task-preview" key={task.id}> 
                <h2>{ task.title }</h2>
                <p>{ task.author }</p>
                </div>
            ))}
        
        </div>
     );
}
 
export default Home;