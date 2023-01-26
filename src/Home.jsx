
import { useState } from "react";
import TaskList from "./TaskList";

const Home = () => {

    let [tasks, setTasks ] = useState([
        { title: 'Make coffee', author: 'John', created_at: 'today', id:1},
        { title: 'Change address', author: 'Bill', created_at: 'today', id:2},
        { title: 'Build slideshow', author: 'Nancy', created_at: 'today', id:3}
    ]);

    return ( 
       
       <div className="home">
          
            <TaskList tasks={tasks} title={'All Tasks'} />
        
        </div>
     );
}
 
export default Home;