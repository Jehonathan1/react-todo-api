import TaskList from "./TaskList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: tasks, isLoading, error } = useFetch('https://api.npoint.io/31c03301cf7db1410ee6')
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