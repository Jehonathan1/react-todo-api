
import { useState } from "react";
import TaskList from "./TaskList";

const Home = () => {

    let [tasks, setTasks ] = useState([
        { title: 'Make coffee', author: 'John', completed: true, id:1},
        { title: 'Change address', author: 'Bill', completed: false, id:2},
        { title: 'Build slideshow', author: 'Nancy', completed: true, id:3}
    ]);

    return ( 
       
       <div className="home">
          
            <TaskList tasks={tasks} title="All Tasks" />
            <TaskList tasks={tasks.filter((task) => task.completed === true)} title=" Completed Tasks" />
            <TaskList tasks={tasks.filter((task) => task.completed === false)} title=" Uncompleted Tasks" />
        
        </div>
     );
}
 
export default Home;