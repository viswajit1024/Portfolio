import Home from './pages/home'
import About from './pages/about'
import ProjectsPage from './pages/project';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<ProjectsPage/>} />
      </Routes>
    </Router>
  )
}

export default App