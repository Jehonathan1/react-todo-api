import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Todo List</h1>
            <div className="links">
                <Link to="/tasks">Home</Link>
                <Link to="/create">New Todo</Link>
            </div>
        </nav>
    );
}
 
export default Navbar;