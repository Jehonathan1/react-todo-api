import TaskList from "../pages/TaskList";
import useFetch from "../hooks/useFetch";

const Home = () => {

    // Use the custom hook 'useFetch' to fetch data from the API
    const { data: tasks, isLoading, error } = useFetch('https://api.npoint.io/31c03301cf7db1410ee6')
    return ( 
       
       <div className="home">

            {/* Display the error if there's any */}
            { error && <div> { error } </div> }

            {/* Display 'Loading...' if data is still loading */}
            { isLoading && <div> Loading...</div> }

            {/* Conditional rendering: wait until tasks arrive */}
            {tasks && <TaskList tasks={tasks} title="All Tasks" /> }
         
        </div>
     );
}
 
export default Home;
