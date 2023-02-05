import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState(''); // update the title state upon change
    const [body, setBody] = useState(''); // update the body state upon change
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {title, body, author:'mr. me', completed: false,  id:'1234'}

        setIsPending(true); // change button text

        fetch('https://api.npoint.io/31c03301cf7db1410ee6', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify([newTask])
        }).then(() => {
            console.log('new task added!')
        })

        setIsPending(false); // re-activate button
    }
    
    return ( 
        <div className="create">
            <h2>Add a new task</h2>

            <form onSubmit={handleSubmit}>
            
            <label>Task Title: </label>
            <input 
                type="text" 
                required
                value={title}
                onChange = {(e) => setTitle(e.target.value)}
            />
            
            <label>Task body: </label>
            <textarea 
                required
                value={body}
                onChange = {(e) => setBody(e.target.value)}
            ></textarea>

            { !isPending && <button>Add task</button>}
            { isPending && <button disabled>Loading...</button>}

            <h4>{ title }</h4>
            <p>{ body }</p>
            </form>
        </div>
     );
}
 
export default Create;