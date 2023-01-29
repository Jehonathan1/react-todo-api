
import { useState, useEffect } from "react";
import TaskList from "./TaskList";

const Home = () => {

    let [isLoading, setIsLoading ] = useState(true); // present loading message while fetching data
    let [tasks, setTasks ] = useState(null); // present fetched data
    let [error, setError ] = useState(null); // present error if occures

    // fetch data on first render using useEffect
    const fetchData = async () => {
        try {
            
            const res = await fetch('https://api.npoint.io/31c03301cf7db1410ee6'); // fetch data
            if(!res.ok){ // if endpoint is faulty:
            throw new Error('invalid endpoint!')
            }
            const data = await res.json(); // convert to JSON format
            setTasks(data); // update the task list
            setIsLoading(false); // update loading status to 'false' 
            setError(null); // update error status 'null'  

        } catch (error) { // in case of errors:
            setIsLoading(false); // update loading status to 'false' 
            setError(error.message); // update error state and present on screen  
            setTasks(null); // hide tasks
        }
      };
      
      useEffect(() => { // fetch data on initial render
        fetchData();
      }, []);

    return ( 
       
       <div className="home">

            { error && <div> { error } </div> }
            { isLoading && <div> Loading...</div> }
            {/* conditional rendering: wait until tasks arrive */}
            {tasks && <TaskList tasks={tasks} title="All Tasks" /> }
         
        </div>
     );
}
 
export default Home;