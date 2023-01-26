
import { useState } from "react";

const Home = () => {

    let [task, setTask ] = useState('eat');
    let [date, setDate ] = useState(254);

    const handleClick = (name, e) => {
           console.log(`Hi there ${name}!`, e.target) 
           setTask('Sleep') 
           setDate(56)   
    }

    return ( 
        <div className="home">
            
            <h2>Homepage</h2>
            <p>{ task } is { date } years overdue!</p>

            <button onClick={(e) => handleClick('John',e)}>Click me again!</button> 

        </div>
     );
}
 
export default Home;