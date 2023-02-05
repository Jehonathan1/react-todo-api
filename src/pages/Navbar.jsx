import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            {/* Main header */}
            <h1>Todo List</h1>
            <div className="links">
                {/* Link to the home page */}
                <Link to="/tasks">Home</Link>
                {/* Link to create a new todo */}
                <Link to="/create">New Todo</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;
