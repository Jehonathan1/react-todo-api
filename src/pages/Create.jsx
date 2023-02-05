import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState(''); // update the title state upon change
    const [body, setBody] = useState(''); // update the body state upon change
    return ( 
        <div className="create">
            <h2>Add a new task</h2>
            <form>
            
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

            <button>Add task</button>

            <h4>{ title }</h4>
            <p>{ body }</p>
            </form>
        </div>
     );
}
 
export default Create;