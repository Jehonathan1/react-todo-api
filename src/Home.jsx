
import { useState, useEffect } from "react";
import TaskList from "./TaskList";

const Home = () => {

    let [tasks, setTasks ] = useState(null);
    let [isLoading, setIsLoading ] = useState(true);

    // fetch data on first render using useEffect
    const fetchData = async () => {
        try {
          const res = await fetch('https://api.npoint.io/31c03301cf7db1410ee6');
          const data = await res.json();
          setTasks(data); // update the task list
          setIsLoading(false); // update loading status 
        } catch (error) {
          console.error(error);
        }
      };
      
      useEffect(() => {
        fetchData();
      }, []);

    return ( 
       
       <div className="home">

            { isLoading && <div> Loading...</div> }
            {/* conditional rendering: wait until tasks arrive */}
            {tasks && <TaskList tasks={tasks} title="All Tasks" /> }
         
        </div>
     );
}
 
export default Home;