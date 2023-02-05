import Home from './pages/Home'
import Navbar from './pages/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Create from './pages/Create'
import TaskDetails from './pages/TaskDetails'

function App() {
  return (
    <Router>
      <div className="App">
        {/* Main navigation bar */}
        <Navbar />

        <div className="content">
          {/* Routes for different pages */}
          <Routes>
            {/* Home page */}
            <Route path='/tasks' element={<Home />} />
            {/* Page to create new task */}
            <Route path='/create' element={<Create />} />
            {/* Task detail page */}
            <Route path='/tasks/:id' element={<TaskDetails />} />
          </Routes>
        </div>

      </div>
    </Router>
  )
}

export default App
