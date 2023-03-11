import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from './Pages/Nav';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Createpost from './Pages/Create_Post/CreatePost';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/createpost' element={<Createpost/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
