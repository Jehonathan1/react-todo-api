
import { useState, useEffect } from "react";
import TaskList from "./TaskList";

const Home = () => {

    let [tasks, setTasks ] = useState(null);

    // fetch data on first render using useEffect
    const fetchData = async () => {
        try {
          const res = await fetch('https://api.npoint.io/31c03301cf7db1410ee6');
          const data = await res.json();
          setTasks(data); // update the task list
        } catch (error) {
          console.error(error);
        }
      };
      
      useEffect(() => {
        fetchData();
      }, []);

    return ( 
       
       <div className="home">
            {/* conditional rendering: wait until tasks arrive */}
            {tasks && <TaskList tasks={tasks} title="All Tasks" /> }
         
        </div>
     );
}
 
export default Home;