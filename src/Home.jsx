
import { useState } from "react";
import TaskList from "./TaskList";

const Home = () => {

    let [tasks, setTasks ] = useState([
        { title: 'Make coffee', author: 'John', completed: true, id:1},
        { title: 'Change address', author: 'Bill', completed: false, id:2},
        { title: 'Build slideshow', author: 'Nancy', completed: true, id:3}
    ]);

    // Delete tasks function
    // create a new filtered task list and set it as the new list
    // new list containd all tasks other than selected id 
    const handleDelete = (id) => { 
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }
    return ( 
       
       <div className="home">
          
            <TaskList tasks={tasks} title="All Tasks" handleDelete={handleDelete} />
            <TaskList tasks={tasks.filter((task) => task.completed === true)} title=" Completed Tasks" handleDelete={handleDelete} />
            <TaskList tasks={tasks.filter((task) => task.completed === false)} title=" Uncompleted Tasks" handleDelete={handleDelete} />
        
        </div>
     );
}
 
export default Home;