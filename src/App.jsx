import Home from './pages/Home'
import Navbar from './pages/Navbar'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Create from './pages/Create'
import TaskDetails from './pages/TaskDetails'

function App() {

  return (
    <Router>
      <div className="App">

        <Navbar />

        <div className="content">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/tasks/:id' element={<TaskDetails />} />
          </Routes>
        </div>

      </div>
    </Router>
  )
}

export default App
