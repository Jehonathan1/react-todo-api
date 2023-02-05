import { useState, useEffect } from "react";

const Create = () => {
    const [title, setTitle] = useState(''); // state for the task title
    const [body, setBody] = useState(''); // state for the task body
    const [isPending, setIsPending] = useState(false); // state to toggle the loading spinner
    const [tasks, setTasks] = useState([]); // state to hold the list of tasks

    // useEffect hook to retrieve the task list from the API
    useEffect(() => {
        const fetchTasks = async () => {
            const result = await fetch('https://api.npoint.io/31c03301cf7db1410ee6');
            const tasks = await result.json();
            setTasks(tasks);
        }
        fetchTasks();
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTask = {title, body, author:'mr. me', completed: false,  id: Date.now()}

        setIsPending(true); // change button text

        // post the new task to the API
        await fetch('https://api.npoint.io/31c03301cf7db1410ee6', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify([newTask, ...tasks])
        });

        setIsPending(false); // re-activate button

        // add the new task to the list
        setTasks([newTask, ...tasks]);
    }
    
    return ( 
        <div className="create">
            <h2>Add a new task</h2>

            <form onSubmit={handleSubmit}>
            
            <label>Task Title: </label>
            {/* input field to capture the task title */}
            <input 
                type="text" 
                required
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
            />
            
            <label>Task body: </label>
            {/* textarea field to capture the task body */}
            <textarea 
                required
                value={body}
                onChange = {(e) => setBody(e.target.value)}
            ></textarea>

            {/* toggle the loading spinner */}
            { !isPending && <button>Add task</button>}
            { isPending && <button disabled>Loading...</button>}

            {/* display the task title and body */}
            <h4>{ title }</h4>
            <p>{ body }</p>
            </form>
        </div>
     );
}
 
export default Create;
